import './TeamDetail.css';
import React from "react";


const TeamDetail = ({selectedTeam}) => {

    console.log({selectedTeam});

    if (selectedTeam == null) {
        return (
            <>
        <div className="selected-team">
        <h2> Selected Team Information:</h2>

        <h3>No team selected!</h3>
        <p>Click on a team to see more information!</p>

        </div>
        </>
        )
    }
    else 
    return (
        <>
        <div className="selected-team">
        <h2> Selected Team Information:</h2>
            <div className='team-layout'>
                <div>
                    <h3> Team Name: {selectedTeam.team.name}</h3>
                    <p>League Position: {selectedTeam.stats[8].displayValue}</p>
                    <p>Goal Difference: {selectedTeam.stats[9].displayValue}</p>
                    <p>Total Points: {selectedTeam.stats[6].displayValue}</p>

                    <p>Wins: {selectedTeam.stats[0].displayValue}</p>
                    <p>Draws: {selectedTeam.stats[2].displayValue}</p>
                    <p>Losses: {selectedTeam.stats[1].displayValue}</p>
                </div>
                <div>
                    <img className='club-badge' src={selectedTeam.team.logos[0].href}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default TeamDetail;