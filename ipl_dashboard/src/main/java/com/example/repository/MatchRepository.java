package com.example.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;

import com.example.model.Match;


public interface MatchRepository extends CrudRepository<Match,Long>{
    List<Match> getByTeam1OrTeam2OrderByDateDesc (String teamName1, String teamName2, PageRequest pageable);
    default List<Match> findLatestMtchesByTeam(String teamName, int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
        
    }
}
