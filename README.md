![Logo of the project, raised hands](/public/solidarity-smaller.png?raw=true "Raised Hands")

# VolunTellMe

The VolunTellMe app allows visitors to see the volunteer work happening around them, and be inspired. By providing a way to view and search the many, many places where fellow citizens are working in service, this app is aimed at increasing the drive of everyone to make this country and world a better place to live.

For the best experience, see the [live application on Heroku](https://voluntellme.herokuapp.com/). [Or, see it hosted on Amazon s3](http://voluntellme.s3-website-us-west-1.amazonaws.com/)!

On the "Information" tab (also the root path), users can see resources and information about getting involved.

![Screenshot of the Information tab](/public/voluntellme-info.png?raw=true "information tab")

On the "Explore" tab, a user can search the table to see nearby (or interesting) organizations that have had government-sponsored volunteers. The table with auto-filter based on the input to the search box.

![Screenshot of the Explore tab](/public/voluntellme-explore.png?raw=true "explore tab")

On the "Map" tab, the user can see a visual representation of locations where the service takes place. A user can click on the marker, revealing an InfoWindow, each of which contains a link to a Google search using the organization's name.

![Screenshot of the Map tab](/public/voluntellme-map.png?raw=true "map tab")

This is the front-end, built in React and consuming a Rails API. The Rails API serves up a static CSV of the location of sites where AmeriCorps members and Senior Corps volunteers served between 2/10/2016 and 2/10/2017. See the wonderful [Corporation for National and Community Service report](https://data.nationalservice.gov/Grants-and-Grantees/CNCS-State-Profiles-2016-2017-National-Map-of-Prog/wy3d-x64g) for much more information and context.

Feel free to take a look at the source code of the API [here](https://github.com/jk1dd/voluntellme_api), or check out the [live API application](https://voluntellme-api.herokuapp.com/api/v1/organizations), which serves up JSON.

## Installing / Getting started

```
git clone https://github.com/jk1dd/voluntellme.git
cd voluntellme
npm install
npm start
```
Navigate to `localhost:3000` and you should see the magic.

If you would like to include your own Google Maps API key (to avoid a missingKey error in development, and a fatal error when trying to deploy in production), insert it as a parameter `?key=YOUR_API_KEY` in the `public/index.html` file.

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests and feedback are warmly welcome.

## Additional information

- This project was managed with [Pivotal Tracker](https://www.pivotaltracker.com/).
- This is my first [React](https://facebook.github.io/react/) project, spun up with [Create React App](https://github.com/facebookincubator/create-react-app), and the first time I have used the [Google Maps API](https://developers.google.com/maps/). I also had the chance to use the [React Router](https://github.com/ReactTraining/react-router) and [React Google Maps](https://github.com/tomchentw/react-google-maps) libraries, and test with [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme). For fun, I also deployed it to [Amazon s3](https://aws.amazon.com/s3/).
- I have made an attempt to focus on accessibility in structure and design, testing with a screen reader, analyzing with [aXe](https://www.deque.com/products/axe/), and ensuring all relevant elements are included in the tab cycle.

## Attributions

The logo and favicon were created by abledb from Noun Project, and licensed under [Creative Commons Attribution](https://creativecommons.org/licenses/by/3.0/legalcode).

## Licensing

The code in this project is licensed under MIT license.
