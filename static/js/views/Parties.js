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


        <h1>Request Form</h1>
        <div class="party-container">
        <form method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="contact">
                 <p class="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Mobile:</label>
              <input type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-group">
              <label for="products">Products:</label>
              <div class="product-lists">
              <div class="product-list1">
                <div class="product">
                  <input type="checkbox" id="product-a" name="2 Hours Pitch Hire" value="$180">
                  <label for="product-a">2 Hours Pitch Hire - $180</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-b" name="Coaching 1 Hour" value="$120">
                  <label for="product-b">Coaching 1 Hour - $120</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-c" name="3 Hours Pitch Hire" value="$220">
                  <label for="product-c">3 Hours Pitch Hire - $220</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-d" name="Coaching 2 Hours" value="$160">
                  <label for="product-d">Coaching 2 Hours - $160</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-e" name="Meeting/Function Room" value="$60">
                  <label for="product-e">Meeting/Function Room - $60</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-f" name="McDonalds 15 person package" value="$150">
                  <label for="product-f">McDonalds 15 person package - $150</label>
                </div>
            </div>
            <div class="product-list2">
                <div class="product">
                  <input type="checkbox" id="product-g" name="McDonalds 20 person package" value="$200">
                  <label for="product-g">McDonalds 20 person package - $200</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-h" name="McDonalds 25 person package" value="$250">
                  <label for="product-h">McDonalds 25 person package - $250</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-i" name="Deploy Size 5 Match Ball" value="$45">
                  <label for="product-i">Deploy Size 5 Match Ball - $45</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-j" name="Deploy Size 4 Match Ball" value="$40">
                  <label for="product-j">Deploy Size 4 Match Ball - $40</label>
                </div>
                <div class="product">
                  <input type="checkbox" id="product-k" name="McDonalds Ice Cream Cake" value="$40">
                  <label for="product-k">McDonalds Ice Cream Cake - $40</label>
                </div>
            </div>
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <div class="submit">
              <input type="submit" value="Submit">
            </div>
          </form>  
        </div>
        </div>
`;   
    }
}