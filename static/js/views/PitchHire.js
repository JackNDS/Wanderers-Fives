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
    <div class="drop-shadow-lg">
Opening Hours:<br><br>
Monday to Friday 10:00am to 10:30pm<br>
Saturday and Sunday: 9:00am to 5:00pm<br><br>
Long term club bookings for 2026 are open now.<br><br>
Customers need to pay before their booking to gain access to their pitch. Clients will not be permitted on the pitch unless payment is made<br><br>
Access to pitch hire is limited to the booked time. Any extension beyond the scheduled booking period will be subject to additional fees.<br><br></p>
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

</div>
<a href="https://wanderers.intrac.com.au/dashboard?page=space" target="popup" onclick="window.open('https://wanderers.intrac.com.au/dashboard?page=space','popup','width=700,height=1000,left=250,top=100'); return false;"><button class="btn -ml-1 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Book a Pitch</button></a>
</div>`;   
    }
}