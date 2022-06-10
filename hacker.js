import https from 'https';

async function aa() {
  let maxPages = 0;
  let currentPage = 1;
  let data = [];
  do {
    const response = await https.request(
      `https://jsonmock.hackerrank.com/api/countries?page=${currentPage}`
    );
    const dataJson = await response.json();

    currentPage++;
  } while (currentPage < maxPages);
  currentPage++;
  {
  }
}
