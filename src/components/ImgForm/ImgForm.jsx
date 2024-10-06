import PropTypes from "prop-types";

import "./ImgForm.scss";
import AllCreateText from "../AllCreateText/AllCreateText";
import CopyText from "../CopyText/CopyText";
import ImgUploader from "../ImgUploader/ImgUploader";
import InputForm from "../InputForm/InputForm";

const ImgForm = ({
  selectedImg,
  setSelectedImg,
  allCreateClick,
  copyBtnClick,
  loading,
}) => {
  return (
    <>
      <div className="img-form-container">
        <div className="img-form-wrapper">
          <div className="img-container">
            {!selectedImg ? (
              <div className="imgUploader-wrapper">
                <ImgUploader img={selectedImg} setImg={setSelectedImg} />
              </div>
            ) : (
              <ImgUploader img={selectedImg} setImg={setSelectedImg} />
            )}
          </div>
          <div className="btn-container">
            <AllCreateText allCreateClick={allCreateClick} />
            <CopyText copyBtnClick={copyBtnClick} loading={loading} />
          </div>
        </div>
        <InputForm setSelectedImg={setSelectedImg} />
      </div>
    </>
  );
};

ImgForm.propTypes = {
  selectedImg: PropTypes.string,
  setSelectedImg: PropTypes.func.isRequired,
  allCreateClick: PropTypes.func.isRequired,
  copyBtnClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ImgForm;
