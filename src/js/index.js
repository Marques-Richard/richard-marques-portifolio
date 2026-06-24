// =========================
// SCROLL SUAVE MENU
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const id = this.getAttribute('href');

        const section = document.querySelector(id);

        if (section) {

            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });

        }

    });

});

// =========================
// HEADER DINÂMICO
// =========================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 80) {

        header.classList.add('header-scroll');

    } else {

        header.classList.remove('header-scroll');

    }

});

// =========================
// MENU ATIVO
// =========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('ativo');

        if (link.getAttribute('href') === `#${current}`) {

            link.classList.add('ativo');

        }

    });

});

// =========================
// ANIMAÇÃO AO APARECER
// =========================

const revealElements = document.querySelectorAll(
    '.card-sobre, .card-tech, .projeto, .contato-info, .informacoes'
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add('show');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

// =========================
// BOTÃO VOLTAR AO TOPO
// =========================

const btnTopo = document.createElement('button');

btnTopo.innerHTML = '↑';

btnTopo.classList.add('btn-topo');

document.body.appendChild(btnTopo);

window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {

        btnTopo.classList.add('show');

    } else {

        btnTopo.classList.remove('show');

    }

});

btnTopo.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

// =========================
// EFEITO NOS CARDS
// =========================

const cards = document.querySelectorAll(
    '.card-sobre, .card-tech, .projeto'
);

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-10px)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0px)';

    });

});



// =========================
// MOSTRAR MAIS PROJETOS
// =========================

const btnMostrarMais =
    document.getElementById('btnMostrarMais');

const btnMostrarMenos =
    document.getElementById('btnMostrarMenos');

const projetosInativos =
    document.querySelectorAll('.projeto.inativo');

btnMostrarMais.addEventListener('click', () => {

    projetosInativos.forEach(projeto => {

        projeto.classList.add('mostrar');

    });

    btnMostrarMais.classList.add('esconder');

    btnMostrarMenos.classList.remove('esconder');

});

btnMostrarMenos.addEventListener('click', () => {

    projetosInativos.forEach(projeto => {

        projeto.classList.remove('mostrar');

    });

    btnMostrarMais.classList.remove('esconder');

    btnMostrarMenos.classList.add('esconder');

    document
        .getElementById('projetos')
        .scrollIntoView({
            behavior: 'smooth'
        });

});