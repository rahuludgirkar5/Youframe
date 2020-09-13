import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      {/* <center>
<button>
        <input type="file" onChange={handleChange} />
        <span><img src="upload.svg" height="15px" width="15px"></img>Upload</span>
      </button>
      </center> */}
      <center>
                    <button class="fileUpload">
                        <span ><img src="upload.svg" height="15px" width="15px"></img>  Upload</span>
                        <input type="file" class="upload" accept="image/*" onChange={handleChange}/>
                    </button>
                    </center>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;