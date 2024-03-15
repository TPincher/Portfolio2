export interface Project {
  title: string;
  details: string;
  features: string;
  stack: string;
  link: string;
}

const Project1: Project = {
  title: "To-Do list",
  details:
    "My first attempt at building an end-to-end CRUD application. The backend was written in Java using Springboot, the frontend is React with TypeScript, and MySQL is used as the database. The app uses toast notifications to inform the user if their actions were successfully executed, and there is logging in place for table interactions.",
  features: "features",
  stack: "stack",
  link: "https://github.com/TPincher/ToDo/tree/development",
};

const Project2: Project = {
  title: "E-Commerce Site",
  details:
    "Built in React and utilizing the Firestore database, this 'site' utilizes a function to dynamically populate or reset the 'stock' database. The API call watches for any adjustments to the data which is held in context, and then updates the database and re-pulls as needed. The user can add items and variants to cart, then 'complete' the purchase where the items in cart will be decremented from the database.",
  features: "features",
  stack: "",
  link: "https://github.com/TPincher/ECommerceSite/tree/development",
};

const Project3: Project = {
  title: "minesweeper",
  details:
    "This project was assigned as an introduction to Java, where we used the Eclipse IDE to recreate the classic game 'Minesweeper'. The game features preset and custom map sizes, along with the 'cascading' feature when selecting a tile with no surrounding mines.",
  features: "features",
  stack: "stack",
  link: "https://github.com/TPincher/JavaMinesweeper/tree/development",
};

const Project4: Project = {
  title: "Google Books searcher",
  details:
    "This test project was my first time working with React, and was chosen to get more experience working with API calls and manipulating responses. It has a fairly simple search feature, which pulls and paginates data from the Google Books API, and also allows a user to specify search types.",
  features: "features",
  stack: "stack",
  link: "https://github.com/TPincher/GoogleBooksSearcher/tree/development",
};

const data: Project[] = [Project1, Project2, Project3, Project4];

const getProjects = () => {
  return data;
};

export default getProjects;
