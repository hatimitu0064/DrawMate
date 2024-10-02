class CreateItems {
  constructor(prompt, res = "") {
    this._prompt = prompt;
    this._res = res;
  }

  get prompt() {
    return this._prompt;
  }

  get res() {
    return this._res; //TODO resの中身をAPIのレスポンスにする
  }

  fetchGPTapi() {
    //TODO ここにchatGPTの具体的は記述
  }
}

export default CreateItems;
