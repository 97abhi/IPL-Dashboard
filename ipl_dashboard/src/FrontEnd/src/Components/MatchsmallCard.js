import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss';
export const MatchsmallCard= ({match, teamName}) => {
    const otherTeam = match.team1 === teamName? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;
    if(!match) return null;
  return (
    <div className={isMatchWon? 'MatchSmallCard won-card': 'MatchSmallCard lost-card'}>
     
     <div className='vs'>vs</div>
     <h3><Link to={otherTeamRoute}>{otherTeam}</Link></h3>
     <p className='match-result'>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}
