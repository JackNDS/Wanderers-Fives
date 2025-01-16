import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Pitch Hire");
    }

    async getHtml() {
        return `
        <div class="pitch-hire">
        <div class="sub-page pitchhire">
        <h1 class="drop-shadow-lg">PITCH HIRE</h1>
<div class="hire-container">
<div class="hire1">
    <p class="drop-shadow-lg">
Opening Hours:<br><br>
Monday to Friday 10:00am to 10:30pm<br>
Saturday and Sunday: 9:00am to 5:00pm<br><br>
Long term club bookings for 2024 are open now.<br><br></p>
</div>

<div class="hire2">
    <p class="drop-shadow-lg">
Rates:<br><br>
Monday to Thursday (Peak): 6pm - close<br>
$110/hour<br><br>
All other opening hours (Off Peak):<br>
$90/hour<br><br>
Schools:<br>
$80/hour<br><br>
</p>
</div>
</div>
<p class="drop-shadow-lg">
<a href="mailto:fives@wswanderersfc.com.au" class="underline"> Email Wanderers Fives</a></p><br><br>

<iframe id="book" class="bg-white book" src="https://wanderers.duktag.net/duktag/schedule.cfm?&court=1540,1541,1542,1543,1544,1545,1546,1547,1548" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>

</div>
</div>`;   
    }
}