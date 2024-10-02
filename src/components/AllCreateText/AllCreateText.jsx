import { useState } from "react";
import "./AllCreateText.scss";

const AllCreateText = ({ onClick }) => {
  const [loading, setLoading] = useState(false);
	

  return (
    <div className="allCreateText-btn-container">
      <button className="allCreateText-btn" onClick={onClick}>
        一括生成
      </button>
    </div>
  );
};

export default AllCreateText;
