const express = require('express');
const { request } = require('graphql-request');

const query = `{
allLocations{
    rooms{
      name,
      calendarId
    }
  }
}`;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/', async (req, response) => {
  await request('https://converge-api-test.andela.com/mrm', query).then(data =>
    console.log(data.allLocations[0][0])
  );

  console.log('request', req.body);
  response.setHeader('Content-Type', 'application/json');
  response.send(
    JSON.stringify({
      speech: 'Error. Can you try it again ? ',
      displayText: 'Error. Can you try it again ? '
    })
  );
});
// app.get('/', (req, res) => {
//   console.log('we can help you with everything you need');
//   res.status(201).json({ msg: 'This was a post request' });
// });
const port = process.env.PORT || 8080;
app.listen(port);
