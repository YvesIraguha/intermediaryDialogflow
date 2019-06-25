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
app.post('/', async (req, res) => {
  await request('https://converge-api-test.andela.com/mrm', query).then(data =>
    console.log(data.allLocations[0])
  );

  console.log('request', req.body);
  res.status(200).json({ msg: 'hello world, how Can I help you?' });
  return { fulfillmentText: 'This is a text response' };
});
// app.get('/', (req, res) => {
//   console.log('we can help you with everything you need');
//   res.status(201).json({ msg: 'This was a post request' });
// });
const port = process.env.PORT || 8080;
app.listen(port);
