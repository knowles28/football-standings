import './TeamDetail.css';
import React from "react";


const TeamDetail = ({selectedTeam}) => {

    console.log({selectedTeam});



    return (
        <>
        <div className="selected-team">
        <h2> Selected Team Information:</h2>
        <p>Click on a team to find out more information about them.</p>

        {/* <h4>{selectedTeam.team.name}</h4> */}


        </div>
        </>
    )
}

export default TeamDetail;