import PropTypes from "prop-types";
import "./Save.scss";

const Save = ({ onClick }) => {
  return (
    <div className="save-btn-container">
      <button className="save-btn" onClick={onClick}>
        保存
      </button>
    </div>
  );
};

Save.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Save;
