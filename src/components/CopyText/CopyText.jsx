import PropTypes from "prop-types";
import "./CopyText.scss";

const CopyText = ({ copyBtnClick, loading }) => {
  return (
    <div className="copyText-btn-container">
      {loading ? (
        <button className="copyText-btn">
          <span className="copy-loader"></span>
        </button>
      ) : (
        <button className="copyText-btn" onClick={copyBtnClick}>
          テキストをコピー
        </button>
      )}
    </div>
  );
};

CopyText.propTypes = {
  copyBtnClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CopyText;
