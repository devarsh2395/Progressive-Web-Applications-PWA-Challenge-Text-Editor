const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.defaultPrevented();
  deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const {outcome} = await deferredPrompt.userChoice;
    console.log(`User Response to the install prompt: ${outcome}`);
    deferredPrompt = null;
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('Jate PWA has been installed successfully');
  butInstall.classList.toggle('hidden', true);
});


