import './CoreConcept.css';
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

// Exporting both components
export { CoreConcept, CoreConcept2 };