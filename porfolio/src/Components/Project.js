import MusicalChairs from "../images/MusicalChairs.png"
import GoodGreens from "../images/Goodgreen.png";
import NoteTaker from "../images/Notetaker.png";
import TextEditor from "../images/Texteditor.png";
import WorkDayScheduler from "../images/WorkdayScheduler.png";
import WeatherDashboard from "../images/weatherdashboard.png";

export const projects = [
    {
        title: "Musical Chairs",
        description: "Social media app to share music with friends using Spotify's API",
        image: MusicalChairs,
        link: "https://musical-chairs.herokuapp.com/login"
    },

    {
        title: "Good Greens",
        description: "Application to find vegan and vegetarian restaurants in your city and you can create your own favorites list",
        image: GoodGreens,
        link: "https://www.togoodgreens.com/"

    },

    {
        title: "Note Taker",
        description: "Application to create, save, and delete notes",
        image: NoteTaker,
        link: "https://express-js-notetaker.herokuapp.com/"
    },

    {
        title: "Text Editor",
        subtitle: "Full Stack PWA editor using Javascript, CSS, HTML, Node & Express",
        description: "A text editor that ca be used offline and meets PWA criteria. ",
        image: TextEditor,
        link: "https://jeremys-pwa-text-editor.herokuapp.com/"
    },

    {
        title: "Work Day Scheduler",
        description: "Application to create a daily schedule",
        image: WorkDayScheduler,
        link: "https://therealgeneparmesan.github.io/Work-Day-Scheduler/"

    },

    {
        title: "Weather Dashboard",
        description: "Application to find the weather in any city",
        image: WeatherDashboard,
        link: "https://therealgeneparmesan.github.io/Weather_Dashboard/"
    }


]