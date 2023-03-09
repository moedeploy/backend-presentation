const http = require('http');
const prompt = require('prompt');

prompt.start();

async function promptUser() {
  while (true) {
    const { answer } = await prompt.get({ name: 'answer', description: 'Enter something:' });

    console.log(`You entered: ${answer}`);

    const options = {
      hostname: '172.30.10.11',
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