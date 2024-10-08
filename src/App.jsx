import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import ImgForm from "./components/ImgForm/ImgForm";
import Save from "./components/Save/Save";
import Create from "./components/Create/Create";
import CreateLayout from "./components/CreateLayout/CreateLayout";

import {
  createCategoryAsync,
  createTagAsync,
  createTitleAsync,
} from "./utils/clickHandler";

import {
  createCategoryPrompt,
  createTagPrompt,
  createTitlePrompt,
} from "./utils/createPrompt";

import {
  setTitle,
  setTag,
  setCategory,
} from "./features/createText/CreateText";

function App() {
  const dispatch = useDispatch();

  //各種ステートを定義
  const { selectedImg } = useSelector((state) => state.img);

  const { inputTitle } = useSelector((state) => state.create.title);
  const { inputTag } = useSelector((state) => state.create.tag);
  const { inputCategory } = useSelector((state) => state.create.category);

  const { loadingTitle, loadingTag, loadingCategory } = useSelector(
    (state) => state.loading
  );

  const createTitleBtnClick = async () => {
    dispatch(createTitleAsync(createTitlePrompt, selectedImg));
  };

  const createTagBtnClick = async () => {
    dispatch(createTagAsync(createTagPrompt, selectedImg));
  };

  const createCategoryBtnClick = async () => {
    dispatch(createCategoryAsync(createCategoryPrompt, selectedImg));
  };

  return (
    <>
      <ImgForm />
      <CreateLayout>
        <Create
          onClick={createTitleBtnClick}
          inputState={inputTitle}
          setInputFn={(value) => dispatch(setTitle(value))}
          loading={loadingTitle}
          btnText={"タイトル"}
        />
        <Create
          onClick={createTagBtnClick}
          inputState={inputTag}
          setInputFn={(value) => dispatch(setTag(value))}
          loading={loadingTag}
          btnText={"タグ"}
        />
        <Create
          onClick={createCategoryBtnClick}
          inputState={inputCategory}
          setInputFn={(value) => dispatch(setCategory(value))}
          loading={loadingCategory}
          btnText={"カテゴリー"}
        />
      </CreateLayout>
      <Save />
    </>
  );
}

export default App;
