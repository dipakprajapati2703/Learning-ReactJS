import headerLogo from "./assets/react-core-concepts.png";
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';

// Get dynamic description from `reactDescriptions` randomly on page load 
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Create Header component
function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={headerLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// Example 1: Components props using single argument
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// Example 2: Components props using multiple arguments
function CoreConcept2({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={componentsImg}
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
            />
            <CoreConcept2
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept2 {...CORE_CONCEPTS[1]} />
            <CoreConcept2 {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;