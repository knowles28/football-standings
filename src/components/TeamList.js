import './TeamList.css';
import React from "react";
import TeamItem from "./TeamItem";

const TeamList = ({teams}) => {

    const teamsItems = teams.map((team, index) => {
        return <TeamItem team={team} key={index}/>
    })

    return (
        <div className="TeamList">
            <h2> This is the TeamList</h2>
            <table>
                <thead>
                    <tr>
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