import { useState } from "react";
import './ImgForm.scss'

const ImgForm = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="img-form-container">
      {setSelectedImg && (
        <div className="img-container">
          <img src={selectedImg} className="selectImg" />
        </div>
      )}
      <form className="input-container">
        <input id="fileInput" type="file" accept="image/*" onChange={handleImgChange} />
				<label htmlFor="fileInput" className="fileInput-label">画像を選択</label>
      </form>
    </div>
  );
};

export default ImgForm;
