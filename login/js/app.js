let loginForm = document.querySelector(".login");

function preventReload(event)
{
    event.preventDefault();
}
loginForm.addEventListener('submit', preventReload);

let _username = 'Admin';
let _password = 'pakistan123';

function SignIn()
{
    let user = loginForm.username.value.trim();
    let pass = loginForm.password.value.trim();

    if(_username == user && _password == pass)
    {
        window.location.href = "home.html";
        // window.location.replace("home.html");
    }
    else
    {
        alert("Wrong username or password");
    }

}