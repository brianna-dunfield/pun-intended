import './RecentSearches.scss';
import Box from '../Box/Box.jsx';

export default function RecentSearches({ searches }) {
	return (
		<aside className='recent-searches'>
			<h3>Past Searches</h3>
            {searches.map((search)=>{
                return <Box text={search}/>
            })}
		</aside>
	);
}
