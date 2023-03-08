import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Pitch Hire");
    }

    async getHtml() {
        return `<h1>Pitch Hire</h1>
        <p>You are viewing the Pitch Hire Page</p>`;   
    }
}