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

  const CreateTitleBtnClick = () => handleCreateTitleBtn(setInputTitle);
  const CreateTagsBtnClick = () => handleCreateTagsBtn(setInputTags);
  const CreateCategoryBtnClick = () =>
    handleCreateCategoryBtn(setInputCategory);
  const AllCreateClick = () =>
    handleAllCreateBtn(
      CreateTitleBtnClick,
      CreateTagsBtnClick,
      CreateCategoryBtnClick
    );

  return (
    <>
      <Layout>
        <ImgForm selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        <CreateTitle
          onClick={CreateTitleBtnClick}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
        />
        <CreateTag
          onClick={CreateTagsBtnClick}
          inputTags={inputTags}
          setInputTags={setInputTags}
        />
        <CreateCategory
          onClick={CreateCategoryBtnClick}
          inputCategory={inputCategory}
          setInputCategory={setInputCategory}
        />
        <AllCreateText onClick={AllCreateClick} />
        <Save />
      </Layout>
    </>
  );
}

export default App;
