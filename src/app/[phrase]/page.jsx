import FacebookLandingPage from '../../components/FacebookLandingPage.jsx'

export default function Phrase({ params }) {
	const gameData = params.phrase.split("%2C");
	const difficulty = gameData[1];
	let minutes;
	let seconds;
	let attempts;
	
	if (gameData[0] == "crack-the-code" 
		&& parseInt(gameData[2]) 
		&& parseInt(gameData[2]) < 10) {
		attempts = gameData[2]
	} else if (gameData[0] == "sudoku" 
		&& parseInt(gameData[2]) 
		&& parseInt(gameData[3])) {
		minutes = gameData[2]
		seconds = gameData[3];
	}
	
	const img = params.phrase.match("sudoku") ? "sudoku" : params.phrase.match("crack-the-code") ? "crack-the-code" : "";
	const sudokuPhrase = `I completed a${difficulty == "Easy" || difficulty == "Expert" ? "n" : ""} ${difficulty} Sudoku in ${minutes} minute${minutes != 1 ? "s" : ""} and ${seconds} second${seconds != 1 ? "s" : ""}! Can you do better?`;
	const ctcPhrase = `I cracked a${difficulty == "Easy" || difficulty == "Expert" ? "n" : ""} ${difficulty} code in ${difficulty == "Easy" ? 7 - attempts : difficulty == "Medium" ? 8 - attempts : difficulty == "Hard" ? 9 - attempts : 10 - attempts} attempts! Can you do better?`;
	const sharePhrase = gameData[0] == "crack-the-code" ? ctcPhrase : gameData[0] == "sudoku" ? sudokuPhrase : "";
	
	return (
		<>
			<meta 
				property='og:image' 
				content={`https://puzzle-challenge.vercel.app/images/${img}.png`}
				/>
			<meta 
				property='og:description' 
				content={sharePhrase}
			/>
			<FacebookLandingPage/>
		</>
	)
}
