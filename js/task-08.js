const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return;
    }
    const userDetails = { email: email.value, Password: password.value };
    console.log(userDetails);

    event.currentTarget.reset();
});
