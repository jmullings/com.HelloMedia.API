# [![com.HelloMedia.API](https://github.com/jmullings/com.HelloMedia.API/blob/master/uploads/Screen%20Shot%202017-05-27%20at%208.56.11%20PM.png?raw=true)](https://github.com/jmullings/com.HelloMedia.API)
## Overview

[Hello Media API](https://developers.google.com/web/tools/starter-kit/) is part of a full-stack web development assessment, which included Node.JS API for Mongo, Heroku, Firebase deployment

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET / POST / UPLOAD | An example of the data saved, can be viewed and manipulated via https://hmloginapp.herokuapp.com/. Though all data capture is conducted through ./insert ./update ./delete - an index.hds has been provided to assist in viewing the functionality of the API                         |
| UPLOAD images                           | I have opted to use Express-image-upload for this section of the API, as numerous other NPM libraries conflicted with the mongoDB protocal and requirements. All images are held in the ./uploads directory                                                                                                     |
| Sercurely save personal details               | All personal information is held securely on a seperate remote server i.e. mongoLab.com as Heroku does not provide MongoDB support.                                                                                          |
| Returns personal ID / Token               | I could have employed many tokenisers / cookieIDs here, but simply use the mongoDB objectID for easy.                                                                                                |
| Linked to iOS application                   | the iOS application will make calls to both FireBase and the API via standard POST / GET.  |
| Built-in HTTP Server                   | A built-in server for previewing your data can be extended for other purposes.                                                                                                                                                                           |
| Use NPM, Node.JS and Express.js                |  The full node family was used here and some unused dependcies remain the the node_modules folder.                                                                                                                            |
| Testing: mocha and Supertest style          |  Run: `npm test` - to review test script; easy to run and extend.               |
| Heroku deployment / With optional maile     | https://hmloginapp.herokuapp.com/ https://herokuapp.com/                                                                                                                                              |
| Handle Bars                     | Web performance web proformance and speed of development guilds me to use HandleBars; though .jade and .ejs can still be used to extend this API applicaiton.                                                                                                                                                   |

## Quickstart

- `npm start` - Standard node opporations have been used in the assessment


## Web Performance

Full preformance of this application is yet to be done.

## Browser Support

At present, I have tested the web functions on the following browsers:

* Chrome
* Firefox
* Safari

## Troubleshooting

Please note that this is merely a Demo and much of the exception handling functions have been ommitted, though mongoDB asserts have been lefted inside the API

## License

MIT
Apache 2.0  
Copyright 2017 JLMConsulting 
