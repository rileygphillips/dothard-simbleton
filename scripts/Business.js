//ALL BUSINESSES
export const Business = ( businessObject ) => {
    return `
        <section class="businesses">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <div class="business__address">
                ${businessObject.addressFullStreet}
                ${businessObject.addressCity}
                ${businessObject.addressStateCode}
                ${businessObject.addressZipCode}
            </div>
        </section>
    `
}

//NY BUSINESSES
export const newYorkBusiness = ( newYorkObject ) => {
    return `
        <article class="new york businesses">
            <h2 class="business__name">${newYorkObject.companyName}</h2>
            <div class="business__address">
                ${newYorkObject.addressFullStreet}
                ${newYorkObject.addressCity}
                ${newYorkObject.addressStateCode}
                ${newYorkObject.addressZipCode}
            </div>
        </article>
    `
}

//MANUFACTURING COMPANIES 
export const mcCompanies = ( mcObject ) => {
    return `
        <article class="manufacturing businesses">
            <h2 class="business__name">${mcObject.companyName}</h2>
            <div class="business__address">
                ${mcObject.addressFullStreet}
                ${mcObject.addressCity}
                ${mcObject.addressStateCode}
                ${mcObject.addressZipCode}
            </div>
        </article>
    `
}

//PURCHASING AGENTS

export const purchasingAgents = (agentObj) => {
    return `
        <article class="purchasing agents">
            <h2 class="agents__name">${agentObj.fullName}</h2>
            <h3 class="business__name">
                ${agentObj.company}
            </h3>
            <h3 class="business__phone">
                ${agentObj.phone}
            </h3>
        </article>
    `
}

//FOUND COMPANIES IN THE SEARCH BAR

