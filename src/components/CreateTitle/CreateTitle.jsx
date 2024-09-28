const CreateTitle = ({onClick, inputTitle, setInputTitle}) => {
  const handleInputTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  return (
    <div className="createTitle-container">
      <div className="GPT-response-container">
        {inputTitle === "ChatGPTでタイトルを生成" ? (
          <p>{inputTitle}</p>
        ) : (
          <textarea
            className="GPT-response"
            type="text"
            value={inputTitle}
            onChange={handleInputTitleChange}
            rows={10}
            cols={70}
          />
        )}
      </div>
      <div className="createTitle-btn-container">
        <button className="createTitle-btn" onClick={onClick}>
          タイトル生成
        </button>
      </div>
    </div>
  );
};

export default CreateTitle;
