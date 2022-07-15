package com.example.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Team;
import com.example.repository.MatchRepository;
import com.example.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {


    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository){
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){

        //PageRequest helps you to limit the pages of display. In this case it limits to 4 pages
        
        Team team =  this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.findLatestMtchesByTeam(teamName,4));
        return team;
    }
}
