//This project selects two random NFL teams, chooses a day of they week they play, and redicts the outcome of thier matchup.

const nflTeams = [
    'Arizona Cardinals', 'Cincinati Bengals', 'Cleveland Browns', 'Green Bay Packers', 'Jacksonville Jaguars', 'Minnesota Vikings', 'Chicago Bears', 'Detroit Lions',  'Tennessee Titans', 'Las Vegas Raiders', 'Baltimore Ravens', 'Tampa Bay Buccaneers', 'Miami Dolphins', 'New York Giants', 'New York Jets', 'Carolina Panthers', 'Indianapolis Colts', 'San Francisco Giants', 'Los Angeles Rams', 'Los Angeles Chargers', 'Denver Broncos', 'New Orleans Saints', 'Seattle Seahawks', 'Houston Texans', 'Kansas City Chiefs', 'Washington Football Team', 'Pittsburgh Steelers', 'Philadelphia Eagles', 'New England Patriots', 'Dallas Cowboys', 'Buffalo Bills', 'Atlanta Hawks'
]

const matchDays = ['Monday Night Football', 'Thursday Night Football', 'Sunday Night Football', 'Sunday Afternoon Football']

const outcomes = ['beat', 'loose to']

const selectRandom = array => {
    const randomPosition = Math.floor(Math.random() * array.length);
    return array[randomPosition];
}

const nflGamePrediction = () => {
    const firstTeam = selectRandom(nflTeams);
    let secondTeam = selectRandom(nflTeams);
    while (firstTeam === secondTeam) {
        secondTeam = selectRandom(nflTeams);
    }
    const gamePrediction = selectRandom(outcomes);
    const gameTime = selectRandom(matchDays);
    console.log(`The ${firstTeam} will ${gamePrediction} the ${secondTeam} on ${gameTime}.`)
}

nflGamePrediction();