import Layout from "../Layout/Layout";

const CreateTag = () => {
  return (
    <Layout>
      <div className="createTitle-container">
        <div className="GPT-response-container">
          <p>chatGPTからの回答（タグ）</p>
        </div>
        <div className="createTitle-btn-container">
          <button className="createTitle-btn">タグ生成</button>
        </div>
      </div>
    </Layout>
  )
};

export default CreateTag;
