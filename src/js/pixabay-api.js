const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33291155-7539ac0bf1c0d1be65bb6c22f';

function getPictures(searchQuery) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  // 'https://pixabay.com/api/?key=33291155-7539ac0bf1c0d1be65bb6c22f&q=searchQuery...'
  return fetch(`${BASE_URL}?${params}`).then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
}

export { getPictures };
