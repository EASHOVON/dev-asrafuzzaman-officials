import { v4 as uuidv4 } from "uuid";
import FoodSite from "../images/food.png";
import FootBallSite from "../images/football.png";
import BikeSite from "../images/bike.png";
import TourSite from "../images/tour.png";
import CarSite from "../images/car.png";

const projects = [
  {
    id: uuidv4(),
    name: "Car Dealer FullStack Website",
    desc: `Technology Used: React, Bootstrap, Material UI,
    React-Router, Firebase, Node.js, Express.js,
    MongoDB, Heroku`,
    clientCodeLink: "https://github.com/EASHOVON/cardealer-client-site",
    liveSite: "https://cardealer-58ff1.web.app/",
    img: CarSite,
  },
  {
    id: uuidv4(),
    name: "Tour-X FullStack Website",
    desc: `Technology Used: React, React-Bootstrap, React-
    Router, Firebase, Node.js, Express.js, MongoDB,
    Heroku,MongoDB, Heroku`,
    clientCodeLink:
      "https://github.com/EASHOVON/tour-x-travels-tourism-agency-client-site",
    liveSite: "https://tour-x-travels-tourism-a-698bc.web.app/",
    img: TourSite,
  },
  {
    id: uuidv4(),
    name: "Honda Responsive Website",
    desc: `Technology Used: Here use HTML5, CSS3, CSS Media Query, BootStrap5.`,
    clientCodeLink: "https://github.com/EASHOVON/honda-cbr-bootstrap",
    liveSite: "https://honda-cbr-eashovon.netlify.app/",
    img: BikeSite,
  },
  {
    id: uuidv4(),
    name: "Football Responsive Website",
    desc: `Technology Used: Here use HTML5, CSS3, CSS Media Query. This is only for mobile device and large device responsive.`,
    clientCodeLink: "https://github.com/EASHOVON/football-responsive",
    liveSite: "https://eashovon.github.io/football-responsive/",
    img: FootBallSite,
  },
  {
    id: uuidv4(),
    name: "FoodHub Website",
    desc: "This is a very basic food Website. This is my first creation of website which I build my sefl.",
    clientCodeLink: "https://github.com/EASHOVON/food-hub",
    liveSite: "https://eashovon.github.io/food-hub/",
    img: FoodSite,
  },
];

export default projects;
