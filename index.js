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
app.post('/', (req, res) => {
  //   await request('https://converge-api-test.andela.com/mrm', query).then(data =>
  //     console.log(data.allLocations[0])
  //   );

  console.log('request', req.body);
  //   response.setHeader('Content-Type', 'application/json');
  return res.json({
    speech: 'Something went wrong!',
    displayText: 'Something went wrong!',
    source: 'get-movie-details'
  });
});
// app.get('/', (req, res) => {
//   console.log('we can help you with everything you need');
//   res.status(201).json({ msg: 'This was a post request' });
// });
const port = process.env.PORT || 8080;
app.listen(port);
