import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Parties");
    }

    async getHtml() {
        return `
        <div class="sub-page">
        <h1 class="drop-shadow-lg">BIRTHDAY PARTIES</h1>
        <p class="drop-shadow-lg"></p>
`;   
    }
}