import randomWord from 'random-words';
import { useReducer } from 'react';

const handleChangeWords = (prevWords, action) => {
	const newWords = [...prevWords];
	if (action === 'PUSH') {
		const newWord = randomWord();
		newWords.push(newWord);
		return newWords;
	}
	if (action === 'POP') {
		// ['foo', 'bar']
		newWords.pop();
		// ['foo']
		return newWords;
	}
}

function App() {
	const [words, changeWords] = useReducer(handleChangeWords, ['foo']);

  return (
    <div className='App'>
			<h3>{words}</h3>
			<button onClick={() => changeWords('PUSH')}>
				Add new word
			</button>
			<button onClick={() => changeWords('POP')}>
				Remove last word
			</button>
    </div>
  )
}

export default App
