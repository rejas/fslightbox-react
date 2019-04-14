import React from 'react';
import { shallow } from "enzyme";
import SourceLoader from "../../../../src/Components/Loaders/SourceLoader";

const sourceLoader = shallow(<SourceLoader/>);

describe('SourceLoader DOM', () => {
    it('should match snapshot', () => {
        expect(sourceLoader).toMatchSnapshot();
    });
});