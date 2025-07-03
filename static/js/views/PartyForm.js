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

  <!-- … your Name/Email/Date/Time fields here … -->

  <div class="form-group">
    <label>Products:</label>
    <div class="product-lists">
      <!-- Column 1 -->
      <div class="product-list1">
        <div class="product">
          <input
            type="checkbox"
            id="product-a"
            name="2 Hours Pitch Hire - $180"
            value="Yes"
          />
          <label for="product-a">2 Hours Pitch Hire – $180</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-b"
            name="Coaching 1 Hour - $120"
            value="Yes"
          />
          <label for="product-b">Coaching 1 Hour – $120</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-c"
            name="3 Hours Pitch Hire - $220"
            value="Yes"
          />
          <label for="product-c">3 Hours Pitch Hire – $220</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-d"
            name="Coaching 2 Hours - $160"
            value="Yes"
          />
          <label for="product-d">Coaching 2 Hours – $160</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-e"
            name="Meeting/Function Room - $60"
            value="Yes"
          />
          <label for="product-e">Meeting/Function Room – $60</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-f"
            name="McDonalds 12 person package - $150"
            value="Yes"
          />
          <label for="product-f">McDonalds 12 person package – $150</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-g"
            name="McDonalds 16 person package - $200"
            value="Yes"
          />
          <label for="product-g">McDonalds 16 person package – $200</label>
        </div>
      </div>

      <!-- Column 2 -->
      <div class="product-list2">
        <div class="product">
          <input
            type="checkbox"
            id="product-h"
            name="McDonalds 20 person package - $250"
            value="Yes"
          />
          <label for="product-h">McDonalds 20 person package – $250</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-k"
            name="McDonalds Ice Cream Cake - $40"
            value="Yes"
          />
          <label for="product-k">McDonalds Ice Cream Cake – $40</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-q"
            name="Bubble Soccer: 1 Hour - $400"
            value="Yes"
          />
          <label for="product-q">Bubble Soccer: 1 Hour – $400</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-r"
            name="Bubble Soccer: 1.5 Hours - $500"
            value="Yes"
          />
          <label for="product-r">Bubble Soccer: 1.5 Hours – $500</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-s"
            name="Bubble Soccer: 2 Hours - $600"
            value="Yes"
          />
          <label for="product-s">Bubble Soccer: 2 Hours – $600</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-t"
            name="Human Foosball - 1 Hour - $400"
            value="Yes"
          />
          <label for="product-t">Human Foosball – 1 Hour – $400</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-u"
            name="Human Foosball - 1.5 Hours - $500"
            value="Yes"
          />
          <label for="product-u">Human Foosball – 1.5 Hours – $500</label>
        </div>
      </div>

      <!-- Column 3 -->
      <div class="product-list3">
        <div class="product">
          <input
            type="checkbox"
            id="product-v"
            name="Human Foosball - 2 Hours - $600"
            value="Yes"
          />
          <label for="product-v">Human Foosball – 2 Hours – $600</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-w"
            name="Slip N Slide Soapy Soccer - 1 Hour - $400"
            value="Yes"
          />
          <label for="product-w"
            >Slip N Slide Soapy Soccer – 1 Hour – $400</label
          >
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-x"
            name="Slip N Slide Soapy Soccer - 1.5 Hours - $500"
            value="Yes"
          />
          <label for="product-x"
            >Slip N Slide Soapy Soccer – 1.5 Hours – $500</label
          >
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-y"
            name="Slip N Slide Soapy Soccer - 2 Hours - $600"
            value="Yes"
          />
          <label for="product-y"
            >Slip N Slide Soapy Soccer – 2 Hours – $600</label
          >
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-l"
            name="Inflatable DartBall - $400"
            value="Yes"
          />
          <label for="product-l">Inflatable DartBall – $400</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-m"
            name="Inflatable Cage Soccer - $500"
            value="Yes"
          />
          <label for="product-m">Inflatable Cage Soccer – $500</label>
        </div>
        <div class="product">
          <input
            type="checkbox"
            id="product-n"
            name="Inflatable Diving Goalkeeper - $350"
            value="Yes"
          />
          <label for="product-n"
            >Inflatable Diving Goalkeeper – $350</label
          >
        </div>
      </div>
    </div>
  </div>

  <!-- … your message + submit button here … -->
</form>


            </div>
        </div>`;   
    }
}