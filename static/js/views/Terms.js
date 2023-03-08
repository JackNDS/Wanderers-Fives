import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Terms & Conditions");
    }

    async getHtml() {
        return `
        <div class="sub-page">
        <h1 class="drop-shadow-lg">TERMS & CONDITIONS</h1>
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
</div>
`;   
    }
}