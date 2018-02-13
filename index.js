import reddit from './redditapi';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


searchForm.addEventListener('submit', e => {
  // Get the search term
  const searchTerm = searchInput.value;
  // Get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  // Get limit
  const searchLimit = document.getElementById('limit').value;
  
  // Check input
  if(searchTerm === ''){
    showMessage('Please add a search term', 'alert-danger');
  }
  
  // Clear Input
  searchInput.value='';

  // Search Reddit
  reddit.search(searchTerm, searchLimit, sortBy).then(results => {
    console.log(results);
      let output = '<div class="card-columns">';
      results.forEach(post => {
        // Check for image
        let image = post.preview ? post.preview.images[0].source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';

        output += `
        <div class="card">
        <img class="card-img-top" src="${image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${truncateText(post.selftext,105)}</p>
          <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
          <hr>
          <span class="badge badge-scondary">Subreddit: ${post.subreddit}</span>
          <span class="badge badge-dark">Score: ${post.score}</span>

        </div>
      </div>
        `;
      });
      output += '</div>';
      document.getElementById('results').innerHTML=output;
    })

  e.preventDefault();
});

// Show message
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

function truncateText(text, limit){
  const shortened = text.indexOf('', limit);
  if(shortened == -1) return text;
  return text.substring(0, shortened);
}
