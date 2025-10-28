const login = document.querySelector('.login');
const signup = document.querySelector('.signup');

function goLogin(){
    //alert("Ir para a página de login");
    signup.style.display = 'none';
    login.style.display = 'block';
}
function goSignup(){
    //alert("Ir para a página de cadastro");
    signup.style.display = 'block';
    login.style.display = 'none';
}

const username = document.getElementById('username');
const password = document.getElementById('password');
const logionForm = document.querySelector('.login form');

logionForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(!name || !pass){
        alert('Por favor, preencha todos os campos.');
        return;
    }
    const name = username.value;
    const pass = password.value;

    window.location.href = "index.html";
    alert('Nome: ' + name + '\nSenha: ' + pass);
    username.value = '';
    password.value = '';
})

const newusername = document.getElementById('new-username');
const newpassword = document.getElementById('new-password');
const newemail = document.getElementById('new-email');
const signupForm = document.querySelector('.signup form');

signupForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(!name || !pass || !email){
        alert('Por favor, preencha todos os campos.');
        return;
    }
    const name = newusername.value;
    const pass = newpassword.value;
    const email = newemail.value;
    window.location.href = "index.html";
    alert('Nome: ' + name + '\nSenha: ' + pass);
    newusername.value = '';
    newpassword.value = '';
    newemail.value = '';
})