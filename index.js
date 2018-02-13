const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


searchForm.addEventListener('submit', e => {
  // Get the search term
  const searchTerm = searchInput.value;
  // Get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  // Get limit
  const searchLimit = document.getElementById('limit').value;
  console.log(searchLimit);

  // Check input
  if(searchTerm === ''){
    showMessage('Please add a search term', 'alert-danger');
  }
  
  function showMessage(msg, className){
    // create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(msg));
    //Get parent
    const searchContainer = document.getElementById('search-container');
    // Get search
    const search = document.getElementById('search');
    searchContainer.insertBefore(div, search);

    //Time out alert 
    setTimeout(() => document.querySelector('.alert').remove(),3000);
  }


  e.preventDefault();
});
