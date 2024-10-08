import JSZip from "jszip";
import { saveAs } from "file-saver"; // file-saverは、生成したZIPをダウンロードするために使用
import CreateItems from "./createItemsClass";
import {
  setTitle,
  setTag,
  setCategory,
} from "../features/createText/CreateText";
import { endLoading, startLoading } from "../features/loading/Loading";

// APIにプロンプトを投げてそのresponseを保存する関数
export const handleCreateBtn = async (setInput, prompt, img) => {
  if (!img) {
    alert("エラー： 画像を選択してください。");
  } else {
    const createItems = new CreateItems(prompt, img);
    await createItems.fetchRes();
    console.log(createItems.prompt);
    setInput(createItems.res);
  }
};

export const ReduxHandleCreateBtn = async (dispatch, setFn, prompt, img) => {
  if (!img) {
    alert("エラー： 画像を選択してください。");
  } else {
    const createItems = new CreateItems(prompt, img);
    await createItems.fetchRes();
    // console.log(createItems.prompt);
    dispatch(setFn(createItems.res));
  }
};

export const createTitleAsync = (prompt, img) => async (dispatch) => {
  dispatch(startLoading({ type: "loadingTitle" })); // ローディングを開始
  await ReduxHandleCreateBtn(dispatch, setTitle, prompt, img); // dispatchを渡して非同期処理を実行
  dispatch(endLoading({ type: "loadingTitle" })); // ローディングを終了
};

export const createTagAsync = (prompt, img) => async (dispatch) => {
  dispatch(startLoading({ type: "loadingTag" }));
  await ReduxHandleCreateBtn(dispatch, setTag, prompt, img);
  dispatch(endLoading({ type: "loadingTag" }));
};

export const createCategoryAsync = (prompt, img) => async (dispatch) => {
  dispatch(startLoading({ type: "loadingCategory" }));
  await ReduxHandleCreateBtn(dispatch, setCategory, prompt, img);
  dispatch(endLoading({ type: "loadingCategory" }));
};

// 生成物をZIPファイルとしてDLできるようにする関数
export const handleDownload = async (text, img, generateFileName) => {
  if (
    !img ||
    text ===
      "タイトル\nchatGPTでタイトルを生成\n\nタグ\nchatGPTでタグを生成\n\nカテゴリー\nchatGPTでカテゴリーを生成"
  ) {
    alert("必要な項目に変更がありません。");
  } else {
    const zip = new JSZip();

    // テキストファイルを追加
    const textFileContent = text;
    zip.file(`${generateFileName()}.txt`, textFileContent);

    // 画像ファイルを追加
    if (img) {
      const imageBlob = img.startsWith("data:image") ? dataURLtoBlob(img) : img;
      zip.file(`${generateFileName()}.jpeg`, imageBlob, { binary: true });
    }

    // ZIP ファイルを生成してダウンロード
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${generateFileName()}.zip`); // 生成した ZIP ファイルをダウンロード
    });
  }
};

// 画像ファイルを正しくダウンロードできるように変換する関数
export const dataURLtoBlob = (dataURL) => {
  const byteString = atob(dataURL.split(",")[1]);
  const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
};

// DLするファイルに現在時刻を記入したいので、現在時刻を作成する関数
export const generateFileName = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 月は0から始まるため+1
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
};

// クリックで順番にテキストをコピーする関数（逆順にコピー）
export const copyArray = async (copyTextArray) => {
  // インデックスを逆順にするために配列を逆にループ
  for (let i = copyTextArray.length - 1; i >= 0; i--) {
    const text = copyTextArray[i];
    try {
      // クリップボードにコピー
      await navigator.clipboard.writeText(text);
      console.log(`コピーされたテキスト: ${text}`);

      // 各コピーの間に 1秒の遅延を追加
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      alert("コピーに失敗しました:", err);
    }
  }
};

// 画像が選択されたときに状態を保存する関数
export const imgChange = (e, setImg, dispatch) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(setImg(reader.result));
    };
    reader.readAsDataURL(file);
  }
};
