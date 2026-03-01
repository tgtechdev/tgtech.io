// ADD REVIEW FUNCTIONALITY TO WEBSITE

const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});

const sortSelect = document.getElementedById('sort');
const reviewsContainer = document.getElementById('reviews-container');
