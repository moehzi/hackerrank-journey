function sockMerchant(n, ar) {
  let numPairs = 0;
  let search = new Set();
  for (const sock of ar) {
    if (search.has(sock)) {
      numPairs++;
      search.delete(sock);
    } else {
      search.add(sock);
    }
  }
  return numPairs;
}

sockMerchant(10, [1, 2, 1, 3, 2]);
