import React from 'react';
import SimpleFileUpload from '../../components/simple-file-uploader';

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
 
describe('UploadButton()', () => {
  it('calls onFileReady() when  file is loaded', () => {
  
    const testFile = new File(['(⌐□_□)'], 'cool.png', {
      type : 'image.png',
    });
  
    const onFileReady = jest.fn();
    const testFileInputComponent = mount(
      <SimpleFileUpload onFileReady={onFileReady}/>
    );
  
    const testFileInput = testFileInputComponent.find('input');
    Object.defineProperty(testFileInput.instance(), "files", {
      value: [testFile]
    });
  
    testFileInput.simulate('change');
  
    expect(onFileReady).toHaveBeenCalledWith(testFile);
  });
});