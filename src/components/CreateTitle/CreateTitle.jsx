import Layout from "../Layout/Layout"

const CreateTitle = () => {
  return (
    <Layout>
      <div className="createTitle-container">
        <div className="GPT-response-container">
          <p>chatGPTからの回答（タイトル）</p>
        </div>
        <div className="createTitle-btn-container">
          <button className="createTitle-btn">タイトル生成</button>
        </div>
      </div>
    </Layout>
  )
}

export default CreateTitle;
