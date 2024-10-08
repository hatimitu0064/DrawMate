import "./Save.scss";
import { useSelector } from "react-redux";
import { generateFileName, handleDownload } from "../../utils/clickHandler";

const Save = () => {
  const { inputTitle } = useSelector((state) => state.create);
  const { inputTag } = useSelector((state) => state.create);
  const { inputCategory } = useSelector((state) => state.create);
  const { selectedImg } = useSelector((state) => state.img);

  const saveBtnClick = () =>
    handleDownload(
      `タイトル\n${inputTitle}\n\nタグ\n${inputTag}\n\nカテゴリー\n${inputCategory}`,
      selectedImg,
      generateFileName
    );
  return (
    <div className="save-btn-container">
      <button className="save-btn" onClick={saveBtnClick}>
        保存
      </button>
    </div>
  );
};

export default Save;
