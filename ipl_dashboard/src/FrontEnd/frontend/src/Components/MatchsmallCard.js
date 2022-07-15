import { React } from 'react';
import { Link } from 'react-router-dom';
export const MatchsmallCard= ({match, teamName}) => {
    const otherTeam = match.team1 === teamName? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    if(!match) return null;
  return (
    <div className="MatchsmallCard">
     <h3>vs<Link to={otherTeamRoute}>{otherTeam}</Link></h3>
     <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}
