const API_URL =
  "https://raw.githubusercontent.com/soymarcos96/my-linkedin-resume/main/resume.json";

class Portfolio {
  constructor() {
    this.getProfile();
  }

  async getProfile() {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log(data);
  }
}

new Portfolio();
