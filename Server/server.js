const express = require('express');
const app = express();
const cors = require('cors')
const fetch = require('node-fetch');
const { companiesInfo } = require('./Helper_Functions/companiesInfo')

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', async (req, res) => {
    const fetchCompanies = await fetch(`https://kap-csd.herokuapp.com/api/assessment/companies`);
    const companiesData = await fetchCompanies.json();
    const fetchPeaple = await fetch(`https://kap-csd.herokuapp.com/api/assessment/persons`);
    const peopleData = await fetchPeaple.json();
    const result = companiesInfo(companiesData, peopleData);
    res.json(result);
})

app.listen(PORT, () => console.log(`listening on port ${PORT}!`))