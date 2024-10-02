import { useState } from "react";

import "./App.css";

import AllCreateText from "./components/AllCreateText/AllCreateText";
import ImgForm from "./components/ImgForm/ImgForm";
import Save from "./components/Save/Save";
import Layout from "./components/Layout/Layout";
import Create from "./components/Create/Create";

import {
  generateFileName,
  handleCreateBtn,
  handleDownload,
} from "./utils/clickHandler";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [inputTitle, setInputTitle] = useState("chatGPTでタイトルを生成");
  const [inputTag, setInputTags] = useState("chatGPTでタグを生成");
  const [inputCategory, setInputCategory] =
    useState("chatGPTでカテゴリーを生成");

  const [loadingTitle, setLoadingTitle] = useState(false);
  const [loadingTag, setLoadingTag] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState(false);

  const createTitleBtnClick = async () => {
    setLoadingTitle(true);
    await handleCreateBtn(
      setInputTitle,
      "この画像から連想されるタイトルを5つ以内で箇条書きで答えろ、なお箇条書きにされたタイトル以外の文章は書きこむな",
      selectedImg
    );
    setLoadingTitle(false);
  };

  const createTagBtnClick = async () => {
    setLoadingTag(true);
    await handleCreateBtn(
      setInputTags,
      "この画像から連想されるカテゴリーを[花・植物、ビジネス、チラシ、名刺、医療・福祉、人物、動物・生き物、乗り物、フレーム、生活、食べ物、文具、春、夏、秋、冬、背景・壁紙、バナー、スポーツ、ポストカード、学校プリント用、アイコン、セット、文字、筆文字、萌え系、年賀状、ファッション、クリスマス、その他]この[]の中の単語に該当する物を5つ以内で箇条書きで答えろ、なお箇条書きにされたカテゴリー以外の文章は書きこむな",
      selectedImg
    );
    setLoadingTag(false);
  };

  const createCategoryBtnClick = async () => {
    setLoadingCategory(true);
    await handleCreateBtn(
      setInputCategory,
      "この画像から連想されるカテゴリーを[花・植物、ビジネス、チラシ、名刺、医療・福祉、人物、動物・生き物、乗り物、フレーム、生活、食べ物、文具、春、夏、秋、冬、背景・壁紙、バナー、スポーツ、ポストカード、学校プリント用、アイコン、セット、文字、筆文字、萌え系、年賀状、ファッション、クリスマス、その他]この[]の中の単語に該当する物を5つ以内で箇条書きで答えろ、なお箇条書きにされたカテゴリー以外の文章は書きこむな",
      selectedImg
    );
    setLoadingCategory(false);
  };

  const allCreateClick = async () => {
    setLoadingTitle(true);
    setLoadingTag(true);
    setLoadingCategory(true);

    await createTitleBtnClick();
    await createTagBtnClick();
    await createCategoryBtnClick();

    setLoadingTitle(false);
    setLoadingTag(false);
    setLoadingCategory(false);
  };

  const saveBtnClick = () =>
    handleDownload(
      `タイトル\n${inputTitle}\n\nタグ\n${inputTag}\n\nカテゴリー\n${inputCategory}`,
      selectedImg,
      generateFileName
    );

  return (
    <>
      <Layout>
        <ImgForm selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        <Create
          onClick={createTitleBtnClick}
          inputState={inputTitle}
          setInputFn={setInputTitle}
          loading={loadingTitle}
          btnText={"タイトル"}
          img={selectedImg}
        />
        <Create
          onClick={createTagBtnClick}
          inputState={inputTag}
          setInputFn={setInputTags}
          loading={loadingTag}
          btnText={"タグ"}
        />
        <Create
          onClick={createCategoryBtnClick}
          inputState={inputCategory}
          setInputFn={setInputCategory}
          loading={loadingCategory}
          btnText={"カテゴリー"}
        />
        <AllCreateText onClick={allCreateClick} />
        <Save onClick={saveBtnClick} />
      </Layout>
    </>
  );
}

export default App;
