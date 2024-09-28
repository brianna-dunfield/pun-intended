import './Home.scss';
import { getPuns } from '../../utils/openai.js';
import { useState, useEffect } from 'react';

export default function Home() {
	const [punTopic, setPunTopic] = useState('');
	const [currentTopic, setCurrentTopic] = useState('');
    const [punsList, setPunsList] = useState('');
    const [requestSent, setRequestSent] = useState(false)

	const handleInputChange = (event) => {
		setPunTopic(event.target.value);
	};

    const requestPuns = () =>{
        if(!requestSent){
            return;
        }
        const fetchData = async() =>{
            try{
                const result = await getPuns(currentTopic);
                setPunsList(result.data.content);
            }catch (error){
                console.error(error);
            }
        }
        fetchData();
    }

    useEffect(()=>{
        requestPuns();
    }, [currentTopic])

    if(!punsList&&requestSent){
        return <p>Loading...</p>
    }

    const handleButtonClick = () => {
        setRequestSent(true);
        setCurrentTopic(punTopic);
        setPunTopic('');
    }

	return (
		<main className='home'>
			<h1>PUN INTENDED</h1>
			<div>
				<input
					className='pun-topic'
					placeholder='Enter a topic for a pun'
					id='pun-topic'
					name='pun-topic'
					value={punTopic}
					onChange={handleInputChange}
				/>
				<button id='submitButton' onClick={handleButtonClick}>Generate</button>
			</div>
			<p>Puns: {punsList}</p>
		</main>
	);
}
