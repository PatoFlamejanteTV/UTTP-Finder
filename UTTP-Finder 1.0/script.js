const apiKey = 'YOUR YOUTUBE DATA API KEY (open readme.mb to learn how to get your data API key)';
let currentPage = 1;
let currentKeyword = '';
let totalChannels = [];

document.getElementById('prevButton').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayChannels();
  }
});

document.getElementById('nextButton').addEventListener('click', () => {
  currentPage++;
  displayChannels();
});

function fetchChannels() {
  const batchSize = 50; 
  const startIndex = totalChannels.length + 1;
  const searchQuery = encodeURIComponent(currentKeyword);

  fetch(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&part=snippet&type=channel&maxResults=${batchSize}&startIndex=${startIndex}&key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const channels = data.items || [];
      totalChannels = totalChannels.concat(channels.map(channel => ({
        title: channel.snippet.title,
        channelId: channel.id.channelId
      })));
      displayChannels();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '<p>Failed to fetch channels. Please try again later.</p>';
    });
}

function displayChannels() {
  const pageSize = 5; 
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const channelsToDisplay = totalChannels.slice(startIndex, endIndex);

  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (channelsToDisplay.length === 0) {
    resultsContainer.innerHTML = '<p>No channels found.</p>';
  } else {
    channelsToDisplay.forEach(channel => {
      const channelElement = document.createElement('div');
      channelElement.classList.add('result-item');
      const channelLinkElement = document.createElement('a');
      channelLinkElement.href = `https://www.youtube.com/channel/${channel.channelId}`;
      channelLinkElement.textContent = channel.title;

      channelElement.appendChild(channelLinkElement);
      resultsContainer.appendChild(channelElement);
    });
  }

  updatePagination();
}

function updatePagination() {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const totalPages = Math.ceil(totalChannels.length / 5);

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages || totalChannels.length === 0;

  const currentPageDisplay = document.getElementById('currentPage');
  currentPageDisplay.textContent = `Page ${currentPage}`;
}

function searchChannels(keyword) {
  currentKeyword = keyword;
  currentPage = 1;
  totalChannels = [];
  fetchChannels();
}

