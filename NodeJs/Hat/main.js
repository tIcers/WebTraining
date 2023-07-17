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
    const numCol = this.field[this.playerRow].length
    const {playerRow, playerCol} = this
    return playerRow >=  numRow || playerCol >= numCol || playerRow < 0 || playerCol < 0
  }
  isHatFound(){
    return this.field[this.playerRow][this.playerCol] ==='^'
   }
  isHoleFound(){
    return this.field[this.playerRow][this.playerCol] ==='O';
  }
  static generateField(height, width, percentage){
    const field = []
    const totalTiles = height * width
    let numOfHoles = Math.floor((totalTiles * percentage) / 100 )
    const numOfHats = Math.random(Math.random() * height)
    const hatRow  = Math.random(Math.random() * height)
    const hatCol  = Math.random(Math.random() * width)

    for(let row = 0; row < height; row ++){
      field[row] = []
      for(let col = 0; col < width; col++){
        if(row === hatRow && col === hatCol){
          field[row][col] = '^'
         }else if(numOfHoles > 0 && Math.random() < numOfHoles / 100){
          field[row][col] = 'O'
          numOfHoles--
        }else{
          field[row][col] = '░'
        }
      }
    }
    return field
  }
}

let gameIsRunning = true

const userHeight = prompt('Height?\n')()
const userWidth = prompt('Width?\n')()
const percentage = prompt('Percentage?\n')()
const myField = new Field(Field.generateField(userHeight, userWidth, percentage))

while(gameIsRunning){
  myField.print()
  const direction = prompt('Which way? u/d/r/l for up, down, right and left\n')
  if(direction ==='quit'){
    console.log('Game Over, you quit!')
    gameIsRunning = false
  }else{
    myField.updateField(direction)
    if(myField.isOutOfBound()){
      console.log('You are out of Bound')
      gameIsRunning = false
    }else if (myField.isHoleFound()) {
      console.log('You fell in hole rn!\n Game Over')
      gameIsRunning = false
    }else if(myField.isHatFound()){
      console.log("You found hat! Congrats!")
      gameIsRunning = false
    }
  }
}
