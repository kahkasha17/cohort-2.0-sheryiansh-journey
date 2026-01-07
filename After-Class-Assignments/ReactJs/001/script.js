import navitems from "./nav.js";
import heroSection from "./hero.js";


const root=ReactDOM.createRoot(document.querySelector('#container'));
root.render([navitems(),heroSection()]);
