document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', (event) => {
        event.preventDefault();

        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);    
            })
            .catch(error => {
                alert("An error occurred while fetching data.");
                console.error(error);
            });
    });
});
