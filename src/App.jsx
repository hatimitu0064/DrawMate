import { useState } from "react";
import "./App.css";
import AllCreateText from "./components/AllCreateText/AllCreateText";
import CreateCategory from "./components/CreateCategory/CreateCategory";
import CreateTag from "./components/CreateTag/CreateTag";
import CreateTitle from "./components/CreateTitle/CreateTitle";
import ImgForm from "./components/ImgForm/ImgForm";
import Save from "./components/Save/Save";
import Layout from "./components/Layout/Layout";
import {
  createCategoryItems,
  createTagItems,
  createTitleItems,
  handleAllCreateBtn,
  handleCreateBtn,
} from "./utils/clickHandler";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [inputTitle, setInputTitle] = useState("ChatGPTでタイトルを生成");
  const [inputTags, setInputTags] = useState("chatGPTでタグを生成");
  const [inputCategory, setInputCategory] =
    useState("chatGPTでカテゴリーを生成");

  const createTitleBtnClick = () =>
    handleCreateBtn(setInputTitle, createTitleItems);
  const createTagsBtnClick = () =>
    handleCreateBtn(setInputTags, createTagItems);
  const createCategoryBtnClick = () =>
    handleCreateBtn(setInputCategory, createCategoryItems);
  const allCreateClick = () =>
    handleAllCreateBtn(
      createTitleBtnClick,
      createTagsBtnClick,
      createCategoryBtnClick
    );

  return (
    <>
      <Layout>
        <ImgForm selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        <CreateTitle
          onClick={createTitleBtnClick}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
        />
        <CreateTag
          onClick={createTagsBtnClick}
          inputTags={inputTags}
          setInputTags={setInputTags}
        />
        <CreateCategory
          onClick={createCategoryBtnClick}
          inputCategory={inputCategory}
          setInputCategory={setInputCategory}
        />
        <AllCreateText onClick={allCreateClick} />
        <Save />
      </Layout>
    </>
  );
}

export default App;
