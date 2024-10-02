import './PunGenerator.scss';
import { useState, useEffect } from 'react';
import { getPuns } from '../../utils/openai.js';
import titleImg from '../../assets/Title.svg';

export default function PunGenerator() {
	const [punTopic, setPunTopic] = useState('');
	const [currentTopic, setCurrentTopic] = useState('');
	const [punsList, setPunsList] = useState('');
	const [requestSent, setRequestSent] = useState(false);

	const handleInputChange = (event) => {
		setPunTopic(event.target.value);
	};

	const requestPuns = () => {
		if (!requestSent) {
			return;
		}
		const fetchData = async () => {
			try {
				const result = await getPuns(currentTopic);
				setPunsList(result.data.content);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	};

	useEffect(() => {
		requestPuns();
	}, [currentTopic]);

	if (!punsList && requestSent) {
		return <p>Loading...</p>;
	}

	const handleButtonClick = () => {
		setRequestSent(true);
		setCurrentTopic(punTopic);
		setPunTopic('');
	};

	return (
		<section className='pun-generator'>
			<img
				src={titleImg}
				alt='Pun Intended'
			/>
            <h2 className='pun-generator__subtitle'>Enter a word</h2>
			<div className='pun-topic'>
				<input
					className='pun-topic__input'
					placeholder='Enter a topic for a pun'
					id='pun-topic'
					name='pun-topic'
					value={punTopic}
					onChange={handleInputChange}
				/>
				<button
                    className='pun-topic__button'
					id='submitButton'
					onClick={handleButtonClick}
				>
					Generate
				</button>
			</div>
			<p>Puns: {punsList}</p>
		</section>
	);
}
