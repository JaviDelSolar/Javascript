document.addEventListener('DOMContentLoaded', function () {
    // Acá obtengo los botones "Me gusta" y los contadores
    const likeBtns = document.querySelectorAll('.like-btn');
    const likeCounts = document.querySelectorAll('.like-count');

    // Acá obtengo los "Me gusta" almacenados en localStorage o inicializarlos a cero
    let likesArray = JSON.parse(localStorage.getItem('likes')) || Array.from({ length: likeBtns.length }, () => 0);

    // Función para guardar los "Me gusta" en localStorage
    function guardarLikes() {
        localStorage.setItem('likes', JSON.stringify(likesArray));
    }

    // Mostrar los "Me gusta" almacenados en localStorage en los contadores
    likeCounts.forEach((count, index) => {
        count.textContent = likesArray[index] + ' Me gusta';
    });

    // Agregar eventos de clic a los botones "Me gusta"
    likeBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            likesArray[index]++;
            likeCounts[index].textContent = likesArray[index] + ' Me gusta';
            guardarLikes();
        });
    });

});

