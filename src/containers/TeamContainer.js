import './TeamContainer.css';
import React, { useState, useEffect} from "react";
import TeamList from '../components/TeamList';
import TeamDetail from '../components/TeamDetail';
import FavouriteTeam from '../components/FavouriteTeam';


const TeamBox = () => {
    const [teams, setTeams] = useState([]);


    useEffect(() => {
        getTeams();
    }, [])

    const getTeams = () => {
        fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc')
        .then(res => res.json())
        .then(teams => setTeams(teams.data.standings))
    }


    return (
        <div className='TeamBox'>
            <h1> This is the TeamContainer </h1>
            <main>
                <div>
                    <TeamList teams={teams} />
                </div>
                <div>
                <FavouriteTeam />
                <TeamDetail />
                </div>
            </main>
        </div>
    )
}



export default TeamBox;