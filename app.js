document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('lookup-form');
    var searchInput = document.getElementById('search');
    var resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var query = searchInput.value.trim();
        var url = 'superheroes.php';

        if (query !== '') {
            url += '?query=' + encodeURIComponent(query);
        }

        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                resultDiv.innerHTML = data;
            })
            .catch(function () {
                resultDiv.textContent = 'An error occurred while fetching data.';
            });
    });
});
