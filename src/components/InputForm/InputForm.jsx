import PropTypes from "prop-types";
import "./InputForm.scss";
import { imgChange } from "../../utils/clickHandler";

const InputForm = ({ setSelectedImg }) => {
  const handleImgChange = (e) => imgChange(e, setSelectedImg);

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

InputForm.propTypes = {
  setSelectedImg: PropTypes.func.isRequired,
};

export default InputForm;
