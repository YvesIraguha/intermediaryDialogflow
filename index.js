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
    fulfillmentText: 'This is a text response',
    fulfillmentMessages: [
      {
        card: {
          title: 'card title',
          subtitle: 'card text',
          imageUri:
            'https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png',
          buttons: [
            {
              text: 'button text',
              postback: 'https://assistant.google.com/'
            }
          ]
        }
      }
    ],
    source: 'example.com',
    payload: {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: 'this is a simple response'
              }
            }
          ]
        }
      },
      facebook: {
        text: 'Hello, Facebook!'
      },
      slack: {
        text: 'This is a text response for Slack.'
      }
    },
    outputContexts: [
      {
        name:
          'projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name',
        lifespanCount: 5,
        parameters: {
          param: 'param value'
        }
      }
    ],
    followupEventInput: {
      name: 'event name',
      languageCode: 'en-US',
      parameters: {
        param: 'param value'
      }
    }
  });
});
// app.get('/', (req, res) => {
//   console.log('we can help you with everything you need');
//   res.status(201).json({ msg: 'This was a post request' });
// });
const port = process.env.PORT || 8080;
app.listen(port);
