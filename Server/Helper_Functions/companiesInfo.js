const removeDublicate = (companiesData) => {
    companiesData.map(company => {
        for (let i = 0, len = company.roles.length; i < len; i++) { 
            for (let j = i + 1, len2 = company.roles.length; j < len2; j++) { 
                if (company.roles[i].name === company.roles[j].name) {
                    company.roles[i].role = `${company.roles[i].role} , ${company.roles[j].role}` 
                    company.roles.splice(j, 1)
                }
            }
        }
    })
    return companiesData
}

const companiesInfo = (companiesData, peopleData) => {
    companiesData.map(company => {
        company.roles.map(role => {
            const name = peopleData.find(person => person.personalNumber === role.personalNumber)
            role.name = `${name.firstName} ${name.surName}`
        })
    })
    const result = removeDublicate(companiesData)
    return result
}

module.exports.companiesInfo = companiesInfo