import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Contact Us");
    }

    async getHtml() {
        return `  <div class="sub-page">
        <h1>CONTACT US</h1>
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
               <a href="mailto:wanderersfives@wswanderersfc.com.au">
               <i class="fas fa-envelope"></i> wanderersfives@wswanderersfc.com.au</a>
              </div>
              <div class="contact-phone">
                
               <a href="tel:86026411"><i class="fas fa-phone"></i> 86026411</a>
              </div>
            </div>
        </div>`;   
    }
}