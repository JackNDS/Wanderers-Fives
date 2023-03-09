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
        <a href="#jdcomp">
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
      <div class="sub-page">
      <h1 class="drop-shadow-lg">WHY PLAY AT WANDERERS FIVES?</h1>
      <p class="drop-shadow-lg">

      Accessible divisions and evenly matched competitions
      <br><br>
      Use it as an extra training run to compliment your club football.
      <br><br>
      Register as a social group with no affiliation to any club or association
      <br><br>
      Personal Accident Cover for all registered participants in line with the sports governing body<br><br></p>

      <h1 class="drop-shadow-lg">HOW ITS PLAYED</h1><br><br>

      <p class="drop-shadow-lg">
      Field size 33m x 20m
      <br><br>
5 players on the pitch including a keeper.
<br><br>
No out of bounds and modified goals
<br><br>
Unlimited subs with up to 10 players per team
<br><br>
No slide tackles permitted.<br><br>
</p>

      <h1 id="jdcomp" class="drop-shadow-lg">JD Shootout Competition Rules</h1><br><br>

      <p class="drop-shadow-lg">
      Field size 33m x 20m
      <br><br>
      1.	All teams pay $150 to enter the tournament. All players must be registered prior to the 31st of March. Registration can be completed online or manually added via competition admin staff at Wanderers 5’s<br><br>
      2.	No player registration will be accepted on the day of the tournament March 31st 2023.<br><br>
      3.	Teams will be drawn into Pools on Wednesday 29th March by an A League Mens Player under the supervision of Wanderers CEO Scott Hudson.<br><br>
      4.	Fixtures will be completed and sent to teams Wednesday 29th March 2023<br><br>
      5.	Teams will play in 3 pools of 4 teams <br><br>
      6.	Teams will play 3 pool games 2 x 10 minute halves, 4 minute half time. No stoppage or injury time. All pool games will be played back-to-back in a 90 minute period<br><br>
      7.	Games will be governed by Wanderers 5s Competition Rules and House Rules found <a href="/five-a-side" target="popup" class="underline">here</a> with the following exceptions.<br>
      -	No substitutions in the final 2 minutes of any half<br>
      -	Teams cannot substitute a goalkeeper during play (half time only). Referee can adjudicate in the event of Injury.<br>
      -	The ball is not required to stay below the height of the rebound boards during the JD Shootout, the ball can be played and rebound off all surfaces. Any ball that exits the playing area will be restarted by the keeper of the team who did not cause the ball to leave the pitch.<br>
      -	Players receiving two yellow cards throughout the tournament will be dismissed for the remainder of the tournament. This includes an immediate dismissal in any game that the player receives the second yellow for the tournament.<br>
      -	Any red card the player is dismissed from the game and the tournament immediately.<br>
      -	Red carded players are ineligible to play any part in the game BUT teams may substitute and continue without playing a player short<br><br>
      
      8.	Pool games will receive 3 points for a win, 1 point for a draw and 0 points for a loss. From the 3 pools the top 2 teams will advance and be identified by pool and seed from that pool.  Ie A1, A2, B1, B2, C1,C2.<br><br>
      9.	Teams qualifying as the Lucky Loser will be ranked LL1 and LL2 based on standard FIFA criteria applied across the remaining 6 teams (all pools) . First by total Competition points, then combined goal difference, then total goals scored, then relative conduct (yellow card 1 deduction, any red card  the team is ineligible to proceed via tie break, teams remaining tied after that criteria will be decided by coin toss) <br><br>
      10.	A1,B1 and C1 as top seeds will draw opponents from the remaining pool of unseeded opponents ( A2, B2,C2, LL1, LL2). Once Seeded teams have drawn opponents the remaining (2) unseeded teams form the last game in the Knock out stage. Matches will be placed into quarter final positions with the highest ranked seeded team on one side of the draw. The remaining two seeded teams will be on the opposite side of the draw.  The last knock out game featuring unseeded teams will be placed on the same side as the highest ranked seeded team.<br><br>
      11.	 Teams will progress via elimination to Semi final and Final. The semi final losing teams will play off for 3rd place prize<br><br>
      12.	 The winning team will be awarded $1000 in vouchers from JD Sports, The runner up receives $600  and the 3rd placed team $250 in vouchers. <br><br>
      
      
</p>
<a href="https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1" target="popup" onclick="window.open('https://wanderers.duktag.net/duktag/team.cfm?location=278&create=1','popup','width=600,height=800,left=100,top=100'); return false;"><button class="btn mt-6 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Regsiter Here</button></a>
</div>
</div>
`;   
    }
}