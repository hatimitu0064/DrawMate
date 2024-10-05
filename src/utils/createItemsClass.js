import axios from "axios";

class CreateItems {
  constructor(prompt, img) {
    this._prompt = prompt;
    this._img = img;
    this._res = "";
  }

  async fetchRes() {
    const res = await this._useChatGPTapi();
    this._res = res;
  }

  get prompt() {
    return this._prompt;
  }

  get res() {
    return this._res;
  }

  async _useChatGPTapi() {
    const res = await axios.request({
      method: "post",
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MY_OPENAI_API_KEY}`,
      },
      data: {
        model: "gpt-4o",
        temperature: 0.2,
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content: [
              {
                type: "text",
                text: `${this._prompt}`,
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: {
                  url: `${this._img}`,
                  detail: "low",
                },
              },
            ],
          },
        ],
      },
    });
    return res.data.choices[0].message.content;
  }
}

export default CreateItems;
