class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  movieTime() {
    let result = this.data - this.users * 5;
    if (result < 10) {
      return false;
    } else {
      return true;
    }
  }
}
