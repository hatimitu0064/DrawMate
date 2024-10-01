export const createTitleItems = {
  prompt:
    "この画像から連想されるタイトルを5つ以内で箇条書きで答えろ、なお箇条書きにされたタイトル以外の文章は書きこむな",
  res: "・お金の大学\n・リベラルアーツ大学\n・money University",
};

export const createTagItems = {
  prompt:
    "この画像から連想されるタグを5つ以内で箇条書きで答えろ、なお箇条書きにされたタグ以外の文章は書きこむな",
  res: "・お金\n・自由\n・教養",
};

export const createCategoryItems = {
  prompt:
    "この画像から連想されるカテゴリーを[花・植物、ビジネス、チラシ、名刺、医療・福祉、人物、動物・生き物、乗り物、フレーム、生活、食べ物、文具、春、夏、秋、冬、背景・壁紙、バナー、スポーツ、ポストカード、学校プリント用、アイコン、セット、文字、筆文字、萌え系、年賀状、ファッション、クリスマス、その他]この[]の中の単語に該当する物を5つ以内で箇条書きで答えろ、なお箇条書きにされたカテゴリー以外の文章は書きこむな",
  res: "・ビジネス\n・人物",
};

//TODO resの中身をAPIのレスポンスにする

export const handleCreateBtn = (setInput, createItems, img) => {
  if (!img) {
    alert("エラー： 画像を選択してください。");
  } else {
    console.log(createItems.prompt);
    setInput(createItems.res);
  }
};

export const handleAllCreateBtn = (
  handleCreateTitleBtn,
  handleCreateTagsBtn,
  handleCreateCategoryBtn,
  img
) => {
  if (!img) {
    alert("エラー： 画像を選択してください。");
  } else {
    handleCreateTitleBtn();
    handleCreateTagsBtn();
    handleCreateCategoryBtn();
  }
};
