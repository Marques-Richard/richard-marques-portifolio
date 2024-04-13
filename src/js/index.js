const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoVoltarInicio = document.querySelector('.btn-voltar-inicio');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const projetosAtivos = document.querySelectorAll('.projeto.ativo');

botaoMostrarProjetos.addEventListener('click', function() {
    projetosInativos.forEach(function(projetoInativo) {
        projetoInativo.classList.add('ativo');
    });
    botaoMostrarProjetos.classList.add("remover");
});

botaoVoltarInicio.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const botaoMostrarMenos = document.querySelector('.btn-menos-projetos');
botaoMostrarMenos.addEventListener('click', function() {
    projetosInativos.forEach(function(projetoInativo) {
        projetoInativo.classList.remove('ativo');
    });
    botaoMostrarProjetos.classList.remove("remover");
});
