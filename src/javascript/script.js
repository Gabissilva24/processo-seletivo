const birthdateInput = document.getElementById('birthdate');

birthdateInput.addEventListener('input', function() {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 8) {
        value = value.slice(0, 8);
    }
    if (value.length >= 2 && value.length < 4) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    } else if (value.length >= 4) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
    }
    this.value = value;
});


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var birthdate = document.getElementById('birthdate').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    var gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : 'Não selecionado'; 

    alert(`Nome: ${name}\nTelefone: ${phone}\nNascimento: ${birthdate}\nE-mail: ${email}\nSenha: ${password}\nConfirmar senha: ${confirmPassword}\nGênero: ${gender}`);
});

// Função para alternar a visibilidade das senhas
const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');
    });
});
