import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Scss/FsLightbox.scss";
import Nav from "./Components/Nav/Nav.jsx";
import SlideButtonLeft from "./Components/SlideButtons/SlideButtonLeft.jsx";
import SlideButtonRight from "./Components/SlideButtons/SlideButtonRight.jsx";
import SourcesWrapper from "./Components/Sources/SourcesWrapper.jsx";
import { createRefsArrayForNumberOfSlides } from "./Helpers/Arrays/createRefsArrayForNumberOfSlides";
import { createNullArrayForNumberOfSlides } from "./Helpers/Arrays/createNullArrayForNumberOfSlides";
import { Core } from "./Core/Core";
import DownEventDetector from "./Components/SlideSwiping/DownEventDetector.jsx";
import SwipingInvisibleHover from "./Components/SlideSwiping/SwipingInvisibleHover.jsx";
import { StageSourceHoldersByValueTransformer } from "./Core/Transforms/StageSourceHoldersTransformers/StageSourceHoldersByValueTransformer";
import { SourceHolderTransformer } from "./Core/Transforms/SourceHolderTransformer";
import { SlideSwipingMoveActions } from "./Core/SlideSwiping/Actions/Move/SlideSwipingMoveActions";
import { SlideSwipingUpActions } from "./Core/SlideSwiping/Actions/Up/SlideSwipingUpActions";
import { SwipingTransitioner } from "./Core/SlideSwiping/Actions/Up/SwipingTransitioner";
import { SwipingSlideChanger } from "./Core/SlideSwiping/Actions/Up/SwipingSlideChanger";
import { SourceComponentGetter } from "./Core/Sources/Creating/SourceComponentGetter";
import { SourceCreator } from "./Core/Sources/SourceCreator";
import { SourceTypeGetter } from "./Core/Sources/Creating/SourceTypeGetter";
import { SourceSizeAdjusterIterator } from "./Core/Sizes/SourceSizeAdjusterIterator";
import { RefactoredSourceComponentGetter } from "./Core/Sources/Creating/RefactoredSourceComponentGetter";

class FsLightbox extends Component {
    constructor(props) {
        super(props);
        this.setUpData();
        this.setUpSourcesData();
        this.setUpStates();
        this.setUpGetters();
        this.setUpSetters();
        this.setUpElements();
        this.setUpCollections();
        this.setUpInjector();
        this.setUpCore();
    }

    setUpData() {
        /**
         * @type {{isToolbarCoreInitialized: boolean, deviceType: number, urls: Array, totalSlides: number, isInitialized: boolean, isSwipingSlides: boolean}}
         */
        this.data = {
            urls: this.props.urls,
            totalSlides: this.props.urls.length,
            isToolbarCoreInitialized: false,
            isInitialized: false,
            isSwipingSlides: false,
        };
    }

    setUpSourcesData() {
        /**
         * @type {{slideDistance: *, sourcesTypes: Array, maxSourceHeight: number, isSourceAlreadyInitializedArray: Array, videosPosters: Array, maxSourceWidth: number, sourcesToCreateOnConstruct: Array, sourcesDimensions: Array}}
         */
        this.sourcesData = {
            sourcesTypes: [],
            isSourceAlreadyInitializedArray: [],
            // if lightbox will be closed during source type check we need call create source after next open
            sourcesToCreateOnConstruct: [],
            videosPosters: (this.props.videosPosters) ? this.props.videosPosters : [],
            maxSourceWidth: 0,
            maxSourceHeight: 0,
            slideDistance: (this.props.slideDistance) ? this.props.slideDistance : 1.3,
            sourcesDimensions: [],
        };
    }

    setUpStates() {
        this.state = {
            isOpen: this.props.isOpen,
        };

        // to objects are assigned in correct Components two methods:
        // - get()
        // - set(value)
        // And (only if it is used, be default not) property:
        // - onUpdate - after setting it to method it will be called once component updates
        // (its called only one time - after first call its deleted)
        this.componentsStates = {
            slide: {},
            isSwipingSlides: {},
            isFullscreenOpen: {},
            sourcesComponents: {},
        };
    }

