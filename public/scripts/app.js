let usuario = []
let senha = []

function realizarCadastro(){
    
    let novoUsuario = document.getElementById('usuario').value
    let novaSenha = document.getElementById('senha').value

    usuario.push(novoUsuario)
    senha.push(novaSenha)

    alert('Cadastro realizado com sucesso') 
    alert(`Nome de Usuario: ${usuario}`)
    alert(`Senha: ${senha}`)

    localStorage.setItem('Usuario',novoUsuario)
    localStorage.setItem('Senha', novaSenha)

    document.getElementById('usuario').value = ''
    document.getElementById('senha').value = ''

    location.href = '../index.html';
}


function verificarLogin(){
    let nomeDoUsuario = document.getElementById('usuarioLogin').value
    let senhaDoUsuario = document.getElementById('senhaLogin').value

    const usuarioRegistrado = localStorage.getItem('Usuario')
    const senhaRegistrada = localStorage.getItem('Senha')

    if (nomeDoUsuario == usuarioRegistrado && senhaDoUsuario == senhaRegistrada){
        alert('Login efetuado com sucesso')
        document.getElementById('usuarioLogin').value = ''
        document.getElementById('senhaLogin').value = ''
        location.href = '../index.html'
    }else{
        alert('Nome de usuario ou senha incorretos. Tente novamente')
    } 
}




