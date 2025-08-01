import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("House Rules");
    }

    async getHtml() {
        return `<div class="sub-page five-a-side">
  
        <h1 class="drop-shadow-lg">HOUSE RULES</h1>
  
        <p class="drop-shadow-lg">
            1.	The ball will continue to be played live off all rebound surfaces <br><br>
            2.	Any ball played with the foot or head that travels a full ball width above the height of the boards will be returned for a free kick to the opposition from the spot it was originally played. If the ball is deflected and travels above board height the referee will play on based on the height of the ball when it is contacted. The referee will determine control vs deflected contact.<br><br>
            2b. All Junior leagues will play without ball height restriction, however any ball that contacts the net at either end of the pitch will be given to the goal keeper as a goal kick.<br><br>
            3.	When a ball exits the pitch it will be returned to a the keeper as a goal kick at the end nearest the point the ball went over. <br><br>
            4.	When a ball travels to one of the corners of the pitch, the nearest player will be given 1 metre clearance from all defenders to play it out. The defender may remain goal side but allow the ball to come out. If the referee determines a player is using the corner proximity rule to delay the game – they will be awarded a yellow card. <br><br>
            5.	All tackling infractions are measured against player safety in a cage football environment. Contacting the ball first is not a consideration when resulting contact brings player safety into question. Any player who uses physical contact to force a player into the rebound board will be given a yellow card. Referees may also determine an offence surrounding the boards worthy of a red card with no warning. <br><br>
            6.	Players may not play the ball whilst holding or resting on the rebound boards. Players may contact the board during a running motion without the referee stopping the play<br><br>
            7.	Any dissent, abuse, or violent conduct towards officials, opposition, spectators, or Wanderers 5s staff will be met with a red card <br><br>
            8.	Red cards carry an immediate 1 match ban. Any subsequent red card within a season will carry a 3-match ban. Any player receiving 3 red cards in a 12-month period will be banned from the Wanderers 5s for a period of 12 months including venue hire and facility use outside of competitions <br><br>
            9.	Wanderers 5s is an all-weather facility. Matches will go ahead in all conditions with additional breaks given around extreme heat, uniform considerations around cold/rain.<br><br>
            10.	In the event of lightning matches in the first half of play will be delayed for 30 minutes. If matches cannot be resumed, they will be re-scheduled.
            <br><br>
            11.	 Matches in the 2nd half of play interrupted by lightning will have the match result stand from the moment play was halted.<br><br><br>
            
  </p>
        <h1 class="drop-shadow-lg">FIVE-A-SIDE COMP RULES</h1>
  
        <p class="drop-shadow-lg">
            1.	Each team may field 12 players per scheduled fixture. 5 players may take the field during play including a designated goalkeeper. <br><br>
2.	Substitutions are unlimited throughout play and require a stoppage of play and invitation from the referee to enter the field of play. Players may not enter the field during live play.  <br><br>
3.	A team cannot commence play with fewer than 3 players <br><br>
4.	A team may change their nominated goalkeeper once per half during a stoppage of play and with approval of the referee. Teams may not change goalkeeper in the final 5 minutes of the second half barring injury. <br><br>
5.	It is recommended all players wear shin guards to take the field of play.   <br><br>
6.	Play will commence with the referee’s whistle. All defenders must be 2 metres from the ball and within their own half. Attacking team members must be behind the ball. The ball may be played in any direction and can be played directly on goal. <br><br>
7.	On any free kick or restart of play defenders must be outside 2m from the spot the ball will be played from <br><br>
8.	A goal can be scored from anywhere on the field. <br><br>
9.	No outfield player may enter the keeper’s circle. A player is deemed to have entered the keepers circle if they contact the playing surface within the keepers’ circle. In general, play a player may contact the playing lines provided they do not cross the inner border. A free kick will be awarded from the point in which a player crosses the line <br><br>
9b. Junior leagues ( Under 18 and below) the referee may apply discretion and play on if players (attacking or defending) infringe on the keepers circle but do not directly impact the play. <br><br>
10.	Slide tackles are not permitted. Any defender leaving their feet will result in a free kick for the attacking team. Players may lunge provided the knee of the trail leg does not contact the ground. <br><br>
11.	Defenders must stand two metres from the spot a free kick is awarded. Where two metres cannot be reached (keepers circle) players may not form a wall or defend within 2 metres in any direction. The keeper must also remain outside 2 metres.  <br><br>
12.	All free kicks are considered “direct”. <br><br>
13.	Attacking players will have 5 seconds to place and address the ball on free kicks. They may “play on” from a ball that is not moving and subject to approval from the referee.  <br><br>
14.	Goalkeepers may wear gloves and protection deemed appropriate by the referee. Referees will count 5 seconds for the ball to be returned to play on keepers possession within the circle. Keepers may not attempt over or side arm throws and the referee will use 45 degrees from a vertical posture as the maximum allowable angle for the throwing arm.  <br><br>
15.	Any ball that finishes behind the goal during play will be played out as a free kick from within the keeper’s circle <br><br>
16.	The keeper can be played in as a live attacking player but may only receive the ball in the keepers circle once in a teams possession. Any subsequent pass from a team mate can only be received outside the keepers circle or a penalty will be issued. <br><br>
17.	Competitions will be determined by the following – 3 points for a win, 1 point for a draw, 0 awarded for a loss. Teams will be assessed for ladder standings on total points earned, followed by goal difference, followed by total goals and finally aggregate for games played head-to-head.  <br><br>
18.	Each competition will have dedicated formats outlined at the start of each competition.  <br><br>
19.	All teams will pay the season game fees in advance to have their team registration accepted. Refunds or a Credit will be applied if a competition is unable to go ahead due to a lack of teams entering the competition. In the event of a forfeit or a bye, teams will be given the option to utilise a field for training or where possible arrange a social game. If a game can not proceed beyond the control of the participant, Wanderers Fives will in its best endeavours reschedule accordingly. <br><br>
19b. Teams forfeiting with more than 24hrs notice will incur no additional charge beyond that of the game fee already paid. A notified forfeit will be a loss of 5 – 0. An unnotified forfeit incurs an additional game fee of $75 and will be listed as 10 – 0 Loss and the team won't be eligible for future competition points until the fee is paid.<br><br>

20.	Any team withdrawing after the commencement of the season forfeits all game fees<br><br>
21.	All players must be registered within the competition system prior to taking the field for a competition match. I.e. No player is to take the Wanderers Fives field if they are not registered into a team on our online system. Players who are found to not be registered, will be asked to complete their registration before they are able to participate. <br><br>
22.	Players may fill in for teams within their own competition but can only play 1 game per night in any division without approval from Wanderers Fives management. Wanderers Fives are exploring the implementation of a Flexi-Pass that would allow players to fill in across multiple competitions at an additional cost.  <br><br>
23.	Players must be registered by week 4 of a competition to be eligible for finals fixtures. No player can be added after week 4 of a competition unless accompanied by a doctor's certificate identifying players were unable to participate in the first portion of the competition or are unable to compete for the remainder of the season, or proof of overseas travel that would have prevented the player from registering for the full competition. <br><br>
24.	Any team found to be fielding an unregistered player after they have been asked to and refuse to then complete their registration will have their match forfeited. This includes being found having unregistered players play under the name of an already registered player. <br><br>
25.	Any team playing a banned player (suspension or other) will forfeit the remainder of the season with no fees refunded.<br><br>
26.	Wanderers Fives staff may stop games at any time to identify participants on the team list. Any player unable to prove their identity will result in the match being forfeited.<br><br><br>
            
  </p>
  </div> `;   
    }
}