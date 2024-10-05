import PropTypes from "prop-types";

import "./ImgForm.scss";
import AllCreateText from "../AllCreateText/AllCreateText";
import CopyText from "../CopyText/CopyText";

const ImgForm = ({ selectedImg, setSelectedImg, onClick }) => {
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
    <>
      <div className="img-form-container">
        {setSelectedImg && (
          <div className="img-wrapper">
            <div className="img-container">
              {!selectedImg ? (
                <label htmlFor="fileInput" className="fileInput-label">
                  クリックして<br></br>画像を選択。
                </label>
              ) : (
                <label htmlFor="fileInput" className="img-wrap">
                  <img src={selectedImg} className="selectImg" />
                </label>
              )}
            </div>
            <div className="btn-container">
              <AllCreateText onClick={onClick} />
              <CopyText />
            </div>
          </div>
        )}
        <form className="input-container">
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImgChange}
          />
        </form>
      </div>
    </>
  );
};

ImgForm.propTypes = {
  selectedImg: PropTypes.string,
  setSelectedImg: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImgForm;
