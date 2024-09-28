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

export default AllCreateText;
