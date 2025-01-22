// src/components/Api.js
const Api = {
  getVideos: async () => {
    const response = await fetch('sua_api_url_aqui');
    const data = await response.json();
    return data;
  },
};

export default Api;
