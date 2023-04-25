const team ={
	_players : [],
	_games: [],
	_playersList:{
		firstName:'atsuki',
		lastName:'uchida',
		age:25
	},
	_gamesList:{
		opponent:'hikaru',
		teamPoints:20,
		opponentPoints:30,
	},

	get getPlayers(){
		return this._players
	},
	get getGames(){
		return this._games
	},

 addPlayer(newFirstName, newLastName, newAge){
		const newPlayer = {
			firstName:newFirstName,
			lastName:newLastName,
			age:newAge
		}
		this._players.push(newPlayer)
	},
	addGame(newOpponent,newTeamPoints, newOpponentPoints){
		const newGame ={
			opponent:newOpponent,
			teamPoints:newTeamPoints,
			opponentPoints:newOpponentPoints
		}
		this._games.push(newGame)
	}
}
team.addPlayer('bugs','bunny',24)
team.addGame('Titans', 100, 98)
console.log(team._games)
