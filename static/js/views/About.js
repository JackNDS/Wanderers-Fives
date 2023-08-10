import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("About Us");
    }

    async getHtml() {
        return `
        <div class="sub-page">
        <h1 class="drop-shadow-lg">ABOUT US</h1>
        <p class="drop-shadow-lg">

        Wanderers 5s is the newest 5-A-side football facility in the country with nine state-of-the-art all-weather pitches in a convenient location, welcoming every footballer in Sydney's West.
<br><br>
Offering a range of competition divisions, tournaments and Cup style events Wanderers 5s has the competitive or social football you are looking for.
</p>
<a href="/five-a-side"><button class="btn mt-6 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Play Five-A-Side</button></a>
</div>

<div class="sub-page">
        <h1 class="drop-shadow-lg">FAQ</h1>
        <p class="drop-shadow-lg">

        How long are Wanderers Fives matches?
<br><br>
Standard Adult Competitions: 2 x 18 minute halves. Finals include five minutes of golden goal before the match goes to penalties.
Standard Junior Competitions: 2 x 16 minute halves. Finals to include three minutes of golden goal before the match goes to penalties.<br><br>
How many players should we register?<br><br>
The minimum players on a team is 5 and the maximum is 12. The best playing experience is determined by how much rest each player on your team needs. We believe the perfect number is 8.<br><br>
Does the person registering the team pay the full fee?<br><br>
No, the person registering the team does not need to pay the full fee. The Wanderers Fives system has been designed to share game fees for all players. Any additional players can be added manually by Wanderers Fives staff by emailing <a href="mailto:fives@wswanderersfc.com.au">fives@wswanderersfc.com.au</a>.<br><br>
Do I need to be a registered player with Football NSW?<br><br>
No you do not need to be a registered player through Football NSW to play at Wanderers Fives. All players who create a profile and join a team receive Personal Accident Cover equivalent to the National and State Sporting Bodies. The cover is limited and all players should review the product disclosure statement for Policy ATCSI-146970.<br><br>
Do I wear boots or running shoes?<br><br>
Players can wear outdoor football boots, futsal/turf shoes or running shoes.<br><br>
What do we wear?<br><br>
For all Summer, Winter and New Year competitions, teams will need to provide their own playing kit. At a minimum, we request that teams play in the same shirt colour (playing numbers are not essential).
In Cup tournaments supported by the Cheng Family, full playing kits are provided to all teams who complete registration prior to the uniform deadline. No kits are provided on late entry. This includes the Asian Cup, European Cup, Copa and North America Cup, African Cup and Wanderers Fives World Cup.<br><br>
What if I need equipment?<br><br>
Wanderers Fives stocks playing socks, shin pads and playing shorts which can be purchased at reception.<br><br>
How do I register my team?<br><br>
Follow the below steps from the <a href="/fives-portal">Fives Registration Portal</a>: <br>
1.	Select “Create a Team”.<br>
2.	The system will require you to login as an existing user or create a new profile.<br>
3.	Select your competition and division.<br>
4.	For competitions with age divisions below 18, a parent/guardian will be required to create a profile to attach to the player.<br>
5.	Create a team name and then select how many players will be in the team. This will automatically split and share the competition fee to each player.<br>
6.	Complete!<br><br>
How do I join a team?<br><br>
Follow the below steps from the <a href="/fives-portal">Fives Registration Portal</a>: <br>
1.	Select “Join a team”.<br>
2.	Create a profile or login through an existing email address.<br>
3.	Search your team name and select the team to join.<br>
4.	Complete! <br><br>



</p>
<a href="/five-a-side"><button class="btn mt-6 shadow-lg rounded-full py-2 sm:py-4 px-6 hover:translate-y-1 transition-transform duration-500 ease-in-out text-2xl tracking-wide"">Play Five-A-Side</button></a>
</div>
`;   
    }
}