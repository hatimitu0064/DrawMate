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
  handleAllCreateBtn,
  handleCreateCategoryBtn,
  handleCreateTagsBtn,
  handleCreateTitleBtn,
} from "./utils/clickHandler";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [inputTitle, setInputTitle] = useState("ChatGPTでタイトルを生成");
  const [inputTags, setInputTags] = useState("chatGPTでタグを生成");
  const [inputCategory, setInputCategory] =
    useState("chatGPTでカテゴリーを生成");

  const handleCreateTitleBtnClick = () => handleCreateTitleBtn(setInputTitle);
  const handleCreateTagsBtnClick = () => handleCreateTagsBtn(setInputTags);
  const handleCreateCategoryBtnClick = () =>
    handleCreateCategoryBtn(setInputCategory);
  const handleAllCreateClick = () =>
    handleAllCreateBtn(
      handleCreateTitleBtnClick,
      handleCreateTagsBtnClick,
      handleCreateCategoryBtnClick
    );

  return (
    <>
      <Layout>
        <ImgForm selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        <CreateTitle
          onClick={handleCreateTitleBtnClick}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
        />
        <CreateTag
          onClick={handleCreateTagsBtnClick}
          inputTags={inputTags}
          setInputTags={setInputTags}
        />
        <CreateCategory
          onClick={handleCreateCategoryBtnClick}
          inputCategory={inputCategory}
          setInputCategory={setInputCategory}
        />
        <AllCreateText onClick={handleAllCreateClick} />
        <Save />
      </Layout>
    </>
  );
}

export default App;
