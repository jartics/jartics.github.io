document.addEventListener('DOMContentLoaded', function () {
  loadComponent('components/navbar.html', 'navbar-placeholder');
  loadComponent('components/footer.html', 'footer-placeholder');
  loadComponent('components/whatsapp.html', 'whatsapp-placeholder');
  loadComponent('components/navbar-fake.html', 'navbar-fake-placeholder');
});

$(document).ready(function () {
  // Código para ejecutar cuando el DOM ha terminado de cargarse

  // Agrega un retraso de 5 segundos antes de asignar el evento click al botón
  setTimeout(function () {
      $("#navbar-toggler-btn").on("click", function () {
          // Muestra un alert al hacer clic en el botón
          const navbarToggler = $(".navbar-toggler");

          // Obtén el menú desplegable
          const navbarCollapse = $(".navbar-collapse");

          // Verifica si el menú desplegable está actualmente abierto
          const isNavbarOpen = navbarCollapse.hasClass("show");

          // Si el menú está abierto, ciérralo; de lo contrario, ábrelo.
          if (isNavbarOpen) {
              navbarCollapse.removeClass("show"); // Cierra el menú
          } else {
              navbarCollapse.addClass("show"); // Abre el menú
          }
      });
  }, 1000); // 5000 milisegundos equivale a 5 segundos
});

const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
    );
    if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
        accordionItemBody.style.maxHeight = 0;
    }    });
});

ScrollReveal().reveal('.scroll-reveal', {
    delay: 200,       // Retardo en milisegundos antes de que aparezca el elemento
    distance: '50px', // Distancia desde la que aparecerá el elemento
    origin: 'bottom', // Origen de la revelación ('bottom', 'left', 'right', 'top')
    duration: 1000,   // Duración de la animación en milisegundos
    easing: 'ease-out'// Función de aceleración de la animación (opcional)
  });

  ScrollReveal().reveal('.scroll-reveal.from-right', {
    distance: '50px',   // Distancia desde la que aparecerá el elemento
    origin: 'right',    // Origen de la revelación ('right' para aparecer desde la derecha)
    duration: 1000,     // Duración de la animación en milisegundos
    easing: 'ease-out'  // Función de aceleración de la animación (opcional)
  });

  ScrollReveal().reveal('.scroll-reveal.from-left', {
    distance: '50px',   // Distancia desde la que aparecerá el elemento
    origin: 'left',     // Origen de la revelación ('left' para aparecer desde la izquierda)
    duration: 1000,     // Duración de la animación en milisegundos
    easing: 'ease-out'  // Función de aceleración de la animación (opcional)
  });

  

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 200;
    const clampedOpacity = Math.min(1, Math.max(1, opacity));
    navbar.style.background = `linear-gradient(to bottom, rgb(10, 10, 10), transparent ${clampedOpacity * 100}%)`;

    
  });

function loadComponent(url, placeholderId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(placeholderId).innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}


