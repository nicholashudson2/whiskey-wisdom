package com.cleanslate.whiskeywisdom.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cleanslate.whiskeywisdom.entity.Episode;

@Repository
public interface EpisodeRepository extends JpaRepository<Episode, Integer> {

	public List<Episode> findByActiveTrue();
	
	public List<Episode> findAll();
	
	public Episode findById(long id);

}
