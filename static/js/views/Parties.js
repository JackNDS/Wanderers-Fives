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
        
        <p>
        In the request form below, please include all details/specifics for your event in the message field.</p><br><br>

        <a href="/party-form" target="popup" onclick="window.open('party-form','popup','width=1000,height=1000,left=100,top=100'); return false;"><button class="btn -ml-1 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Book a Party</button></a>
        </div>
`;   
    }
}