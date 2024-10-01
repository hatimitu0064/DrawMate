import { useState } from "react";

import "./App.css";

import AllCreateText from "./components/AllCreateText/AllCreateText";
import ImgForm from "./components/ImgForm/ImgForm";
import Save from "./components/Save/Save";
import Layout from "./components/Layout/Layout";
import Create from "./components/Create/Create";

import {
  createCategoryItems,
  createTagItems,
  createTitleItems,
  generateFileName,
  handleAllCreateBtn,
  handleCreateBtn,
  handleDownload,
} from "./utils/clickHandler";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [inputTitle, setInputTitle] = useState("chatGPTでタイトルを生成");
  const [inputTag, setInputTags] = useState("chatGPTでタグを生成");
  const [inputCategory, setInputCategory] =
    useState("chatGPTでカテゴリーを生成");

  const createTitleBtnClick = () =>
    handleCreateBtn(setInputTitle, createTitleItems, selectedImg);
  const createTagBtnClick = () =>
    handleCreateBtn(setInputTags, createTagItems, selectedImg);
  const createCategoryBtnClick = () =>
    handleCreateBtn(setInputCategory, createCategoryItems, selectedImg);
  const allCreateClick = () =>
    handleAllCreateBtn(
      createTitleBtnClick,
      createTagBtnClick,
      createCategoryBtnClick,
      selectedImg
    );
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
          btnText={"タイトル"}
        />
        <Create
          onClick={createTagBtnClick}
          inputState={inputTag}
          setInputFn={setInputTags}
          btnText={"タグ"}
        />
        <Create
          onClick={createCategoryBtnClick}
          inputState={inputCategory}
          setInputFn={setInputCategory}
          btnText={"カテゴリー"}
        />
        <AllCreateText onClick={allCreateClick} />
        <Save onClick={saveBtnClick} />
      </Layout>
    </>
  );
}

export default App;
