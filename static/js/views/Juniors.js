import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("juniors");
    }

    async getHtml() {
        return `
        <!-- Explore Section -->
    <div class="explore-container">
        <div class="explore-heading font-everlooser text-white">Fives Portal</div>
        <div class="explore">
        <a href="https://wanderers.duktag.net/duktag/team.cfm?location=355&create=1" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/team.cfm?location=355&create=1','popup','width=600,height=800,left=400,top=100'); return false;"><div class="card font-everlooser text-black">
            CREATE A TEAM
          </div></a>
          <a href="https://wanderers.duktag.net/duktag/register.cfm?location=355&team=1" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/register.cfm?location=355&team=1','popup','width=600,height=800,left=400,top=100'); return false;"><div class="card font-everlooser text-WSWRed">
            JOIN A TEAM
          </div></a>
          <a href="https://wanderers.duktag.net/duktag/team.cfm?location=355" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/team.cfm?location=355','popup','width=600,height=800,left=400,top=100'); return false;"><div class="card font-everlooser text-black">
            TEAM CAPTAIN LOGIN
          </div></a>
          <a href="https://wanderers.duktag.net/duktag/checkout.cfm" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/checkout.cfm','popup','width=600,height=800,left=400,top=100'); return false;"><div class="card font-everlooser text-WSWRed">
            CHECKOUT
          </div></a>
        </div>
        <div class="flyer-container">
      <div class="flyer">
        <img src="/img/juniordetails.png" alt="">
      </div>
    

      <div class="sub-page">
      <h1>EXPRESSION OF INTEREST</h1>
          <div class="party-container">
          <form id="contact-form" name="Contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" onsubmit="submitForm(event)" >
              <input type="hidden" name="form-name" value="Contact">
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
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <div class="submit">
                <input type="submit" value="Submit">
              </div>
            </form>  
          </div>
          <div class="contact-info">
            <div class="contact-email">
             <a href="mailto:fives@wswanderersfc.com.au">
             <i class="fas fa-envelope"></i>fives@wswanderersfc.com.au</a>
            </div>
            <div class="contact-phone">
              
             <a href="tel:86026411"><i class="fas fa-phone"></i> 86026411</a>
            </div>
          </div>
      </div>
      </div>
      </div>
`;   
    }
}