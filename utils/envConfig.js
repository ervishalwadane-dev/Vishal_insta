const {config} = require('@playwright/test');


const environments = {
  QA: {
    baseURL: 'https://www.instagram.com/',
    username: 'sushsingh2026',
    password: 'bug123'
  },
  // UAT: {
  //   baseURL: 'https://uat.example.com',
  //   // username: 'uatUser',
  //   // password: 'uatPass123'
  // },
  // PROD: {
  //   baseURL: 'https://prod.example.com',
  //   // username: 'prodUser',
  //   // password: 'prodPass123'
  // }
};

// Pick environment dynamically from process.env.ENV
//const currentEnv = process.env.ENV || 'QA'; // default to QA

module.exports = {environments};