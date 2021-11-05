function viralAdvertising(n) {
  let nLikes = 0;
  let shared = 5;
  for (let i = 0; i < n; i++) {
    let like = Math.floor(shared / 2);
    nLikes += like;
    shared = like * 3;
  }
  return nLikes;
}
const result = viralAdvertising(3);
console.log(result);
