// Imports
import { headerBar } from "./navBar.module.js";
import { cardContainer } from "./cardContainer.module.js"
import {card} from "./card.module.js";
// ---

// Layout
document.body.appendChild(headerBar)
document.body.appendChild(cardContainer)
// ---

// Card
const cardWrapper = document.querySelector('.cardContainer')
cardWrapper.appendChild(card)
