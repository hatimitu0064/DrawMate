import PropTypes from "prop-types";

const GPTresponse = ({ loading, inputState, handleInputChange }) => {
  return (
    <div className="GPT-response-container">
      {loading ? (
        <div className="loader"></div> // ローディング中の表示
      ) : /^(chatGPTで(タイトル|タグ|カテゴリー)を生成)$/.test(inputState) ? (
        <p>{inputState}</p>
      ) : (
        <textarea
          className="GPT-response"
          value={inputState || ""}
          onChange={handleInputChange}
          rows={15}
          cols={70}
        />
      )}
    </div>
  );
};

GPTresponse.propTypes = {
  loading: PropTypes.bool.isRequired,
  inputState: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default GPTresponse;
