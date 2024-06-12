document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginBtn.addEventListener('click', function () {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    });

    registerBtn.addEventListener('click', function () {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        let valid = true;

        document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

        const loginEmail = document.getElementById('loginEmail').value;
        const loginSenha = document.getElementById('loginSenha').value;

        if (!loginEmail) {
            valid = false;
            document.getElementById('loginEmailError').innerText = 'Por favor, insira seu email';
            document.getElementById('loginEmailError').style.display = 'block';
        }

        if (!loginSenha) {
            valid = false;
            document.getElementById('loginSenhaError').innerText = 'Por favor, insira sua senha';
            document.getElementById('loginSenhaError').style.display = 'block';
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        let valid = true;

        document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

        const nome = document.getElementById('nome').value;
        if (nome.length < 3) {
            valid = false;
            document.getElementById('nomeError').innerText = 'Nome deve ter pelo menos 3 caracteres';
            document.getElementById('nomeError').style.display = 'block';
        }

        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            valid = false;
            document.getElementById('emailError').innerText = 'Email inválido';
            document.getElementById('emailError').style.display = 'block';
        }

        const senha = document.getElementById('senha').value;
        if (senha.length < 6) {
            valid = false;
            document.getElementById('senhaError').innerText = 'Senha deve ter pelo menos 6 caracteres';
            document.getElementById('senhaError').style.display = 'block';
        }

        const confirmarSenha = document.getElementById('confirmar-senha').value;
        if (confirmarSenha !== senha) {
            valid = false;
            document.getElementById('confirmarSenhaError').innerText = 'As senhas não coincidem';
            document.getElementById('confirmarSenhaError').style.display = 'block';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log
}