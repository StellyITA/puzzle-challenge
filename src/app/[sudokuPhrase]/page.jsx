import FacebookLandingPage from '../../components/FacebookLandingPage.jsx'

export default function SudokuPhrase({ params }) {
	return (
		<>
			<meta 
				property='og:image' 
				content='https://puzzle-challenge.vercel.app/images/sudoku.png'
				/>
			<meta 
				property='og:description' 
				content={params.sudokuPhrase.replaceAll("%20"," ") + "?"}
			/>
			<FacebookLandingPage/>
		</>
	)
}
