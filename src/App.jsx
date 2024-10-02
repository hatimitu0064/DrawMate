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
import {
  createCategoryPrompt,
  createTagPrompt,
  createTitlePrompt,
} from "./utils/createPrompt";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [inputTitle, setInputTitle] = useState("chatGPTでタイトルを生成");
  const [inputTag, setInputTags] = useState("chatGPTでタグを生成");
  const [inputCategory, setInputCategory] =
    useState("chatGPTでカテゴリーを生成");

	//ローディング用のState
  const [loadingTitle, setLoadingTitle] = useState(false);
  const [loadingTag, setLoadingTag] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState(false);


  const createTitleBtnClick = async () => {
    setLoadingTitle(true);
    await handleCreateBtn(setInputTitle, createTitlePrompt, selectedImg);
    setLoadingTitle(false);
  };

  const createTagBtnClick = async () => {
    setLoadingTag(true);
    await handleCreateBtn(setInputTags, createTagPrompt, selectedImg);
    setLoadingTag(false);
  };

  const createCategoryBtnClick = async () => {
    setLoadingCategory(true);
    await handleCreateBtn(setInputCategory, createCategoryPrompt, selectedImg);
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
