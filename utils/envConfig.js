const environments = {
  QA: {
    baseURL: 'https://www.instagram.com/',
    username: process.env.INSTA_USERNAME || 'sushsingh2026',
    password: process.env.INSTA_PASSWORD || 'Vish@7776'
  },
  UAT: {
    baseURL: 'https://www.instagram.com/',
    username: process.env.INSTA_USERNAME || 'sushsingh2026',
    password: process.env.INSTA_PASSWORD || 'Vish@7776'
  }
};

// NEW USER: sushsingh2026 (Vish@7776)

const currentEnv = ['QA', 'UAT'].includes(process.env.ENV?.toUpperCase())
  ? process.env.ENV.toUpperCase()
  : 'QA';

module.exports = { environments, currentEnv };