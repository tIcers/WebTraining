class Media {
  constructor(title, isCheckedout = false, ratings = []) {
    (this._title = title),
      (this._isCheckedout = isCheckedout),
      (this._ratings = ratings);
  }
  get getTitle() {
    return this._title;
  }
  get getIsCheckedout() {
    return this._isCheckedout;
  }
  get getRatings() {
    return this._ratings;
  }
  toggleCheckOutStatus(bool) {
    if (bool === "true") {
      setIsCheckedout(false);
    } else {
      setIsCheckedout(true);
    }
  }
  getAverageRating() {
    const sum = this._ratings.reduce((previous, current) => {
      return previous + current;
    }, 0);
    return sum / this._ratins.length;
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
  set setIsCheckedout(bool) {
    this._isCheckedout = bool;
  }
}
