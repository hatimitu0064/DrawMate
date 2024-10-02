import PropTypes from "prop-types";
import "./AllCreateText.scss";

const AllCreateText = ({ onClick }) => {
  return (
    <div className="allCreateText-btn-container">
      <button className="allCreateText-btn" onClick={onClick}>
        一括生成
      </button>
    </div>
  );
};

AllCreateText.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AllCreateText;
