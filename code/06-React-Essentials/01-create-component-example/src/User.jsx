export const userData = {
    firstName: 'Dipak', // feel free to replace the name value
    lastName: 'Prajapati', // feel free to replace the name value
    title: 'Magento Backend Developer', // feel free to replace the title value
};

export function User() {
    return (
        <div id="user" data-testid="user">
            <h3> Outputing User Data Dynamic Example</h3>
            <ul>
                <li><strong>Full Name</strong>: {userData.firstName} {userData.lastName}</li>
                <li><strong>Title</strong>: {userData.title}</li>
            </ul>
        </div>
    );
}