import axios from "axios";

class CreateItems {
  constructor(prompt, img) {
    this._prompt = prompt;
    this._img = img;
    this._res = null;
  }

  async fetchRes() {
    const res = await this._fetchGPTapi();
    this._res = res;
  }

  get prompt() {
    return this._prompt;
  }

  get res() {
    return this._res;
  }

  async _fetchGPTapi() {
		const prompt = this._prompt

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
                text: prompt,
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
