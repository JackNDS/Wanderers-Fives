import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Five-A-Side");
    }

    async getHtml() {
        return `
        
    <!-- Grid Section for Showcase -->
    <div id="home" class="grid grid-rows-2 grid-cols-6">
        <!-- Main Showcase 1 of 3-->
      
        <div class="showcase border-solid border-gray-200 border-t-2 border-l-0 col-span-6 md:col-span-4 row-span-2" id="showcase">
  
        <div class="main-img fiveaside" ></div>
  
        <div class="overlay"></div>
  
        <div class="showcase-text mt-10 xs:mt-0">
            <h1 class="heading text-4xl sm:text-5xl lg:text-6xl  drop-shadow-lg">FIVE-A-SIDE FOOTBALL</h1>
            <div class="sub-heading mt-2 mb-4 text-xl sm:text-4xl tracking-tight drop-shadow-lg">Leagues now open</div>
            <a href="https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1','popup','width=600,height=800,left=100,top=100'); return false;"><button class="btn -ml-1 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Register Now</button></a>
        </div>
  
        <ul class="social">
            <li><a target="popup" name="facebook" href="https://www.facebook.com/wswanderersfc"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a target="popup" name="instagram" href="https://www.instagram.com/wswanderersfc/"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a target="popup" name="twitter" href="https://twitter.com/wswanderersfc/"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a target="popup" name="youtube" href="https://www.youtube.com/c/WSWanderersTV"><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
        </div>
  
        <div class="flex default items-end event1 col-span-6 md:col-span-2 p-10 border-solid border-gray-200 md:border-t-2 border-l-0 text-white" id="parties">
        <a href="https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1','popup','width=600,height=800,left=100,top=100'); return false;">
          <h1 class="text-4xl drop-shadow-lg">JD SHOOTOUT</h1>
          <p class="text-2xl tracking-tight drop-shadow-lg">Register Here</p>
          </a>
        </div>
  
        <div class="flex default items-end event2 col-span-6 md:col-span-2 p-10 border-solid border-gray-200 border-t-2 border-b-2 border-l-0 text-white" id="parties">
          <a href="https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1','popup','width=600,height=800,left=100,top=100'); return false;">
          <h1 class="text-4xl drop-shadow-lg">ASIAN CUP</h1>
          <p class="text-2xl tracking-tight drop-shadow-lg">Register Here</p>
          </a>
        </div>
  
      </div>
      <div class="flyer-container">
      <div class="flyer">
        <img src="/img/wintercomp.webp" alt="">
      </div>
      <a href="https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1','popup','width=600,height=800,left=100,top=100'); return false;"><button class="btn mt-6 shadow-lg rounded-full py-2 sm:py-4 px-10 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Regsiter Here</button></a>
    </div>
    
      <div class="sub-page five-a-side">
      <h1 class="drop-shadow-lg">WHY PLAY AT WANDERERS FIVES?</h1>
      <p class="drop-shadow-lg">

      Accessible divisions and evenly matched competitions
      <br><br>
      Use it as an extra training run to compliment your club football.
      <br><br>
      Register as a social group with no affiliation to any club or association
      <br><br>
      Personal Accident Cover for all registered participants in line with the sports governing body<br><br></p>

      <h1 class="drop-shadow-lg">HOW ITS PLAYED</h1>

      <p class="drop-shadow-lg">
      Field size 33m x 20m
      <br><br>
5 players on the pitch including a keeper.
<br><br>
No out of bounds and modified goals
<br><br>
Unlimited subs with up to 10 players per team
<br><br>
No slide tackles permitted.
<span class="hide-text">Personal Accident Cover for all registered participants in line with the sports governing body</span>
</p>

    
<a href="https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1','popup','width=600,height=800,left=100,top=100'); return false;"><button class="btn mt-6 shadow-lg rounded-full py-2 sm:py-4 px-10 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Regsiter Here</button></a>
</div>
</div>
`;   
    }
}