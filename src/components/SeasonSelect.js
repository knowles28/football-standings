import React from "react";

const SeasonSelector  = ({seasons, onSeasonSelected}) => {

    const handleChange = (event) => {
        const chosenSeason = seasons[event.target.value];
        onSeasonSelected(chosenSeason);
    }

    const seasonOptions = seasons.map((season, index) => {
        return <option value={index} key={index}>{season}</option>
    })
    

    return (
        <>
        <h3>This is SeasonSelector</h3>
        <select defaultValue="2022-2023 (Current)" onChange={handleChange}>
            {seasonOptions}
        </select>

        </>
    )
    
}

export default SeasonSelector;