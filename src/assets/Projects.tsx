import EcomImage from "./Ecom.jpg";
import GbooksImage from "./Gbooks.jpg";
import ToDoImage from "./ToDo.jpg";
import MinesweeperImage from "./MineSweeper.jpg";

export interface Project {
  title: string;
  details: string;
  features?: string;
  stack: string[];
  link: string;
  splash?: string;
  images?: string[];
}

const Project1: Project = {
  title: "To-Do list",
  details:
    "My first attempt at building an end-to-end CRUD application. The backend was written in Java using Springboot, the frontend is React with TypeScript, and MySQL is used as the database. The app uses toast notifications to inform the user if their actions were successfully executed, and there is logging in place for table interactions.",
  features: "",
  stack: [
    "MySQL",
    "SpringBoot",
    "Java",
    "Eclipse",
    "TypeScript",
    "React",
    "Sass",
  ],
  link: "https://github.com/TPincher/ToDo/tree/development",
  splash: ToDoImage,
  images: ["ToDo.JPG"],
};

const Project2: Project = {
  title: "E-Commerce site",
  details:
    "Built in React and utilizing the Firestore database, this 'site' utilizes a function to dynamically populate or reset the 'stock' database. The API call watches for any adjustments to the data which is held in context, and then updates the database and re-pulls as needed. The user can add items and variants to cart, then 'complete' the purchase where the items in cart will be decremented from the database.",
  features: "",
  stack: ["FireStore", "React", "Sass", "JavaScript"],
  link: "https://github.com/TPincher/ECommerceSite/tree/development",
  splash: EcomImage,
  images: ["Ecom.JPG"],
};

const Project3: Project = {
  title: "Java CLI Minesweeper",
  details:
    "This project was assigned as an introduction to Java, where we used the Eclipse IDE to recreate the classic game 'Minesweeper'. The game features preset and custom map sizes, along with the 'cascading' feature when selecting a tile with no surrounding mines.",
  features: "",
  stack: ["SpringBoot", "Java", "Eclipse"],
  link: "https://github.com/TPincher/JavaMinesweeper/tree/development",
  splash: MinesweeperImage,
  images: ["MineSweeper.JPG"],
};

const Project4: Project = {
  title: "Google Books searcher",
  details:
    "This test project was my first time working with React, and was chosen to get more experience working with API calls and manipulating responses. It has a fairly simple search feature, which pulls and paginates data from the Google Books API, and also allows a user to specify search types.",
  features: "",
  stack: ["React", "Sass"],
  link: "https://github.com/TPincher/GoogleBooksSearcher/tree/development",
  splash: GbooksImage,
  images: ["Gbooks.JPG"],
};

const data: Project[] = [Project1, Project2, Project3, Project4];

export const getProjects = () => {
  return data;
};
