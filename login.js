
const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores
    const controlVal = document.getElementById('control').value.trim();
    const passVal = document.getElementById('password').value;

    // Leer usuarios
    let usuarios = [];

    try {
        usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    } catch {
        usuarios = [];
    }

    // Buscar usuario
    const user = usuarios.find(
        u => u.control === controlVal &&
             u.password === passVal
    );

    // Comprobar datos
    if (user) {

        // Guardar sesión
        localStorage.setItem('usuarioActivo', user.id);

        alert('¡Bienvenido, ' + user.nombre + '!');

        // Entrar a la página principal
        window.location.href = 'index.html';

    } else {
        alert('Número de control o contraseña incorrectos');
    }
});
