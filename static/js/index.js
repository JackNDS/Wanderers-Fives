import Dashboard from "./views/Dashboard.js";
import About from "./views/About.js";
import Contact from "./views/Contact.js";
import Home from "./views/Home.js";
import PitchHire from "./views/PitchHire.js";
import FiveASide from "./views/FiveASide.js";
import Terms from "./views/Terms.js";
import Parties from "./views/Parties.js";
import PartyForm from "./views/PartyForm.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/about", view: About },
       { path: "/five-a-side", view: FiveASide},
       { path: "/pitch-hire", view: PitchHire},
       { path: "/contact", view: Contact },
       { path: "/home", view: Home },
       { path: "/terms", view: Terms },
       { path: "/parties", view: Parties},
       { path: "/party-form", view: PartyForm},

    ];
    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch =>potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded" , () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }

    })

    router();
});