
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, COURSE_GOAL } from './data.js';
import Header from "./components/Header.jsx";
import { CoreConcept, CoreConcept2 } from './components/CoreConcept.jsx';
import CourseGoal from './components/CourseGoal.jsx';

function App() {
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
          <hr />
          <h2>Course Goal</h2>
          <ul>
            <CourseGoal {...COURSE_GOAL[0]}></CourseGoal>
            <CourseGoal {...COURSE_GOAL[1]}></CourseGoal>
          </ul>
          <hr />

        </section>
      </main>
    </div>
  );
}

export default App;