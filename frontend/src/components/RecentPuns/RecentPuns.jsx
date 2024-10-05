import './RecentPuns.scss';
import Box from '../Box/Box.jsx';

export default function RecentPuns({ puns }) {
	return (
		<aside className='recent-puns'>
			<h3>Past Puns</h3>
            {puns.map((pun)=>{
                return <Box text={pun}/>
            })}
		</aside>
	);
}
