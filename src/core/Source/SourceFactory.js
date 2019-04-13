import React from 'react';
import { IMAGE_TYPE, INVALID_TYPE, VIDEO_TYPE, YOUTUBE_TYPE } from "../../constants/CoreConstants";
import Video from "../../components/Sources/ProperSources/Video.jsx";
import Youtube from "../../components/Sources/ProperSources/Youtube.jsx";
import Invalid from "../../components/Sources/ProperSources/Invalid.jsx";
import Image from "../../components/Sources/ProperSources/Image.jsx";

/**
 * @class
 * @param { FsLightbox } fsLightbox
 */
export function SourceFactory(fsLightbox) {
    const {
        sourcesData,
    } = fsLightbox;

    let ProperSourceComponentName;
    let SourceComponent;
    let sourceIndex;

    this.setSourceIndex = (i) => {
        sourceIndex = i;
    };

    this.getSourceComponent = () => {
        createCorrectSourceByItsType();
        return SourceComponent;
    };

    const createCorrectSourceByItsType = () => {
        setUpProperSourceComponent();
        createProperSourceComponent();
    };

    const setUpProperSourceComponent = () => {
        switch (sourcesData.sourcesTypes[sourceIndex]) {
            case IMAGE_TYPE:
                setUpSourceComponentToImage();
                break;
            case VIDEO_TYPE:
                setUpSourceComponentToVideo();
                break;
            case YOUTUBE_TYPE:
                setUpSourceComponentToYoutube();
                break;
            default:
                setUpSourceComponentToInvalid();
        }
    };

    const setUpSourceComponentToImage = () => {
        ProperSourceComponentName = Image;
    };

    const setUpSourceComponentToVideo = () => {
        ProperSourceComponentName = Video;
    };

    const setUpSourceComponentToYoutube = () => {
        ProperSourceComponentName = Youtube;
    };

    const setUpSourceComponentToInvalid = () => {
        ProperSourceComponentName = Invalid;
    };

    const createProperSourceComponent = () => {
        SourceComponent = <ProperSourceComponentName
            fsLightbox={ fsLightbox }
            index={ sourceIndex }
        />;
    };
}