import { useDropzone } from "react-dropzone";
import "./ImgUploader.scss"; // スタイルを適用するためのCSSファイルをインポート

function ImageUploader(img, setImg) {
  // ファイルドロップ時の処理
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImg(reader.result); // 読み込んだ画像データをstateに保存
      };

      reader.readAsDataURL(file); // Base64形式に変換
    }
  };

  // useDropzoneでファイルドロップを処理、isDragActiveでドラッグ中のスタイル変更
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`fileInput-label ${isDragActive ? "active" : ""}`} // ドラッグ中にクラスを動的に変更
    >
      <input {...getInputProps()} />
      {img ? (
        <img
          src={img}
          alt="Uploaded"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      ) : (
        <p>画像をドラッグ＆ドロップ、またはクリックして選択してください</p>
      )}
    </div>
  );
}

export default ImageUploader;
