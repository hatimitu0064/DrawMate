import JSZip from "jszip";
import { saveAs } from "file-saver"; // file-saverは、生成したZIPをダウンロードするために使用
import CreateItems from "./createItemsClass";


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
      const imageBlob = img.startsWith("data:image")
        ? dataURLtoBlob(img)
        : img;
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
