import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Pitch Hire");
    }

    async getHtml() {
        return `
        <div class="pitch-hire">
        <div class="sub-page">
        <h1 class="drop-shadow-lg">PITCH HIRE</h1>
        <p class="drop-shadow-lg">

Opening Hours:<br><br>
Monday to Friday 10:00am to 11:00pm<br>
Saturday and Sunday: 8:00am to 10:30pm<br><br>
Long term club bookings for 2023 are open now.<br> <a href="mailto:CMckibbins@wswanderersfc.com.au" class="underline"> Email Wanderers Fives</a></p><br><br>

<iframe id="book" class="bg-white book" src="https://wanderers.duktag.net/duktag/schedule.cfm?&court=990,991,992,993,994,995,996,997,998" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>

</div>
</div>`;   
    }
}