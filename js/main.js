// Array para almacenar la cantidad de "Me gusta" de cada imagen
let likesArray = [];

const likeBtns = document.querySelectorAll('.like-btn');

// El bucle forEach recorre todos los botones "Me gusta" y ejecuta la función proporcionada para cada uno de ellos
likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const parentDiv = btn.parentElement;
        const likeCount = parentDiv.querySelector('.like-count');
        let likes = parseInt(likeCount.textContent);
        likes++;
        likeCount.textContent = likes + ' Me gusta';

        // Almacenar la cantidad de "Me gusta" en el array
        likesArray[index] = likes;

        // Verificar la cantidad de "Me gusta" para la imagen actual
        const totalLikes = likesArray[index];

        if (totalLikes === 1) {
            alert('¡Gracias por tu primer Me gusta!');
        } else if (totalLikes === 3) {
            alert('¡Muchas gracias! Ya me has dado 3 Me gusta.');
        } else {
            alert('¡Gracias por tu Me gusta!');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const name = prompt('Por favor, ingresa tu nombre:');
    const saludoDiv = document.getElementById('saludo');

    if (name) {
        saludoDiv.textContent = '¡Hola ' + name + ', soy Rami!';
    } else {
        saludoDiv.textContent = 'Hola, soy Rami.';
    }
});



