import './Pun.scss';
import { useState, useEffect } from 'react';
import { getPuns, getGif } from '../../utils/openai.js';

export default function Pun({ currentTopic, requestSent, generate, setPuns, puns }) {
	const [pun, setPun] = useState('');
	const [gifUrl, setGifUrl] = useState('');

	const requestPuns = () => {
		if (!requestSent) {
			return;
		}
		const fetchData = async () => {
			try {
				const result = await getPuns(currentTopic);
				if(puns.length>=5){
					puns.pop();
				}
				setPuns([pun, ...puns]);
				setPun(result.data.content);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	};

	const requestGif = () => {
		if (!requestSent) {
			return;
		}
		const fetchData = async () => {
			try {
				const result = await getGif(currentTopic);
				setGifUrl(result.data.data.images.original.url);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	};

	useEffect(() => {
		requestPuns();
		requestGif();
	}, [currentTopic, requestSent, generate]);

	if ((!pun || !gifUrl) && requestSent) {
		return <p>Loading...</p>;
	}

	return (
		<div className='pun'>
			<p className='pun__text'>{pun}</p>
			<img
				className='pun__gif'
				src={gifUrl}
				alt=''
			/>
		</div>
	);
}
