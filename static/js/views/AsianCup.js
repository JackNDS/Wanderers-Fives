import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Asian-Cup");
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
        <img src="/img/asiancupfront.png" alt="">
      </div>
      <div class="flyer">
        <img src="/img/asiancupback.png" alt="">
      </div>

  
      </div>
      </div>
`;   
    }
}