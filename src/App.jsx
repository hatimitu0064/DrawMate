import { useState } from "react";
import "./App.css";
import AllCreateText from "./components/AllCreateText/AllCreateText";
import CreateCategory from "./components/CreateCategory/CreateCategory";
import CreateTag from "./components/CreateTag/CreateTag";
import CreateTitle from "./components/CreateTitle/CreateTitle";
import ImgForm from "./components/ImgForm/ImgForm";
import Save from "./components/Save/Save";
import Layout from "./components/Layout/Layout";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Layout>
        <ImgForm selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        <CreateTitle />
        <CreateTag />
        <CreateCategory />
        <AllCreateText />
        <Save />
      </Layout>
    </>
  );
}

export default App;
