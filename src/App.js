import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
//import './index.css'
import './App.css';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
    <div className="App">
    <div className='header'>
        <span>Gallery</span>
      </div>
      {/* <Title/> */}
    
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      
      <div className='footer'>
        
        <span>Fullstack Challenge - 2020</span>
        </div>

    </div>
    </>
  );
}

export default App;
