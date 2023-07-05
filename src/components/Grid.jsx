export default function Grid({ puzzle }) {
	
	return (
		<form>
			<div className='aspect-square sm:h-80 bg-yellow-50 grid grid-cols-3 border-2 border-indigo-dark'>{puzzle.puzzle.map(region => (
				<div className='text-2xl grid grid-cols-3 border border-indigo-dark'>{region.map(cell => (
					cell == "" ? <input inputmode='none' className='text-center text-gray-orange bg-yellow-50 border border-indigo-dark focus:outline-none'/> : <div className="flex items-center justify-center border border-indigo-dark">{cell}</div>
				))}</div>
			))}</div>
			<div className="flex justify-center">
				<input 
					type="submit" 
					value="Submit"
					className="mt-2 p-2 pl-10 pr-10 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-700 rounded"
				/>
			</div>
		</form>
	)
}
