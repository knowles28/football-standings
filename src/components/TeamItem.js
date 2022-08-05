import React from "react";

const TeamItem = ({team}) => {

    // console.log(team.note.rank);
    return (
        <>
        <ol>
            {team.stats[8].displayValue}  {team.team.name}
        </ol>
        </>
    )
}

export default TeamItem;