const photoList = document.getElementById('photo-list');

function fetchPhotos() {
  // Fetch photos from the API
  fetch('https://picsum.photos/400/500')
    .then(response => response.url)
    .then(url => {
      const photoContainer = document.createElement('div');
      photoContainer.classList.add('photo-container');

      const img = document.createElement('img');
      img.src = url;
      photoContainer.appendChild(img);

      const userInfo = document.createElement('div');
      userInfo.classList.add('user-info');

      const username = document.createElement('p');
      username.textContent = generateRandomUsername();
      userInfo.appendChild(username);

      const profileImg = document.createElement('img');
      profileImg.src = 'https://picsum.photos/200';
      profileImg.classList.add('profile-img');
      userInfo.appendChild(profileImg);

      photoContainer.appendChild(userInfo);

      photoList.appendChild(photoContainer);
    })
    .catch(error => console.error('Error fetching photos:', error));
}

// Function to generate a random username
function generateRandomUsername() {
  const usernames = ['JohnDoe', 'JaneSmith', 'Alice123', 'Bob456', 'Emily789'];
  return usernames[Math.floor(Math.random() * usernames.length)];
}

// Load initial photos
fetchPhotos();

// Load more photos when scrolling to the bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchPhotos();
  }
});
