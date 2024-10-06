import PropTypes from "prop-types";

const MoreCreateBtn = ({ onClick, btnText }) => {
  return (
    <div className="create-btn-container">
      <button className="create-btn" onClick={onClick}>
        もう一度{btnText}生成
      </button>
    </div>
  );
};

MoreCreateBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default MoreCreateBtn;
