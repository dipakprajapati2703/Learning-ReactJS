import logo from "./assets/react-core-concepts.png";
import {User} from "./User.jsx";

// Dynamic description
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Create Header component
function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <User />
      </main>
    </div>
  );
}

export default App;
