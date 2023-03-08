const http = require('http');
const readline = require('readline');

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

    const options = {
      hostname: '172.30.198.77',
      port: process.env.PORT || 8080,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`);
    });

    req.on('error', error => {
      console.error(error);
    });

    const data = JSON.stringify({ data: answer });

    req.write(data);
    req.end();
  }
}

promptUser();