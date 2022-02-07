//import { Business } from "./Business.js"
import { businessList } from "./BusinessList.js"
import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"
import { newYorkList } from "./BusinessList.js"
import { mcList } from "./BusinessList.js" 
import { agentList } from "./BusinessList.js"

const mainContainer = document.querySelector(".businesses")


const applicationHTML = `
<article class="details">
<h1>Active Businesses</h1>
    <section class="businesses">
    ${businessList()}
    </section>
    <h1>New York Businesses</h1>
    <section class="businessList--newYork">
    ${newYorkList()}
    </section>
    <h1>Manufacturing Companies</h1>
    <section class="businessList--manufacturing">
    ${mcList()}
    </section>
    <h1>Purchasing Agents</h1>
    <section class="agents">
    ${agentList()}
    </section>
</article>
`


