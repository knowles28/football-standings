import './TeamContainer.css';
import React, { useState, useEffect} from "react";
import TeamList from '../components/TeamList';
import TeamDetail from '../components/TeamDetail';
import FavouriteTeam from '../components/FavouriteTeam';
import SeasonSelector from '../components/SeasonSelect';


const TeamBox = () => {
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);
    // tried following instead of 'null' {selectedTeam: {"team": {name: null}}}

    const seasons = ['2022-2023 (Current)', '2021-2022', '2020-2021', '2019-2020', '2018-2019', '2017-2018', '2016-2017', '2015-2016', '2014-2015', '2013-2014', '2012-2013', '2011-2012', '2010-2011', '2009-2010', '2008-2009', '2007-2008', '2006-2007', '2005-2006', '2004-2005', '2003-2004', '2002-2003', '2001-2002'];
    const [selectedSeason, setSelectedSeason] = useState('2022-2023 (Current)');


    useEffect(() => {
        getTeams();
    }, [selectedSeason]);

    console.log(selectedTeam);

    const getTeams = () => {
        if (selectedSeason == "2022-2023 (Current)") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2022&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2021-2022") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2020-2021") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2019-2020") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2019&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2018-2019") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2018&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2017-2018") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2017&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2016-2017") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2016&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2015-2016") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2015&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2014-2015") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2014&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2013-2014") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2013&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2012-2013") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2012&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2011-2012") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2011&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2010-2011") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2010&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2009-2010") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2009&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2008-2009") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2008&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2007-2008") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2007&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2006-2007") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2006&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2005-2006") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2005&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2004-2005") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2004&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2003-2004") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2003&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2002-2003") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2002&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }
        else if (selectedSeason === "2001-2002") {
            fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2001&sort=asc')
            .then(res => res.json())
            .then(teams => setTeams(teams.data.standings))
        }

    };

    const onTeamClick = (newSelectedTeam) => {
        setSelectedTeam(newSelectedTeam)
    };

    const onSeasonSelected = (season) => {
        setSelectedSeason(season)
    };



    return (
        <div className='TeamBox'>
            <h1> This is the TeamContainer </h1>
            <SeasonSelector seasons={seasons} onSeasonSelected={onSeasonSelected} />

            <main>
                <div>
                    <TeamList teams={teams} selectedSeason={selectedSeason} onTeamClick={onTeamClick} />
                </div>
                <div>
                <TeamDetail selectedTeam={selectedTeam}/>
                </div>
            </main>
        </div>
    )
}



export default TeamBox;