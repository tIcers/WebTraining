const prompt = require('prompt-sync')({sigint:true})
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.playerRow = 0;
    this.playerCol = 0;
    this.field[0][0] = pathCharacter
  }
  playGame(){
    let playGame = true
    while(playGame){
      this.print()
      this.askQuestion()
      if(!this.isInBound){
        console.log('Out of bounds, game over!')
        playGame = false
        break;
      }else if(this.isHole()){
        console.log('You fell down a hole, game Over!')
        playGame = false
        break;
      }else if(this.isHat()){
        console.log('congrats! You found a hat!')
        playGame = false
        break;
      }
      this.field[this.playerRow][this.playerCol ] = pathCharacter
    }
  }
  askQuestion(){
    const answer = prompt('Which way?').toUpperCase()
    switch (answer) {
      case 'U':
       this.playerCol -= 1 
        break;
      case 'D':
        this.playerCol+= 1
      case 'L':
        this.playerRow -= 1
      case 'R':
        this.playerRow += 1
      default:
        console.log('Enter U, D, L or R')
        this.askQuestion()
        break;
    }
  }
  isInBound(){
    return (
      this.playerRow >= 0 &&
      this.playerCol>= 0 &&
      this.playerCol>= this.field.length&&
      this.playerRow >= this.field[0].length
    )
   }
  isHole(){
    return field[this.playerRow][this.playerCol] === hole
   }
  isHat(){
    return this.field[this.playerRow][this.playerCol] === hat
  }
  print(){
    const displayStirng = this.field.map((row) => {
      return 
    })
  }

  }
}
