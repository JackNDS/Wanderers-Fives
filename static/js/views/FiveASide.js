import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Five-A-Side");
    }

    async getHtml() {
        return `<h1>Five-A-Side</h1>
        <p>You are viewing the Five-A-Side Page</p>`;   
    }
}