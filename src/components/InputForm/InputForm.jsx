import "./InputForm.scss";
import { imgChange } from "../../utils/clickHandler";
import { useDispatch } from "react-redux";
import { setImg } from "../../features/selectedImg/SelectedImgSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const handleImgChange = (e) => imgChange(e, setImg, dispatch);

  return (
    <form className="input-container">
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImgChange}
      />
    </form>
  );
};

export default InputForm;
