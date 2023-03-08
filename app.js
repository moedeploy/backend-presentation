const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function promptUser() {
  while (true) {
    const answer = await new Promise((resolve) => {
      rl.question('Enter something: ', resolve);
    });

    console.log(`You entered: ${answer}`);
    await axios.post('http://localhost:8080', { data: answer });
  }
}

promptUser();