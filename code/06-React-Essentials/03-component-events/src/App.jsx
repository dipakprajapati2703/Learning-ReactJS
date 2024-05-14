
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, COURSE_GOAL } from './data.js';
import Header from "./components/Header/Header.jsx";
import { CoreConcept, CoreConcept2 } from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  let tabContent = 'Please click a button';
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    tabContent = selectedButton;
    console.log(tabContent);
  }

  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />
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
        <section id="examples">
          <h2>Tab Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;