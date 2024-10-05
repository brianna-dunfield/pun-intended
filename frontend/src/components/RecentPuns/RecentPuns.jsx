import './RecentPuns.scss';
import Box from '../Box/Box.jsx';

export default function RecentPuns({ puns }) {
	return (
		<aside className='recent-puns'>
			<h3>Past Puns</h3>
			{puns
				? puns.map((pun, index) => {
						return (
							<Box
								text={pun}
								key={index}
							/>
						);
				})
				: null}
		</aside>
	);
}
