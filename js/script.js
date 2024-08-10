document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    console.log('El formulario se ha enviado.'); // Verificar si el script se ejecuta

    var inputDate = document.getElementById('date').value;
    var correctDate = '2019-08-10'; // Formato 'YYYY-MM-DD' para el valor del input date

    if (inputDate === correctDate) {
        window.location.href = 'carta.html'; // Redirige a carta.html si la fecha es correcta
    } else {
        document.getElementById('error-message').textContent = 'Fecha incorrecta. Por favor, intenta de nuevo.';
    }
});