    setUpGetters() {
        this.getters = {
            initialize: () => this.initialize(),
        };
    }

    setUpSetters() {
        this.setters = {
            setState: (value, callback) => this.setState(value, callback),
        }
    }

    setUpElements() {
        this.elements = {
            container: React.createRef(),
            sourcesWrapper: React.createRef(),
            sources: createRefsArrayForNumberOfSlides(this.data.totalSlides),
            sourceHolders: createRefsArrayForNumberOfSlides(this.data.totalSlides),
            sourcesJSXComponents: createNullArrayForNumberOfSlides(this.data.totalSlides),
            createdButNotRenderedSourcesComponents: [],
        };
    }

    setUpCollections() {
        this.collections = {
            // after source load its size adjuster will be stored in this array so SourceSizeAdjusterIterator may use it
            sourceSizeAdjusters: [],
            properSourcesControllers: [],
        }
    }

    setUpInjector() {
        this.injector = {
            sizes: {
                getSourceSizeAdjusterIterator: () => new SourceSizeAdjusterIterator(this)
            },
            slideSwiping: {
                getMoveActionsForSwipingProps: (swipingProps) => new SlideSwipingMoveActions(this, swipingProps),
                getUpActionsForSwipingProps: (swipingProps) => new SlideSwipingUpActions(this, swipingProps),
                getSwipingTransitioner: () => new SwipingTransitioner(this),
                getSwipingSlideChangerForSwipingTransitioner: (swipingTransitioner) => new SwipingSlideChanger(this, swipingTransitioner),
            },
            source: {
                getSourceComponentGetter: () => new RefactoredSourceComponentGetter(this),
                getSourceTypeGetter: () => new SourceTypeGetter(),
                getSourceCreator: () => new SourceCreator()
            },
            transforms: {
                getSourceHolderTransformer: () => new SourceHolderTransformer(this),
                getStageSourceHoldersByValueTransformer: () => new StageSourceHoldersByValueTransformer(this),
                getInitialStageSourceHoldersByValueTransformer: () => ({ stageSourcesIndexes: {} })
            }
        };
    }

    setUpCore() {
        this.core = new Core(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isOpen !== this.props.isOpen) {
            (this.state.isOpen) ?
                this.core.closeOpenLightbox.closeLightbox() :
                this.core.closeOpenLightbox.openLightbox();
        }
        if (prevProps.slide !== this.props.slide) {
            this.core.slideChanger.changeSlideTo(this.props.slide);
        }
    }

    initialize() {
        this.data.isInitialized = true;
        this.core.globalResizingController.saveMaxSourcesDimensionsAndAdjustSourcesWrapperSize();
        this.core.eventsControllers.window.resize.attachListener();
        this.core.eventsControllers.window.swiping.attachListeners();
        this.core.sourceHoldersTransformer.transformStageSourceHolders().withoutTimeout();
    }

    componentDidMount() {
        if (this.props.isOpen) {
            this.initialize();
            this.core.closeOpenLightbox.addOpeningClassToDocument();
        }
    }

    render() {
        if (!this.state.isOpen) return null;

        return (
            <div ref={ this.elements.container }
                 className="fslightbox-container fslightbox-full-dimension fslightbox-fade-in-long">
                <DownEventDetector fsLightbox={ this }/>
                <SwipingInvisibleHover fsLightbox={ this }/>
                <Nav fsLightbox={ this }/>
                { (this.data.totalSlides > 1) ?
                    <>
                        <SlideButtonLeft fsLightbox={ this }/>
                        <SlideButtonRight fsLightbox={ this }/>
                    </> : null
                }
                <SourcesWrapper fsLightbox={ this }/>
            </div>
        );
    }
}

FsLightbox.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    urls: PropTypes.array.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onInit: PropTypes.func,
    onShow: PropTypes.func,
    videosPosters: PropTypes.array,
    slide: PropTypes.number,
    slideDistance: PropTypes.number,
};

export default FsLightbox;