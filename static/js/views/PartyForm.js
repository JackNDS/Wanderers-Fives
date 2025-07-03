import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Party Form");
    }

    async getHtml() {
        return `  <div class="sub-page">
        <h1>Request Form</h1>
        <p class="p-smalltext">
        If you're hiring our BBQ as part of your birthday event, please take note of the following responsibilities to ensure everything runs smoothly:<br><br>
General Use<br><br>

Use the BBQ safely and respectfully. Only designated users (18+) should operate the BBQ. All food and waste must be cleared from the area after use. You are required to bring your own cooking utensils and food.<br><br>

Gas Bottle Use<br><br>

A gas bottle is provided with the BBQ. Please ensure the gas is turned off properly after use. Let staff know immediately if there are any issues with the bottle or BBQ.<br><br>

Cleaning & Deposit<br><br>

A $20 cleaning deposit is required for all BBQ hires. After your event, you are responsible for cleaning the BBQ thoroughly. Once staff inspect and approve the BBQ as clean, your $20 deposit will be refunded. If the BBQ is not cleaned properly, the $20 will be retained as a cleaning fee.</p><br>
            <div class="party-container">
            
              <div class="maccas-link"><a href="/maccas" target="popup" onclick="window.open('maccas','popup','width=1000,height=1000,left=100,top=100'); return false;"><button class="btn -ml-1 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">View Mcdonalds Packages</button></a></div>
              <div class="maccas-link"><a href="/inflatables" target="popup" onclick="window.open('inflatables','popup','width=1000,height=1000,left=100,top=100'); return false;"><button class="btn -ml-1 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">View Inflatables</button></a></div>
            <form
  id="party-form"
  name="Party"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  onsubmit="submitForm(event)"
>
  <input type="hidden" name="form-name" value="Party" />
  <p class="hidden">
    <label>
      Don’t fill this out if you’re human:
      <input name="bot-field" />
    </label>
  </p>

  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name"   name="name"           required />
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"          required />
  </div>
  <div class="form-group">
    <label for="phone">Mobile:</label>
    <input type="tel"   id="phone" name="mobile"         required />
  </div>
  <div class="form-group">
    <label for="date">Preferred Date:</label>
    <input
      type="date"
      id="date"
      name="preferred_date"
      min="2025-01-01"
      max="2025-12-31"
      required
    />
  </div>
  <div class="form-group">
    <label for="time">Preferred Time:</label>
    <input
      type="time"
      id="time"
      name="preferred_time"
      min="08:00"
      max="18:00"
      required
    />
  </div>

  <div class="form-group">
    <label>Products:</label>
    <div class="product-lists">
      <div class="product">
        <input
          type="checkbox"
          id="product-a"
          name="products"
          value="2 Hours Pitch Hire - $180"
        />
        <label for="product-a">2 Hours Pitch Hire ­– $180</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-b"
          name="products"
          value="Coaching 1 Hour - $120"
        />
        <label for="product-b">Coaching 1 Hour ­– $120</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-c"
          name="products"
          value="3 Hours Pitch Hire - $220"
        />
        <label for="product-c">3 Hours Pitch Hire ­– $220</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-d"
          name="products"
          value="Coaching 2 Hours - $160"
        />
        <label for="product-d">Coaching 2 Hours ­– $160</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-e"
          name="products"
          value="Meeting/Function Room - $60"
        />
        <label for="product-e">Meeting/Function Room ­– $60</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-f"
          name="products"
          value="McDonalds 12 person package - $150"
        />
        <label for="product-f">McDonalds 12 person package ­– $150</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-g"
          name="products"
          value="McDonalds 16 person package - $200"
        />
        <label for="product-g">McDonalds 16 person package ­– $200</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-h"
          name="products"
          value="McDonalds 20 person package - $250"
        />
        <label for="product-h">McDonalds 20 person package ­– $250</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-k"
          name="products"
          value="McDonalds Ice Cream Cake - $40"
        />
        <label for="product-k">McDonalds Ice Cream Cake ­– $40</label>
      </div>

      <div class="product">
        <input
          type="checkbox"
          id="product-q"
          name="products"
          value="Bubble Soccer: 1 Hour - $400"
        />
        <label for="product-q">Bubble Soccer: 1 Hour ­– $400</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-r"
          name="products"
          value="Bubble Soccer: 1.5 Hours - $500"
        />
        <label for="product-r">Bubble Soccer: 1.5 Hours ­– $500</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-s"
          name="products"
          value="Bubble Soccer: 2 Hours - $600"
        />
        <label for="product-s">Bubble Soccer: 2 Hours ­– $600</label>
      </div>

      <div class="product">
        <input
          type="checkbox"
          id="product-t"
          name="products"
          value="Human Foosball - 1 Hour - $400"
        />
        <label for="product-t">Human Foosball ­– 1 Hour ­– $400</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-u"
          name="products"
          value="Human Foosball - 1.5 Hours - $500"
        />
        <label for="product-u">Human Foosball ­– 1.5 Hours ­– $500</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-v"
          name="products"
          value="Human Foosball - 2 Hours - $600"
        />
        <label for="product-v">Human Foosball ­– 2 Hours ­– $600</label>
      </div>

      <div class="product">
        <input
          type="checkbox"
          id="product-w"
          name="products"
          value="Slip N Slide Soapy Soccer - 1 Hour - $400"
        />
        <label for="product-w"
          >Slip N Slide Soapy Soccer ­– 1 Hour ­– $400</label
        >
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-x"
          name="products"
          value="Slip N Slide Soapy Soccer - 1.5 Hours - $500"
        />
        <label for="product-x"
          >Slip N Slide Soapy Soccer ­– 1.5 Hours ­– $500</label
        >
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-y"
          name="products"
          value="Slip N Slide Soapy Soccer - 2 Hours - $600"
        />
        <label for="product-y"
          >Slip N Slide Soapy Soccer ­– 2 Hours ­– $600</label
        >
      </div>

      <div class="product">
        <input
          type="checkbox"
          id="product-l"
          name="products"
          value="Inflatable DartBall - $400"
        />
        <label for="product-l">Inflatable DartBall ­– $400</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-m"
          name="products"
          value="Inflatable Cage Soccer - $500"
        />
        <label for="product-m">Inflatable Cage Soccer ­– $500</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-n"
          name="products"
          value="Inflatable Diving Goalkeeper - $350"
        />
        <label for="product-n"
          >Inflatable Diving Goalkeeper ­– $350</label
        >
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-o"
          name="products"
          value="Inflatable Jumping Castle - $500"
        />
        <label for="product-o">Inflatable Jumping Castle ­– $500</label>
      </div>
      <div class="product">
        <input
          type="checkbox"
          id="product-p"
          name="products"
          value="BBQ Hire - $20"
        />
        <label for="product-p">BBQ Hire ­– $20</label>
      </div>
    </div>
  </div>

  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
  </div>
  <div class="submit">
    <input type="submit" value="Submit" />
  </div>
</form>


            </div>
        </div>`;   
    }
}