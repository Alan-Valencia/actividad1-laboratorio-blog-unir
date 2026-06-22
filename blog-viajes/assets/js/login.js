const form = document.querySelector('#loginForm');
const errorMsg = document.querySelector('#errorMessage');

form.addEventListener('submit', (e) => {
    // Evitamos que el formulario recargue la pestaña entera
    e.preventDefault();

    // Cachamos los valores. TODO: a futuro, conectar esto con un backend real.
    const user = document.querySelector('#username').value.trim();
    const pass = document.querySelector('#password').value.trim();

    // Validación hardcodeada para la entrega
    if (user === 'admin' && pass === '12345') {
        window.location.href = 'dashboard.html';
    } else {
        // Mostramos el div rojo
        errorMsg.style.display = 'block';
        
        // Removemos la animación y forzamos un repintado (reflow) 
        // para que vuelva a temblar si el usuario se equivoca 2 veces seguidas.
        errorMsg.style.animation = 'none';
        void errorMsg.offsetWidth; 
        errorMsg.style.animation = 'shake 0.4s ease-in-out';
    }
});