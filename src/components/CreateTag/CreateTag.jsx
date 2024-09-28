const CreateTag = ({onClick, setInputTags, inputTags}) => {

  const handleInputTagsChange = (e) => {
    setInputTags(e.target.value);
  };

  return (
    <div className="createTitle-container">
      <div className="GPT-response-container">
        {inputTags === "chatGPTでタグを生成" ? (
          <p>{inputTags}</p>
        ) : (
          <textarea
            className="GPT-response"
            type="text"
            value={inputTags}
            onChange={handleInputTagsChange}
            rows={10}
            cols={70}
          />
        )}
      </div>
      <div className="createTitle-btn-container">
        <button className="createTitle-btn" onClick={onClick}>
          タグ生成
        </button>
      </div>
    </div>
  );
};

export default CreateTag;
