import React, { useRef } from 'react';
import { func } from 'prop-types';

const SimpleFileUpload = ({ onFileReady }) => {
  const fileBrowserRef = useRef(null);

  const handleBrowseFiles = () => {
    const { current: fileBrowser } = fileBrowserRef;
    fileBrowser.value = null;
    fileBrowser.click();
  };

  const handleFiles = event => {
    event.stopPropagation();
    event.preventDefault();

    const file = event.target.files[0];
    onFileReady(file);
  };

  return (
   <div>
      <button 
        type="button" 
        onClick={handleBrowseFiles}>
        Browse File
       </button>
      <input
        type="file"
        multiple
        ref={fileBrowserRef}
        style={{ display: 'none' }}
        onChange={handleFiles}
      />
    </div>
  );
};

SimpleFileUpload.propTypes = {
  onFileReady: func,
};

SimpleFileUpload.defaultProps = {
  onFileReady: Function.prototype,
};

export default SimpleFileUpload;