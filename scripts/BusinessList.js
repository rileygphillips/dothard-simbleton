//COPY OF BUSINESSES//
import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"
import { getNySales } from "./database.js"
import { newYorkBusiness } from "./Business.js"
import { getMcBusinesses } from "./database.js"
import { mcCompanies } from "./Business.js"
import { getPurchasingAgents } from "./database.js"
import { purchasingAgents } from "./Business.js"
import { findBusinesses } from "./database.js"


//ALL BUSINESSES 
const contentTarget = document.querySelector(".businesses")

export const businessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML += "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )
}

//NY BUSINESSES 
const newYorkSection= document.querySelector(".businessList--newYork")

export const newYorkList = () => {
    const newYorkArray = getNySales()
    newYorkSection.innerHTML += "<h1>New York Businesses</h1>"

    newYorkArray.forEach(
        (newYorkObject) => {
            newYorkSection.innerHTML += newYorkBusiness(newYorkObject)
        }
    )
}

//MANUFACTURING COMPANIES
const mcSection= document.querySelector(".businessList--manufacturing")

export const mcList = () => {
    const manufacturingArray = getMcBusinesses()
    mcSection.innerHTML += "<h1>Manufacturing Companies</h1>"

    manufacturingArray.forEach(
        (mcObject) => {
            mcSection.innerHTML += mcCompanies(mcObject)
        }
    )
}


//PURCHASING AGENTS 
const agentSection= document.querySelector(".agents")

export const agentList = () => {
    const agentArray = getPurchasingAgents()
    agentSection.innerHTML += "<h1>Purchasing Agents</h1>"

    agentArray.forEach(
        (agentObject) => {
            agentSection.innerHTML += purchasingAgents(agentObject)
        }
    )
}

//BUSINESS FINDER
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */

                    const foundBusiness = ???.find(???)/** implement .find() method here */

                    companySearchResultArticle.innerHTML = Business(???);
                }
        });