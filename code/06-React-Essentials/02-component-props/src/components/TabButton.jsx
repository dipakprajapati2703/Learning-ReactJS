// Using prop method
function TabButton(props) {
    return (
        <li>
            <button>{props.children}</button>
        </li>
    );
}
// Using children object which is spread operator
function TabButton2({ children }) {
    return (
        <li>
            <button>{children}</button>
        </li>
    );
}

// Using label property which is attribute
function TabButton3({ label }) {
    return (
        <li>
            <button>{label}</button>
        </li>
    );
}

export { TabButton, TabButton2, TabButton3 };