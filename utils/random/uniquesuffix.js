function randomString() {
  return `${Date.now()} - ${Math.round(Math.random() * 1E9)}`;
}

module.exports = {
  randomString,
}