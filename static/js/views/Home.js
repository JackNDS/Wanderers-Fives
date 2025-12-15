import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        
        <!-- Grid Section for Showcase -->
        <div id="home" class="grid grid-rows-2 grid-cols-6">
          <!-- Main Showcase 1 of 3-->
        
          <div class="showcase border-solid border-gray-200 border-t-2 border-l-0 col-span-6 md:col-span-4 row-span-2" id="showcase">
    
          <div class="main-img" ></div>
    
          <div class="overlay"></div>
    
          <div class="showcase-text mt-10 xs:mt-0">
              <h1 class="heading text-4xl sm:text-5xl lg:text-6xl  drop-shadow-lg">WANDERERS FIVES</h1>
              <div class="sub-heading mt-2 mb-4 text-xl sm:text-4xl tracking-tight drop-shadow-lg">Adults Summer Comp kicks off on Monday 2nd February! <br><br> Special Junior School Holiday Competition kicks off on Thursday 8th January running for four weeks at special price of $250 per team!</div>
              <a href="/five-a-side"><button class="btn -ml-1 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Register Now</button></a>
          </div>
    
          <ul class="social">
              <li><a target="popup" name="facebook" href="https://www.facebook.com/wswanderersfc"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a target="popup" name="instagram" href="https://www.instagram.com/wswanderersfc/"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a target="popup" name="twitter" href="https://twitter.com/wswanderersfc/"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a target="popup" name="youtube" href="https://www.youtube.com/c/WSWanderersTV"><i class="fa-brands fa-youtube"></i></a></li>
          </ul>
          </div>
    
          <div class="flex default clickable-container items-end parties col-span-6 md:col-span-2 p-10 border-solid border-gray-200 md:border-t-2 border-l-0 text-white" id="parties">
            <a href="/parties">
            <h1 class="text-4xl drop-shadow-lg">PARTIES</h1>
            <p class="text-2xl tracking-tight drop-shadow-lg">The Ultimate Birthday Experience</p>
            </a>
          </div>
    
          <div target="popup" href="https://wanderers.duktag.net/duktag/fixture.cfm?" onclick="window.open('https://wanderers.duktag.net/duktag/fixture.cfm?','popup','width=500,height=800,left=400,top=100'); return false;" class="flex clickable-container default items-end hire col-span-6 md:col-span-2 p-10 border-solid border-gray-200 border-t-2 border-b-2 border-l-0 text-white" id="parties">
          <a target="popup" href="https://wanderers.duktag.net/duktag/fixture.cfm?" onclick="window.open('https://wanderers.duktag.net/duktag/fixture.cfm?','popup','width=500,height=800,left=400,top=100'); return false;">
            <h1 class="text-4xl drop-shadow-lg">FIXTURES & RESULTS</h1>
            <p class="text-2xl tracking-tight drop-shadow-lg">View Your Teams Game Times/Scores</p>
            </a>
          </div>
    
        </div>
        <!-- Explore Section -->
        <div class="explore-container">
      <div class="explore-heading font-everlooser text-white">EXPLORE</div>
      <div class="explore">
        <a href="/about" data-link><div class="card font-everlooser text-black">
          ABOUT US
        </div></a>
        <a href="/five-a-side"><div class="card font-everlooser text-WSWRed">
          WHY PLAY FIVES?
        </div></a>
        <a href="/houserules" target="popup" onclick="window.open('houserules','popup','width=600,height=800,left=100,top=100'); return false;"><div class="card font-everlooser text-black">
          HOUSE RULES
        </div></a>
      </div>
    </div>

    <div class="map-container p-16">
      <div class="map">
        <img src="/img/map.png" alt="">
      </div>
    </div>
        `;   
    }
}