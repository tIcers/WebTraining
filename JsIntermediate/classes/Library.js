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
  set setIsCheckedout(bool) {
    this._isCheckedout = bool;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedout === true) {
      this.setIsCheckedout = false;
    } else {
      this.setIsCheckedout = true;
    }
  }
  getAverageRating() {
    const sum = this._ratings.reduce((previous, current) => {
      return previous + current;
    }, 0);
    return sum / this._ratings.length;
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(title, isCheckedout, ratings, author, pages) {
    super(title, isCheckedout, ratings);
    (this._author = author), (this._pages = pages);
  }
  get getAuthor() {
    return this._author;
  }
  get getPages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, isCheckedout, ratings, director, runTime) {
    super(title, isCheckedout, ratings);
    this._director = director;
    this._runTime = runTime;
  }
  get getDirector() {
    return this._director;
  }
  get getRuntime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  (title = "A Short History of Nearly Everything"),
  (isCheckedout = false),
  (ratings = []),
  (author = "Bill Bryson"),
  (pages = 544)
);
console.log(historyOfEverything);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything);

historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(4);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie(
  (title = "speed"),
  (isCheckedout = false),
  (ratings = []),
  (director = "Jan de Bont"),
  (runTime = 116)
);
console.log(speed.toggleCheckOutStatus());
console.log(speed.getIsCheckedout);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
