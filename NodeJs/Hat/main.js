const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.playerRow = 0;
    this.playerCol = 0;
  }
  print() {
    let output = '';
    for (let row = 0; row < this.field.length; row++) {
      for (let col = 0; col < this.field[row].length; col++) {
        let value = this.field[row][col];
        output += value;
      }
      output += '\n';
    }
    console.log(output);
  }
  updateField(direction){
    const {playerRow, playerCol} = this
    this.field[playerRow][playerCol] = "*"
    if (direction ==='u') {
      this.playerRow--;
    }else if (direction ==='d') {
     this.playerRow++ 
    }else if(direction==='l'){
      this.playerCol--;
    }else if(direction==='r'){
      this.playerCol++;
    }else{
      console.log('Please enter u, d, l or r for movement\n')
    }
  }
  isOutOfBound(){
    const numRow = this.field.length
    const numCol = this.field[row].length
    const {playerRow, playerCol} = this

    return playerRow >=  numRow || playerCol >= numCol || playerRow < 0 || playerCol < 0
  }
  isHatFound(){
    return this.field[this.playerRow][this.playerCol] ==='^'
   }
  isHoleFound(){
    return this.field[this.playerRow][this.playerCol] ==='O';
  }

}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

let gameIsRunning = true

while(gameIsRunning){
  myField.print()
  const direction = prompt('Which way? u/d/r/l for up, down, right and left\n')
  if(direction ==='quit'){
    console.log('Game Over, you quit!')
    gameIsRunning = false
  }else{
    myField.updateField(direction)
  }
}
