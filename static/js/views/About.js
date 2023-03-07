import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("About Us");
    }

    async getHtml() {
        return `<h1>About Us</h1>
        <p>You are viewing the About Us Page</p>`;   
    }
}