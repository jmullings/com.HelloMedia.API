# [![com.HelloMedia.API](https://cloud.githubusercontent.com/assets/110953/11445049/f05512ba-9520-11e5-8fdb-8c8eb5f690d0.jpg)](https://github.com/google/web-starter-kit/releases/latest)

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
| Heroku deployment                     | https://hmloginapp.herokuapp.com/ https://herokuapp.com/                                                                                                                                              |
| Handle Bars                     | Web performance web proformance and speed of development guilds me to use HandleBars; though .jade and .ejs can still be used to extend this API applicaiton.                                                                                                                                                   |

## Quickstart

[Download](https://github.com/google/web-starter-kit/releases/latest) the kit or clone this repository and build on what is included in the `app` directory.
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
## Docs and Recipes

* [File Appendix](https://github.com/google/web-starter-kit/blob/master/docs/file-appendix.md) - What do the different files here do?
* [Using Material Design Lite's Sass](https://github.com/google/web-starter-kit/blob/master/docs/mdl-sass.md) - how to get MDL's Sass working with WSK
* [Deployment guides](https://github.com/google/web-starter-kit/blob/master/docs/deploy.md) - available for Firebase, Google App Engine and other services.
* [Gulp recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) - the official Gulp recipes directory includes a comprehensive list of guides for different workflows you can add to your project.

## Inspiration

I have collected this API, Firebase application and iOS application from numerous sources
* 
* 
* 
* 

## License

MIT
Apache 2.0  
Copyright 2017 JLMConsulting 
