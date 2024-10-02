import JSZip from "jszip";
import { saveAs } from "file-saver"; // file-saverは、生成したZIPをダウンロードするために使用


export const createTitleItems = {
  prompt:
    "この画像から連想されるタイトルを5つ以内で箇条書きで答えろ、なお箇条書きにされたタイトル以外の文章は書きこむな",
  res: "・お金の大学\n・リベラルアーツ大学\n・money University",
};

export const createTagItems = {
  prompt:
    "この画像から連想されるタグを5つ以内で箇条書きで答えろ、なお箇条書きにされたタグ以外の文章は書きこむな",
  res: "・お金\n・自由\n・教養",
};

export const createCategoryItems = {
  prompt:
    "この画像から連想されるカテゴリーを[花・植物、ビジネス、チラシ、名刺、医療・福祉、人物、動物・生き物、乗り物、フレーム、生活、食べ物、文具、春、夏、秋、冬、背景・壁紙、バナー、スポーツ、ポストカード、学校プリント用、アイコン、セット、文字、筆文字、萌え系、年賀状、ファッション、クリスマス、その他]この[]の中の単語に該当する物を5つ以内で箇条書きで答えろ、なお箇条書きにされたカテゴリー以外の文章は書きこむな",
  res: "・ビジネス\n・人物",
};

//TODO resの中身をAPIのレスポンスにする

// APIに送信するプロンプトを投げてそのresponseを保存する関数
// TODO この関数の中身は実際にAPIに送信する関数を記述しそれを実行
export const handleCreateBtn = (setInput, createItems, img) => {
  if (!img) {
    alert("エラー： 画像を選択してください。");
  } else {
    console.log(createItems.prompt);
    setInput(createItems.res);
  }
};

// 全てのクリックイベントを一度に発火させる関数
export const handleAllCreateBtn = (
  handleCreateTitleBtn,
  handleCreateTagsBtn,
  handleCreateCategoryBtn,
  img
) => {
  if (!img) {
    alert("エラー： 画像を選択してください。");
  } else {
    handleCreateTitleBtn();
    handleCreateTagsBtn();
    handleCreateCategoryBtn();
  }
};

// 生成物をZIPファイルとしてDLできるようにする関数
export const handleDownload = async (text, image, generateFileName) => {
  if (
    !image ||
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
    if (image) {
      const imageBlob = image.startsWith("data:image")
        ? dataURLtoBlob(image)
        : image;
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
