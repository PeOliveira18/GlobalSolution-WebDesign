let usuario = []
let senha = []
let imgs = document.getElementById('img')
let img = document.querySelectorAll('#img img')
let id = 0

const pessoas = [
    {
        nome: 'Sofia Pereira',
        localizacao: 'PE, Recife',
        necessidade: 'Sofia trabalha como biologa marinha e precisa de ferramentas avançadas e dados precisos para monitorar os níveis de poluição e os impactos nas espécies marinhas. Ela quer implementar projetos de conservação eficazes.',
        impacto: 'Com melhores tecnologias e dados detalhados sobre a qualidade da água, Sofia pode realizar pesquisas mais precisas, contribuindo para a conservação dos oceanos e a proteção da biodiversidade marinha.'
    },
    {
        nome: 'Marina Silva',
        localizacao: 'RJ, Rio de Janeiro',
        necessidade: 'Marina trabalha como professora de ciencias e precisa de recursos educativos e dados concretos sobre a saúde dos oceanos para incluir em suas aulas. Ela quer inspirar seus alunos a se tornarem defensores do meio ambiente.',
        impacto: 'O acesso a dados sobre a qualidade da água e a vida marinha, além de tecnologias inovadoras, permitirá que Maria crie um currículo mais dinâmico e informativo, capacitando seus alunos a agir em prol do meio ambiente.'
    },
    {
        nome: 'Ricardo Almeida',
        localizacao: 'SC, Florianopolis',
        necessidade: 'Ricardo trabalha como empreendedor de turismo e precisa de oceanos limpos e bem preservados para manter e aumentar o interesse dos turistas. Ele quer colaborar com iniciativas ambientais para promover o turismo sustentável.',
        impacto: 'A melhoria da qualidade das praias e das águas costeiras atrairá mais turistas, ajudando a expandir seu negócio. Além disso, ao participar de projetos ambientais, Ricardo fortalece a reputação de sua empresa como defensora do meio ambiente.'
    }
]



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


function trocaClasse(id){
    let secao = document.getElementById(id)
    secao.classList.remove('problema')
    secao.classList.add('foco')
    setTimeout(function(){       
        secao.classList.remove('foco')
        secao.classList.add('problema')
    },1000)
}

function carrosel(){
    id++

    if(id > img.length -1 ){
        id = 0
    }

    imgs.style.transform = `translateX(${-id * 400}px)`
    atualizarTexto(id)
    
}

setInterval(carrosel,3800)

function atualizarTexto(id){
    document.getElementById('nome').innerText = pessoas[id].nome
    document.getElementById('localizacao').innerText = `Localizacao: ${pessoas[id].localizacao}`
    document.getElementById('necessidade').innerText = pessoas[id].necessidade
    document.getElementById('impacto').innerText = pessoas[id].impacto
}


function verificarEmail(){
    let emailValido = document.getElementById('eMail').value

    if (emailValido.includes('.com')){
        alert('Voce recebera novidade no e-mail!')
        document.getElementById('eMail').value = ''
        
    }else if (!emailValido){
        alert('Voce precisa digitar um endereco de e-mail')
        
    }else{
        alert('Digite um endereco de e-mail correto')
        
    }
    
}




