import React from "react";

const TeamItem = ({team, onTeamClick}) => {

    const handleClick = function(){
        onTeamClick(team)
    }
    return (
        <>
        <tr className="team-link">
            <td>{team.stats[8].displayValue}</td>
            <td onClick={handleClick}>{team.team.name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{team.stats[0].displayValue}</td>
            <td>{team.stats[2].displayValue}</td>
            <td>{team.stats[1].displayValue}</td>
            <td>{team.stats[4].displayValue}</td>
            <td>{team.stats[5].displayValue}</td>
            <td>{team.stats[9].displayValue}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{team.stats[3].displayValue}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{team.stats[6].displayValue}</td>
        </tr>
 
        </>
    )
}

export default TeamItem;

