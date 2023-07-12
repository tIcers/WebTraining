class School {
  constructor(name, level, numberOfStudents) {
    (this._name = name),
      (this._level = level),
      (this._numberOfStudents = numberOfStudents);
  }

  get getName() {
    return this._name;
  }
  get getLevel() {
    return this._level;
  }
  get getNumberOfStudents() {
    return this._numberOfStudents;
  }
  set setNumberOfStudents(newNumber) {
    if (newNumber === "number") {
      this._numberOfStudents = newNumber;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number");
    }
  }
  quickFacts() {
    console.log(
      this._name +
        "educated " +
        this._numberOfStudents +
        "students at the " +
        this._level +
        "school level"
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}

class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get getPickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, level, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}

class High extends School {
  constructor(name, level, numberOfStudents, sportsTeams = []) {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get getSportsTeams() {
    this._sportsTeams.forEach((element) => {
      console.log(element);
    });
    return this._sportsTeams;
  }
}

const lorraineHansbury = new Primary(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, gurardian, or a family membner over the age of 13."
);

console.log(lorraineHansbury.quickFacts());

School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

const alSmith = new High("Al E. Smith", "high", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith.getSportsTeams);
