package com.example.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{
    
    Team findByTeamName(String teamName); 
}
