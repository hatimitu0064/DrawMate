import PropTypes from "prop-types";
import "./AllCreateText.scss";

const AllCreateText = ({ allCreateClick }) => {
  return (
    <div className="allCreateText-btn-container">
      <button className="allCreateText-btn" onClick={allCreateClick}>
        ChatGPTで生成
      </button>
    </div>
  );
};

AllCreateText.propTypes = {
  allCreateClick: PropTypes.func.isRequired,
};

export default AllCreateText;
