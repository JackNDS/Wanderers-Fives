import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Contact Us");
    }

    async getHtml() {
        return `<h1>Contact Us</h1>
        <p>You are viewing the Contact Us Page</p>`;   
    }
}