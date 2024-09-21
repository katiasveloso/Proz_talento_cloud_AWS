// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
// usernameInput.addEventListener('focus', ()=> {
    // usernameLabel.classList.add('required-popup')
// })

// Ocultar popup de campo obrigatório
// usernameInput.addEventListener('blur', ()=> {
    // usernameLabel.classList.remove('required-popup')
// })

// Ocultar popup de campo obrigatório e Mostrar popup de campo obrigatório
function mostrarPopup(input, label){
    input.addEventListener('focus', ()=>{
        label.classList.add('required-popup')
    })
    input.addEventListener('bluir', ()=>{
        label.classList.remove('required-popup')
    })
}

mostrarPopup(usernameInput, usernameLabel)



// Validar valor do input name
usernameInput.addEventListener('change', (e) =>{
    let valor = e.target.value
if (valor.length < 3){
    usernameInput.classList.remove('correct')
    usernameInput.classList.add('error')
    usernameHelper.innerText = "O username deve conter pelo menos"
    usernameHelper.classList.add('visible')
}else {
    usernameInput.classList.add('correct')
    usernameInput.classList.remove('error')
    usernameInput.classList.remove('visible')

}
})


// Validar valor do input e-mail
const emailLabel = document.querySelector('label[for="email"]')
const emailInput = document.getElementById('email')
const emailHelper = document.getElementById('email-helper')

mostrarPopup(emailInput, emailLabel)

emailInput.addEventListener('change',(e)=>{
    let valor = e.target.value
    if(valor.includes("@") && valor.includes('.com')){
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.add('visible')
        

    }else{
        emailInput.classList.add('error')
        emailInput.classList.remove('corret')
        emailInput.classList.add('visible')
        emailHelper.innerText = " O email deve conter '@' e '.com'"

    }
})

//------------Validação idade-------//

let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById('idade-helper')









// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel)

function temCaractereEspecial(senha) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(senha)
}

senhaInput.addEventListener('change', (e) =>{
    let valor = e.target.value
    let temCaractere = temCaractereEspecial(valor)
if (valor.length > 2 && temCaractere){
    senhaInput.classList.add('correct')
    senhaInput.classList.remove('error')
    senhaHelper.classList.remove('visible')
} else {
    senhaInput.classList.add('error')
    senhaInput.classList.remove('correct')
    senhaHelper.classList.add('visible')
    senhaHelper.innerText = " a senha precisa ter pelo menos 3 caracteres e um caractere especial"
}
})

// ---------- VALIDAÇÃO CONFIRMAR SENHA ---------- //

let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

mostrarPopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener('change', (e)=> {
    let valor = e.target.value
if(valor == senhaInput.value){
    confirmaSenhaInput.classList.add('correct')
    confirmaSenhaInput.classList.remove('error')
    confirmaSenhaHelper.classList.remove('visible')
} else {
    confirmaSenhaInput.classList.add('error')
    confirmaSenhaInput.classList.remove('correct')
    confirmaSenhaHelper.classList.add('visible')
    confirmaSenhaHelper.innerText = "as senhas precisam ser iguais"
}
})

function togglePassword(btn, inputId) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        btn.innerText = "🚫"; // Altera o ícone para mostrar que a senha está visível
    } else {
        input.type = "password";
        btn.innerText = "👁️"; // Altera o ícone para mostrar que a senha está oculta
    }
}