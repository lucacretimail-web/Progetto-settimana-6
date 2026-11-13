/* Menu: sul telefono il menu hamburger si chiude dopo il tocco.
   Prima si chiude e poi si scorre: se si scorresse a menu aperto, la chiusura (160px a 375px)
   farebbe salire la sezione fuori dallo schermo */

function initMenu() {
  const menu = document.getElementById('menu');

  menu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (evento) => {
      const destinazione = link.getAttribute('href');
      console.log('[menu] clic su', destinazione, '— menu aperto:', menu.classList.contains('show'));
      if (!menu.classList.contains('show')) return;

      evento.preventDefault();
      menu.addEventListener('hidden.bs.collapse', () => {
        console.log('[menu] chiuso, scorro a', destinazione);
        location.hash = destinazione;
      }, { once: true });
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });
}

/* Form contatti: non essendoci un backend, quindi l'invio si blocca, il form si azzera e compare il ringraziamento.
   L'evento submit arriva solo a campi validi: i campi vuoti o l'email sbagliata
  li ferma prima il browser (attributi required e type="email") */

function initForm() {
  const form = document.getElementById('form-contatti');
  const grazie = document.getElementById('grazie');

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log('[form] inviato:', Object.fromEntries(new FormData(form)));
    form.reset();
    console.log('[form] azzerato');
    grazie.hidden = false;
    console.log('[form] ringraziamento mostrato');
  });
}

initMenu();
initForm();
