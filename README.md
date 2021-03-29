# Updates from the Mars Rover Perserverance

[![GitHub license](https://img.shields.io/github/license/diuguide/symptom_tracker)](LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

This is an application posting updates from the Mars Rover Perserverance.  It is a MERN stack application (MongoDB, Express, React, and Node) 

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Explanation of Tech](#Explanation-of-Technology)
- [Future Improvements](#futureimprovements)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Usage

1) The use of the site is pretty straight forward, all the content can be accessed on the site, if you wish to have the ability to post something to the site (Mars rover specific)  please contact me at ```everett.diuguid@gmail.com``` and I will send over the "editor password" which will give you the ability to utilize the ```Write Post``` button in the nav bar. Thanks for taking the time to visit this repository.

## Installation

To install this application locally, clone the repository and run npm install from the root directory, this should install all the necessary dependencies.  If running the application locally use the command ```npm run dev``` which will start the express server and react server concurrently.  

## Explanation of Technology

This is a Mern stack application.  The front end is handled with ```reactjs``` using a template created with ```npx create-react-app```.  The front end styling is mostly SCSS using the ```node-sass``` npm package with a few components like the post modal that utilize the ```react-bootstrap``` package.  Data is populated from a MongoDB database with the Astronomy Picture of the Day or ```APOD``` being accessed utilizing NASA Open API.  The backend routing is handled with ```express.js``` and the package manager used is ```node.js```.

## Future Improvements

I really hope to get more access to data from NASA.  I want the site to emmulate the [Official NASA Perserverance Page](https://mars.nasa.gov/mars2020/).  So tempurature other weather data from the surface.  This is all dependent on NASA updating their API's more often.  I also would like to figure out a better way to host the images, the hi-def images become cumbersome to manage while keeping the application as light weight as possible.  Lastly, I was working on making a diagram of the rover where the user can hover over certain parts of a picture of the rover and information on that section will pop up in a modal.  I had originally planned to do this using Photoshop's ```Save for Web(Legacy)``` option.  But the formatting changed to drastically in JSX and I couldn't get it to work.

## Contributing

Your contribution is most welcome! Please refer to the contributing guidelines when making contributions to this project.

Any contributions for this web page are definitely welcome, just send me a PR.

Please note that this project is released with a [Contributor Code of Conduct](code_of_conduct.md). By Participating in this project, you agree to abide by its terms.




## Questions

Please reach out to me @ ```everett.diuguid@gmail.com``` with any questions regarding this project.




## License

[MIT](LICENSE) copyright (c) 2020 Everett Diuguid.

[back to Table of Contents](#table-of-contents)

