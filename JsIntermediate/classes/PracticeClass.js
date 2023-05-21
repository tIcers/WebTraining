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

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
  }
}
const balloonAttack = (player1, player2) => {
  for (let i = 1; i <= 10; i++) {
    player2.balloonCount -= player1.hitsPerMinute;
    player1.balloonCount -= player2.hitsPerMinute;
    player1.status();
    player2.status();
  }
  if (player1.balloonCount > player2.balloonCount) {
    return player1.name;
  } else if (player2.balloonCount > player1.balloonCount) return player2.name;
  return "Tie";
};


///const cipher = new ShiftCipher(2);
// cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
// cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

class ShiftCipher(shiftNumber){
  encrypt(msgToBeEncryped){
    for(int i = 0; i < msgToBeEncryped.length; i ++){
        
}
}

}
