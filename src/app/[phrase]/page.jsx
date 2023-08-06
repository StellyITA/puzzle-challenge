import FacebookLandingPage from '../../components/FacebookLandingPage.jsx'

export default function Phrase({ params }) {

	const img = params.phrase.match("Sudoku") ? "sudoku" : params.phrase.match("crack") && params.phrase.match("code") ? "crack-the-code" : "";

	return (
		<>
			<meta 
				property='og:image' 
				content={`https://puzzle-challenge.vercel.app/images/${img}.png`}
				/>
			<meta 
				property='og:description' 
				content={params.phrase.replaceAll("%20"," ") + "?"}
			/>
			<FacebookLandingPage/>
		</>
	)
}
