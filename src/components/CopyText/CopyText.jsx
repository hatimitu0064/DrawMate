import "./CopyText.scss";
import { useDispatch, useSelector } from "react-redux";
import { copyArray } from "../../utils/clickHandler";
import { endLoading, startLoading } from "../../features/loading/Loading";

const CopyText = () => {
  const dispatch = useDispatch();
  const { inputTitle } = useSelector((state) => state.create.title);
  const { inputTag } = useSelector((state) => state.create.tag);
  const { loadingCopy } = useSelector((state) => state.loading);

  const copyBtnClick = async () => {
    // 生成されたテキストを配列で所持する
    const copyTextArray = [inputTag, inputTitle];
    dispatch(startLoading({ type: "loadingCopy" }));
    await copyArray(copyTextArray);
    dispatch(endLoading({ type: "loadingCopy" }));
  };

  return (
    <div className="copyText-btn-container">
      {loadingCopy ? (
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

export default CopyText;
