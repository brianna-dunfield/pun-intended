import './Home.scss';
import PunGenerator from '../../components/PunGenerator/PunGenerator.jsx';
import RecentPuns from '../../components/RecentPuns/RecentPuns.jsx';
import RecentSearches from '../../components/RecentSearches/RecentSearches.jsx';
import {useState, useEffect} from 'react';

export default function Home() {
    const [puns, setPuns] = useState([]);
    const [searches, setSearches] = useState([]);
	return <main className='home'>
        <RecentPuns puns={puns}/>
        <PunGenerator setPuns={setPuns} setSearches={setSearches} puns={puns} searches={searches}/>
        <RecentSearches searches={searches}/>
    </main>;
}
