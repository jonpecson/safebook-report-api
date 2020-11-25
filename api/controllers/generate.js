// declare var sails: any;

// import fs from 'fs'
// declare var fs: any;
// import Anvil from '@anvilco/anvil'
const fs = require('fs')
const Anvil = require('@anvilco/anvil')

/**
 * Module dependencies
 */

// ...


/**
 * generate.js
 *
 * Generate something.
 */
module.exports = async function generate(req, res) {
console.log('LOG ~ file: generate.ts ~ line 20 ~ generate ~ req', req.body);

  // sails.log.debug('TODO: implement');
  // res.status(200).send('Hello from Typescript!');
  // return res.ok();



// The ID of the PDF template to fill
const pdfTemplateID = 'tM7LFoaUErB4fl0fg0UC'
// Your API key from your Anvil organization settings
const apiKey = 'w3u6bLx6UMBMdC6u9HrK5TbEDFaK7KQB'

// JSON data to fill the PDF
const exampleData = {
  "title": "DOLE BQF WAIR COVID 19 Excelver 1 02 Revised Branch",
  "fontSize": 10,
  "textColor": "#333333",
  "data": {
    "reportPeriod": "Oct. 1 - 30, 2020",
    "establishmentName": "NWTF",
    "address": "San Sebastian St, Bacolod, 6100 Negros Occidental",
    "employerName": "Ma. Theresa R. Nuñez",
    "natureOfBusiness": "Finance",
    "noOfMaleEmployees": "10",
    "noOfFemaleEmployees": "10",
    "totalEmployees": "20",
    "noOfMaleContractors": "1",
    "noOfFemaleContractors": "1",
    "totalContractors": "2",
    "screenedEmployees": "20",
    "screenedGuests": "20",
    "deniedEmployees": "0",
    "deniedGuests": "0",
    "referredEmployees": "0",
    "referredGuests": "0",
    "noOfDeaths": "0",
    "isBHERT": true,
    "isHealthFacility": true,
    "isOthers": true,
    "specifyHealthFacility": "NWTF Clinic",
    "specifyOthers": "Bench"
  }
}
const anvilClient = new Anvil({ apiKey })
const { statusCode, data } = await anvilClient.fillPDF(pdfTemplateID, req.body)

console.log(statusCode) // => 200

// Data will be the filled PDF raw bytes
// fs.writeFileSync('output.pdf', req.body, { encoding: null })

res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
res.status(statusCode).send(data);
// res.send("ok");

};
