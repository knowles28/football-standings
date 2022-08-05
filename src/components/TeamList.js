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
            <p>TEAM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INFO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Win &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Loss&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Draw &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Conceeded &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; POINTS</p>
            {teamsItems}
        </div>
    )
}

export default TeamList;