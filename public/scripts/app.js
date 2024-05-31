let informacoesCadastro = []


function realizarCadastro(){
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value

    informacoesCadastro.push(usuario,senha)

    alert('Cadastro realizado com sucesso')

    document.getElementById('usuario').value = ''
    document.getElementById('senha').value = ''

    location.href='../index.html'
}

document.getElementById('cadastro').addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    realizarCadastro(); 
});


