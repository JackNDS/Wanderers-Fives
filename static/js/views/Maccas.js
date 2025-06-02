import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Maccas");
    }

    async getHtml() {
        return ` <div class="sub-page maccas">
  
        <h1 class="drop-shadow-lg">MCDONALDS PACKAGES</h1>
        <p>
       Prices will increase for any booking past September 1st, 2025, by $10.</p><br><br>
        <img src="/img/mcdonalds.png" alt="">
        <a href="/party-form" target="popup" onclick="window.open('party-form','popup','width=1000,height=1000,left=100,top=100'); return false;"><button class="btn -ml-1 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Back to Party Form</button></a>
        </div>
 `;   
    }
}