import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Maccas");
    }

    async getHtml() {
        return ` <div class="sub-page maccas">
  
        <h1 class="drop-shadow-lg">MCDONALDS PACKAGES</h1>
        <img src="/img/mcdonalds.png" alt="">
        </div>
 `;   
    }
}