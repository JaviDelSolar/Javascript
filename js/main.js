document.addEventListener('DOMContentLoaded', function () {
    const likeBtns = document.querySelectorAll('.like-btn');
    const likeCounts = document.querySelectorAll('.like-count');

    let likesArray = obtenerLikes() || Array.from({ length: likeBtns.length }, () => 0);

    function obtenerLikes() {
        return localStorage.getItem('likes') ? localStorage.getItem('likes').split(',') : null;
    }

    function guardarLikes() {
        localStorage.setItem('likes', likesArray.join(','));
    }

    likeCounts.forEach((count, index) => {
        count.innerText = likesArray[index] + ' Me gusta';
    });

    likeBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            likesArray[index]++;
            likeCounts[index].innerText = likesArray[index] + ' Me gusta';
            guardarLikes();
        });
    });
});


