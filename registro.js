
const formRegistro = document.getElementById('formRegistro');

formRegistro.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores
    const nombreVal = document.getElementById('nombre').value.trim();
    const paternoVal = document.getElementById('paterno').value.trim();
    const maternoVal = document.getElementById('materno').value.trim();
    const controlVal = document.getElementById('control').value.trim();
    const semestreVal = document.getElementById('semestre').value.trim();
    const turnoVal = document.getElementById('turno').value;
    const especialidadVal = document.getElementById('especialidad').value;
    const passVal = document.getElementById('password').value;
    const confirmarVal = document.getElementById('confirmar').value;

    // Validar nombre
    if (!nombreVal) {
        alert('Escribe tu nombre');
        return;
    }

    // Validar apellido paterno
    if (!paternoVal) {
        alert('Escribe tu apellido paterno');
        return;
    }

    // Validar número de control
    if (!controlVal) {
        alert('Escribe tu número de control');
        return;
    }

    // Validar longitud de contraseña
    const largo = [...passVal].length;

    if (largo < 8 || largo > 128) {
        alert('La contraseña debe tener entre 8 y 128 caracteres');
        return;
    }

    // Confirmar contraseña
    if (passVal !== confirmarVal) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Leer usuarios guardados
    let usuarios = [];

    try {
        usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    } catch {
        usuarios = [];
    }

    // Comprobar si el número de control ya existe
    const existe = usuarios.some(
        u => u.control === controlVal
    );

    if (existe) {
        alert('Este número de control ya está registrado');
        return;
    }

    // Crear nuevo usuario
    const nuevoUsuario = {
        id: Date.now(),
        nombre: nombreVal,
        paterno: paternoVal,
        materno: maternoVal,
        control: controlVal,
        semestre: semestreVal,
        turno: turnoVal,
        especialidad: especialidadVal,
        password: passVal
    };

    // Guardar usuario
    usuarios.push(nuevoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');

    // Ir al login
    window.location.href = 'login.html';
});
