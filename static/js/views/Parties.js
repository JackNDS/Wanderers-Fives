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
        
        <p>All of our birthday parties booked before July 1st will include a JD Sports Voucher to the value of $100 for the birthday child.<br><br>
        In the request form below, please let us know your preferred date and time in the message field.</p><br><br>

`;   
    }
}