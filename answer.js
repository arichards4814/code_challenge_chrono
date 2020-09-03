const entities = {
    fund: {
        1: { id: 1, name: 'VCPT Ventures III' },
        2: { id: 2, name: 'Huron Oak Equity V' },
        3: { id: 3, name: 'Pacific Capital Partners I' },
    },
    company: {
        15: { id: 15, name: 'FidoFarm', fund_id: 2, exited: false },
        23: { id: 23, name: 'Accumentor', fund_id: 2, exited: true },
        52: { id: 52, name: 'Dronez', fund_id: 1, exited: true },
        63: { id: 63, name: 'CoffeeBuilders', fund_id: 3, exited: false },
    },
}

// Return an array of fund objects in alphabetical order.
function fundsABC(fund){

    let sortArray = []
    for(let f in fund){
        sortArray.push(fund[f])
    }
    
    console.log(sortArray)

    sortArray.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });

    return sortArray
}

fundsABC(entities.fund)


// Return an array of companies that belong to fund 2.
function findCompanyByFundNumber(companies, num){

    let found = []
    for(let company in companies){
        if(companies[company].fund_id === num){
            found.push(companies[company])
        }
    }

    console.log(found)
    return found
}

findCompanyByFundNumber(entities.company, 2)



// Return an array of fund names with an exited company.
function exitedFunds(companies, funds) {

    let fund_ids = []
    for (let company in companies) {
        if (!companies[company].exited) {
            fund_ids.push(companies[company].fund_id)
        }
    }
    let foundFunds = []
    fund_ids.forEach(fund_id => {
        foundFunds.push(funds[fund_id])
    })

    console.log(foundFunds)
    return foundFunds
}


exitedFunds(entities.company, entities.fund)