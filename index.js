const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


searchForm.addEventListener('submit', e => {
  console.log(searchInput.value);


  e.preventDefault();
});
