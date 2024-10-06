import { useEffect, useState } from "react";

import "./App.css";

import ImgForm from "./components/ImgForm/ImgForm";
import Save from "./components/Save/Save";
import Create from "./components/Create/Create";
import CreateLayout from "./components/CreateLayout/CreateLayout";

import {
  copyArray,
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
  const [loadingCopy, setLoadingCopy] = useState(false);

  useEffect(() => {
    if (selectedImg) {
      setInputTitle("chatGPTでタイトルを生成");
      setInputTags("chatGPTでタグを生成");
      setInputCategory("chatGPTでカテゴリーを生成");
    }
  }, [selectedImg]);

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
    if (!selectedImg) {
      alert("エラー： 画像を選択してください。");
    } else {
      setLoadingTitle(true);
      setLoadingTag(true);
      setLoadingCategory(true);

      await createTitleBtnClick();
      await createTagBtnClick();
      await createCategoryBtnClick();

      setLoadingTitle(false);
      setLoadingTag(false);
      setLoadingCategory(false);
    }
  };

  const copyBtnClick = async () => {
    // 生成されたテキストを配列で所持する
    const copyTextArray = [inputTag, inputTitle]; // inputCategoryカテゴリーは不要？
    setLoadingCopy(true);
    await copyArray(copyTextArray);
    setLoadingCopy(false);
  };

  const saveBtnClick = () =>
    handleDownload(
      `タイトル\n${inputTitle}\n\nタグ\n${inputTag}\n\nカテゴリー\n${inputCategory}`,
      selectedImg,
      generateFileName
    );

  return (
    <>
      <ImgForm
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        allCreateClick={allCreateClick}
        copyBtnClick={copyBtnClick}
        loading={loadingCopy}
      />
      <CreateLayout>
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
      </CreateLayout>
      <Save onClick={saveBtnClick} />
    </>
  );
}

export default App;
