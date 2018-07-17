var msgHandler = {
  users: [],
  history: []
};
msgHandler.online = function(id) {
  if (this.users.length > 3) {
    return false
  }
  let user = {
    id: id,
    name: 'play' + (this.users.length + 1),
    score: 0,
    life: 3
  };
  this.users.push(user);
  return true
}
msgHandler.clearHistory = function(id) {
  this.history = this.history.filter(e => e.id.toString() !== id);
};
msgHandler.offline = function(id) {
  // let user = this.users.find(e => e.id === id);
  // this.history.push(user);
  this.users = this.users.filter(e => e.id !== id)
  this.users.map((e, index) => { e.name = 'play' + (index + 1)})
};
msgHandler.gainScore = function(data) {
  let user = this.users.find(e => e.id === data.id)
  user.score = data.score
  return user
};
module.exports = msgHandler;