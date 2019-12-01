import React from 'react';
import ReactDOM from 'react-dom';

import SimpleFileUpload from './components/simple-file-uploader'
import './styles.css';

function App() {
  const handleFileReady = file => {
    console.log("uploaded file: ", file.type);
  };
  return (
    <div className="App">
      <SimpleFileUpload onFileReady={handleFileReady} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);