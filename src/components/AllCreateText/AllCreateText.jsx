import "./AllCreateText.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategoryPrompt,
  createTagPrompt,
  createTitlePrompt,
} from "../../utils/createPrompt";
import {
  createCategoryAsync,
  createTagAsync,
  createTitleAsync,
} from "../../utils/clickHandler";

const AllCreateText = () => {
  const dispatch = useDispatch();
  const { selectedImg } = useSelector((state) => state.img);

  const allCreateClick = async () => {
    if (!selectedImg) {
      alert("エラー： 画像を選択してください。");
    } else {
      dispatch(createTitleAsync(createTitlePrompt, selectedImg));
      dispatch(createTagAsync(createTagPrompt, selectedImg));
      dispatch(createCategoryAsync(createCategoryPrompt, selectedImg));
    }
  };
  return (
    <div className="allCreateText-btn-container">
      <button className="allCreateText-btn" onClick={allCreateClick}>
        ChatGPTで生成
      </button>
    </div>
  );
};

export default AllCreateText;
