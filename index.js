const axios = require('axios');

const getGoogle = async () => {
  const res = await axios.get('https://google.com');
  console.log({ res });
  console.log('hello world!');
};

getGoogle();
