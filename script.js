const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const topic = String(data.get('topic') || 'General question');
  const message = String(data.get('message') || '').trim();

  if (!name || !email || !message) {
    document.getElementById('formNotice').textContent = 'Please complete all required fields.';
    return;
  }

  const subject = encodeURIComponent('Techfinity By AK website — ' + topic);
  const body = encodeURIComponent(
    'Name: ' + name + '\nReply email: ' + email + '\nTopic: ' + topic + '\n\nMessage:\n' + message
  );
  document.getElementById('formNotice').textContent = 'Opening your email app. Review the message and press Send there.';
  window.location.href = 'mailto:techfinity.by.ak@gmail.com?subject=' + subject + '&body=' + body;
});
