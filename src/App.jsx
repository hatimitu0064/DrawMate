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
  handleAllCreateBtn,
  handleCreateBtn,
} from "./utils/clickHandler";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [inputTitle, setInputTitle] = useState("chatGPTでタイトルを生成");
  const [inputTags, setInputTags] = useState("chatGPTでタグを生成");
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
          inputState={inputTags}
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
        <Save />
      </Layout>
    </>
  );
}

export default App;
