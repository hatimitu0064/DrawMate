import "./ImgForm.scss";
import AllCreateText from "../AllCreateText/AllCreateText";
import CopyText from "../CopyText/CopyText";
import ImgUploader from "../ImgUploader/ImgUploader";
import InputForm from "../InputForm/InputForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetTitle } from "../../features/createText/CreateTitle";
import { resetTag } from "../../features/createText/CreateTag";
import { resetCategory } from "../../features/createText/CreateCategory";

const ImgForm = () => {
  const dispatch = useDispatch();
  const { selectedImg } = useSelector((state) => state.img);

  //画像の変更を監視してtextを初期化
  useEffect(() => {
    if (selectedImg) {
      dispatch(resetTitle());
      dispatch(resetTag());
      dispatch(resetCategory());
    }
  }, [selectedImg]);

  return (
    <>
      <div className="img-form-container">
        <div className="img-form-wrapper">
          <div className="img-container">
            {!selectedImg ? (
              <div className="imgUploader-wrapper">
                <ImgUploader />
              </div>
            ) : (
              <ImgUploader />
            )}
          </div>
          <div className="btn-container">
            <AllCreateText />
            <CopyText />
          </div>
        </div>
        <InputForm />
      </div>
    </>
  );
};

export default ImgForm;
