import Layout from "../Layout/Layout";

const CreateCategory = () => {
  return (
    <Layout>
      <div className="createTitle-container">
        <div className="GPT-response-container">
          <p>chatGPTからの回答（カテゴリー）</p>
        </div>
        <div className="createTitle-btn-container">
          <button className="createTitle-btn">タイトル生成</button>
        </div>
      </div>
    </Layout>
  )
};

export default CreateCategory;
