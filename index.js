const { response } = require('express');
const express = require('express');
const app = express();

app.get('/avoxiip', (req, res) => {
    
    const fs = require('fs');
    const Reader = require('@maxmind/geoip2-node').Reader;
    const dbBuffer = fs.readFileSync('./GeoLite2-Country.mmdb');
    const reader = Reader.openBuffer(dbBuffer);

    answer = reader.country(req.query.ipaddress);

    let countrycode = answer.country.isoCode;
    let ipexist = req.query.whitelist.includes(countrycode);

    if (ipexist == true) {
        outcome = "approved"
    } else {
        outcome = "blocked"
        };
      
    res.send(outcome)
    
  })

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
