import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Terms & Conditions");
    }

    async getHtml() {
        return `
        <div class="sub-page general-terms">
        <h1 class="drop-shadow-lg">FIVES PARTICIPANT WAIVER</h1>
        <p class="drop-shadow-lg">

        All persons entering the premises of Wanderers 5s accept responsibility for any injury or illness arising out of or in connection with their participation in activities at the premises.
        <br><br>
        All persons entering the premises of Wanderers 5s release and discharge Western Sydney Wanderers , its employees and agents from any claim, suit, demand, expense, or cost in respect of any injury or illness arising out of or in connection with their participation in activities at the premises.
        <br><br>
        Participants registered and taking part in competitions scheduled and delivered by Wanderers 5s will have limited Personal Accident Cover (Policy ATCSI -146970) and it is advised all participants review and acknowledge the product disclosure statement.
        <br><br>
        All facility hirers/users not participating in Wanderers 5s competitions do so acknowledging no Personal Accident cover.
        <br><br>
        In hiring Wanderers 5s fields/facilities,  the hirer understands and accepted these conditions of entry/use for any persons attending their booking.
        <br><br>
        </p>
        <h1 class="drop-shadow-lg">GENERAL TERMS & CONDITIONS</h1>
        <p class="drop-shadow-lg">

        1. In registering for the Wanderers 5s, participants agree to privacy policy terms from the Australian Professional Leagues.
<br>
        2. Registered participants agree to receive marketing from the Western Sydney Wanderers FC and its partners.<br>
        3. Teams registering for competitions acknowledge the season is paid in advance and will not be refunded for withdrawing from the competition or failing to attend fixtures. Teams acknowledge that “byes” are an acceptable part of a competition and that having a “bye” in your draw is not grounds for a refund/credit. Teams with a bye are offered the opportunity to utilise an available field on the date of their scheduled bye for training or a social game of their own.<br>
        4. Bookings will not be refunded during inclement weather, including rain or extreme temperatures, as these conditions are considered part of the natural risks associated with outdoor sports. Bookings disrupted by lightning or other severe weather conditions that pose a safety hazard will be rescheduled to the next available time slot. If the facility is unable to reschedule due to availability, the booking may be credited toward a future reservation. It is the responsibility of the customer to monitor weather conditions and plan accordingly for their scheduled booking.<br>
        5. Cancellation of long term bookings takes effect 14 days from notification during a booked period.<br>
        6. Any outstanding balance must be settled before access is granted to the booked facility. Those with a booking shall report to the kiosk prior to heading to their field to confirm they have arrived for their booking, arrange payment if this has not been done in advance, and a Wanderers Fives staff member will unlock their booked field.<br>
        7. Any changes to a booking (e.g., time, dates or additional product purchases) must be made 48 hours prior to the scheduled booking. Any cancellations of bookings made within 48 hours of the scheduled booking may result in a $20 late cancellation fee. Changes made within 24 hours will be subject to a $25 late cancellation fee, as these have prevented another user from hiring our facility. Wanderers Fives staff will use discretion in relation to this as we understand circumstances change.<br>
        8. The Wanderers Fives is not responsible for lost, stolen, or damaged items, and items found at the facility must be reported to Lost and Found or a staff member immediately. Lost items will be held for a 3 week period, after which they may be discarded or donated, and the facility reserves the right to modify this policy or refuse to return items if ownership cannot be verified.<br>
        9. Hiring a Football -  By paying the $20 ball bond at The Wanderer Fives, you agree to return all equipment, including soccer balls, in good condition. Only customers with a confirmed booking are eligible to access the ball bond. If the equipment is lost, stolen, or damaged beyond normal wear and tear, the bond may be forfeited or partially withheld to cover the cost of repairs or replacement. The bond will be refunded in full if the equipment is returned undamaged and within the specified time frame.<br>
        10. To run soapy soccer we require the following:<br>
A. the weather must be dry and not windy or wet<br>
B. You must provide a male helper to  assist with set up and pack up<br>
C. Participants must be rinsed thoroughly with no soap on their skin after play and get changed into dry clothes and shower again at home otherwise kids with sensitive skin may develop a rash / welts even though we use sensitive skin friendly bubble bath liquid<br>
D. We can have 8 kids on at one time if they are under 12 years of age and 6 kids on at one time if they are over 12 years of age<br>


        </p>
</div>
`;   
    }
}