import PropTypes from "prop-types";
import GPTresponse from "../GPTresponse/GPTresponse";
import MoreCreateBtn from "../CreateBtn/CreateBtn";

const Create = ({ onClick, inputState, setInputFn,  btnText, loading }) => {
  const handleInputChange = (e) => {
    setInputFn(e.target.value);
  };

  return (
    <div className="create-container">
      <GPTresponse
        loading={loading}
        inputState={inputState}
        handleInputChange={handleInputChange}
      />
      <MoreCreateBtn onClick={onClick} btnText={btnText} />
    </div>
  );
};

Create.propTypes = {
  onClick: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
  setInputFn: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Create;
