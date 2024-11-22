// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Obtener todas las imágenes que son clickeables
const clickableImages = document.querySelectorAll('.clickable-img');

clickableImages.forEach(image => {
    image.addEventListener('click', function() {
        const hiddenContent = this.nextElementSibling;

        if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
            hiddenContent.style.display = 'block';
            setTimeout(() => {
                hiddenContent.style.opacity = '1';
                hiddenContent.style.transform = 'translateY(0)';
            }, 10);

            // Generar un color aleatorio para la parte del gradiente
            const randomColor = getRandomColor();

            // Cambiar solo la parte violeta del gradiente, manteniendo el negro fijo
            document.body.style.background = `linear-gradient(to bottom, black, ${randomColor})`;
        } else {
            hiddenContent.style.opacity = '0';
            hiddenContent.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                hiddenContent.style.display = 'none';
            }, 500);

            // Restaurar el fondo original
            document.body.style.background = 'linear-gradient(to bottom, black, #8a2be2)';
        }
    });
});