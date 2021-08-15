//Team Stats 
const team = {
  _players: [
    {
      firstName: 'Paul',
      lastName: 'Pogba',
      age: 28
    },
     {
      firstName: 'Anthony',
      lastName: 'Martial',
      age: 25
    },
       {
      firstName: 'Edison',
      lastName: 'Cavani',
      age: 34
    }
  ],
  _games: [
    {
      opponent: 'Man City',
      teamScore: 2,
      opponentScore: 0
    },
      {
      opponent: 'Leicester City',
      teamScore: 1,
      opponentScore: 2
    },
    {
      opponent: 'FC Roma',
      teamScore: 2,
      opponentScore: 3
    },
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this.games;
  },
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this._players.push(player)
  },
  addGame(opponentName, teamScore, opponentScore) {
    let game = {
      opponentName: opponentName,
      teamScore: teamScore,
      opponentScore: opponentScore
    }
    this._games.push(game);
  },
}
team.addPlayer('Steph', 'Curry', 33);
team.addPlayer('Lebron', 'James', 36);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players)
team.addGame('Blue Devils', 111, 33);
team.addGame('Lakers', 774, 984);
team.addGame('Steelers', 44, 10000000);
console.log(team._games)
