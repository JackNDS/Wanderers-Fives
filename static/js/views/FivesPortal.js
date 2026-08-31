import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Fives-Portal");
    }

    async getHtml() {
        return `
        <!-- Explore Section -->
    <div class="explore-container">
        <div class="explore-heading font-everlooser text-white">Fives Portal</div>
        <div class="text-white px-7 text-lg">Monday Men's Comp - Full <br>
Tuesday Mixed and Women's still spots available - $99 per player<br>
Thursday Men's - 10 Weeks - $99 per player<br>
Junior Comps - 6 Weeks; Tuesday and Thursdays $69 per player - Wanderers Junior Membership included!<br><br>
        Wanderers Junior Mini Summer Comps coming November - <a href="mailto:fives@wswanderersfc.com.au">Express your interest</a>
        </div>
        <div class="explore">
        <a href="https://wanderers.intrac.com.au/dashboard?page=team" target="popup" onclick="window.open('https://wanderers.intrac.com.au/dashboard?page=team&tab=create_team','popup','width=600,height=800,left=400,top=100'); return false;"><div class="card font-everlooser text-black">
            CREATE A TEAM
          </div></a>
          <a href="https://wanderers.intrac.com.au/dashboard?page=team" target="popup" onclick="window.open('https://wanderers.intrac.com.au/dashboard?page=team&tab=join_team','popup','width=600,height=800,left=400,top=100'); return false;"><div class="card font-everlooser text-WSWRed">
            JOIN A TEAM
          </div></a>
          <a href="https://wanderers.intrac.com.au/dashboard?page=team" target="popup" onclick="window.open('https://wanderers.intrac.com.au/dashboard','popup','width=600,height=800,left=400,top=100'); return false;"><div class="card font-everlooser text-black">
            TEAM CAPTAIN LOGIN
          </div></a>
          <a href="https://wanderers.intrac.com.au/dashboard?page=team" target="popup" onclick="window.open('https://wanderers.intrac.com.au/dashboard?cart=true','popup','width=600,height=800,left=400,top=100'); return false;"><div class="card font-everlooser text-WSWRed">
            CHECKOUT
          </div></a>
        </div>
        <div class="flyer-container">
     <!-- <div class="flyer">
        <img src="/img/worldcup.png" alt="">
      </div> -->
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