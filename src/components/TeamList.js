import './TeamList.css';
import React from "react";
import TeamItem from "./TeamItem";

const TeamList = ({teams, selectedSeason, onTeamClick}) => {

    const teamsItems = teams.map((team, index) => {
        return <TeamItem team={team} key={index} value={index} onTeamClick={onTeamClick}/>
    })

    return (
        <div className="TeamList">
            <h2> This is the TeamList</h2>
            <h3>Selected Season: {selectedSeason}</h3>
            <table>
                <thead>
                    <tr className='header'>
                        <th>#</th>
                        <th>Team</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>Played</th>
                        <th>Points</th>
                    </tr>
                </thead>
                {teamsItems} 
            </table>
        </div>
    )
}

export default TeamList;