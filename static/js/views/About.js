import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("About Us");
    }

    async getHtml() {
        return `
        <div class="sub-page">
        <h1 class="drop-shadow-lg">ABOUT US</h1>
        <p class="drop-shadow-lg">

Wanderers 5s is the newest 5-A-side football facility in the country with 9 state of the art all weather pitches in a convenient location.
<br><br>
We are the West and we are for everyone. Offering a range of league divisions, tournaments and cup style events we will provide the competitive or social football you are looking for.
</p>
<a href="/five-a-side"><button class="btn mt-6 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Play Five-A-Side</button></a>
</div>
`;   
    }
}