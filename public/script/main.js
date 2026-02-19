function searchTasks() {
    const input = document.getElementById('searchTask').value.toLowerCase();
    const cards = document.querySelectorAll('.task-card');

    cards.forEach(card => {
      const title = card.querySelector('.card-title').innerText.toLowerCase();
      card.style.display = title.includes(input) ? '' : 'none';
    });
}