export const handleCreateTitleBtn = (setInputTitle) => {
  const prompt =
    "この画像から連想されるタイトルを5つ以内で箇条書きで答えろ、なお箇条書きにされたタイトル以外の文章は書きこむな";
  console.log(prompt);
  const title = "・お金の大学\n・リベラルアーツ大学\n・money University";
  setInputTitle(title);
  //TODO titleをChatGPTからの回答にする
};

export const handleCreateTagsBtn = (setInputTags) => {
  const prompt =
    "この画像から連想されるタグを5つ以内で箇条書きで答えろ、なお箇条書きにされたタグ以外の文章は書きこむな";
  console.log(prompt);
  const tags = "・お金\n・自由\n・教養";
  setInputTags(tags);
	//TODO tagsをChatGPTからの回答にする
};

export const handleCreateCategoryBtn = (setInputCategory) => {
  const categorys =
    "花・植物、ビジネス、チラシ、名刺、医療・福祉、人物、動物・生き物、乗り物、フレーム、生活、食べ物、文具、春、夏、秋、冬、背景・壁紙、バナー、スポーツ、ポストカード、学校プリント用、アイコン、セット、文字、筆文字、萌え系、年賀状、ファッション、クリスマス、その他";
  const prompt = `この画像から連想されるカテゴリーを[${categorys}]この[]の中の単語に該当する物を5つ以内で箇条書きで答えろ、なお箇条書きにされたカテゴリー以外の文章は書きこむな`;
  console.log(prompt);
  const category = "・ビジネス\n・人物\n";
  setInputCategory(category);
	//TODO categoryをChatGPTからの回答にする
};

export const handleAllCreateBtn = (handleCreateTitleBtn, handleCreateTagsBtn, handleCreateCategoryBtn) => {
  handleCreateTitleBtn();
  handleCreateTagsBtn();
  handleCreateCategoryBtn();
};
