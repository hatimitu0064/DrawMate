const Create = ({ onClick, inputState, setInputFn, btnText, loading }) => {
  const handleInputChange = (e) => {
    setInputFn(e.target.value);
  };

  return (
    <div className="create-container">
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
            rows={10}
            cols={70}
          />
        )}
      </div>
      <div className="create-btn-container">
        <button className="create-btn" onClick={onClick}>
          {btnText}生成
        </button>
      </div>
    </div>
  );
};

export default Create;
