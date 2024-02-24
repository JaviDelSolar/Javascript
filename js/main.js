//Esta constante se refiere a todos los elementos del botón "Me gusta" en el documento
//'document.querySelectorAll('.like-btn') para seleccionar todos los elementos que tienen la clase like-btn 
//(todos los botones "Me gusta").
const likeBtns = document.querySelectorAll('.like-btn');

//El bucle forEach recorre todos los botones "Me gusta" y ejecuta la función proporcionada para cada uno de ellos
likeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const parentDiv = btn.parentElement;
        const likeCount = parentDiv.querySelector('.like-count');
        let likes = parseInt(likeCount.textContent);
        likes++;
        likeCount.textContent = likes + ' Me gusta';

        alert('¡Gracias por tu Me gusta!');
    });
});



