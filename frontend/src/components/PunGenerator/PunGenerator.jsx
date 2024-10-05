import './PunGenerator.scss';
import { useState } from 'react';

import titleImg from '../../assets/Title.svg';
import Pun from '../Pun/Pun.jsx';

export default function PunGenerator() {
	const [punTopic, setPunTopic] = useState('');
	const [currentTopic, setCurrentTopic] = useState('');
	const [requestSent, setRequestSent] = useState(false);

	const handleInputChange = (event) => {
		setPunTopic(event.target.value);
	};

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
            <h2 className='pun-generator__subtitle'>Enter A Word</h2>
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
            {<Pun currentTopic={currentTopic} requestSent={requestSent}/>}
		</section>
	);
}
