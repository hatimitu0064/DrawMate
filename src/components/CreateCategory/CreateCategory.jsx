const CreateCategory = ({onClick, inputCategory, setInputCategory}) => {
  const handleInputCategoryChange = (e) => {
    setInputCategory(e.target.value);
  };


  return (
    <div className="createTitle-container">
      <div className="GPT-response-container">
        {inputCategory === "chatGPTでカテゴリーを生成" ? (
          <p>{inputCategory}</p>
        ) : (
          <textarea
            className="GPT-response"
            type="text"
            value={inputCategory}
            onChange={handleInputCategoryChange}
            rows={10}
            cols={70}
          />
        )}
      </div>
      <div className="createTitle-btn-container">
        <button className="createTitle-btn" onClick={onClick}>
          カテゴリー生成
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
