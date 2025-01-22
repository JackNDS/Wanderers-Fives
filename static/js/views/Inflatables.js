import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Inflatables");
    }

    async getHtml() {
        return ` <div class="sub-page inflatables">
  
        <h1 class="drop-shadow-lg">INFLATABLES PACKAGES</h1>
        <div class="flex flex-wrap justify-between">
            <div>
            Dartball - $400
             <img src="/img/dartsoccer.webp" alt="">
             </div>
            <div>
            Cage Soccer - $500
             <img src="/img/cagesoccer.webp" alt="">
             </div>
            <div>
            Diving Goalkeeper - $350
             <img src="/img/divingkeeper.webp" alt="">
             </div>
            <div>
            Jumping Castle - $500
             <img src="/img/jumpingcastle.webp" alt="">
             </div>
        </div>
        <a href="/party-form" target="popup" onclick="window.open('party-form','popup','width=1000,height=1000,left=100,top=100'); return false;"><button class="btn -ml-1 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Back to Party Form</button></a>
        </div>
 `;   
    }
}