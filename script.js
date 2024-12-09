document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newRecommendation = document.getElementById('new-recommendation').value;
    if (newRecommendation.trim() !== '') {
        alert('Recomendación enviada con éxito!');
        document.getElementById('new-recommendation').value = '';
    } else {
        alert('Por favor, escribe una recomendación antes de enviar.');
    }
});