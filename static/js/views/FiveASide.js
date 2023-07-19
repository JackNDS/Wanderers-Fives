import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Five-A-Side");
    }

    async getHtml() {
        return `
        
        <!-- Explore Section -->
    <div class="explore-container">
      <div class="explore-heading font-everlooser text-white">UPCOMING COMPETITIONS</div>
      <div class="explore">
        <a href="/fives-portal" data-link><div  font-everlooser text-black">
        <img class="square" src="/img/africancup.webp" alt="">
        </div></a>
        <a href="/fives-portal" data-link><div  font-everlooser text-black">
        <img class="square" src="/img/summersoccersquare.webp" alt="">
        </div></a>
        <a href="#" data-link><div  font-everlooser text-black">
        <img class="square" src="/img/copasquare.webp" alt="">
        </div></a>
      </div>
    </div>
    <div class="explore-container">
      <div class="explore-heading font-everlooser text-white">COMING SOON</div>
      <div class="explore">
        <div  font-everlooser text-black">
          <img class="square" src="/img/newyearsquare.webp" alt="">
          </div>
          <div  font-everlooser text-black">
          <img class="square" src="/img/winters1quare.webp" alt="">
          </div>
         <div  font-everlooser text-black">
          <img class="square" src="/img/winters2quare.webp" alt="">
          </div>
      </div>
    </div>

      <div class="sub-page five-a-side">
      <h1 class="drop-shadow-lg">WHY PLAY AT WANDERERS FIVES?</h1>
      <p class="drop-shadow-lg">

      Accessible divisions and evenly matched competitions
      <br><br>
      Use it as an extra training run to compliment your club football
      <br><br>
      Register as a social group with no affiliation to any club or association
      <br><br>
      Personal Accident Cover for all registered participants<br><br></p>

      <h1 class="drop-shadow-lg">HOW ITS PLAYED</h1>

      <p class="drop-shadow-lg">
      Field size 33m x 20m
      <br><br>
5 players on the pitch including goalkeeper
<br><br>
No out of bounds and modified goals
<br><br>
Unlimited subs with up to 10 players per team
<br><br>
No slide tackles permitted
<span class="hide-text">Personal Accident Cover for all registered participants in line with the sports governing body</span>
</p>

    
<a href="/fives-portal" data-link><button class="btn mt-6 shadow-lg rounded-full py-2 sm:py-4 px-10 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Register Here</button></a>
</div>
</div>
`;   
    }
}