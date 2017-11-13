package com.cleanslate.whiskeywisdom.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cleanslate.whiskeywisdom.dto.EpisodeDto;
import com.cleanslate.whiskeywisdom.entity.Episode;
import com.cleanslate.whiskeywisdom.mapper.EpisodeMapper;
import com.cleanslate.whiskeywisdom.repository.EpisodeRepository;

@Service
public class EpisodeService {

	private EpisodeRepository episodeRepo;
	private EpisodeMapper episodeMapper;

	public EpisodeService(EpisodeRepository episodeRepo, EpisodeMapper episodeMapper) {
		this.episodeRepo = episodeRepo;
		this.episodeMapper = episodeMapper;
	}
	
	public List<EpisodeDto> getAllEpisodesByActiveTrue() {
		return episodeMapper.toDtos(episodeRepo.findByActiveTrue());
	}
	
	public List<EpisodeDto> getAll() {
		return episodeMapper.toDtos(episodeRepo.findAll());
	}
	
	public EpisodeDto findById(long id) {
		return episodeMapper.toDto(episodeRepo.findById(id));
	}

	public EpisodeDto create(EpisodeDto episode) {
		Episode modifiedEpisode = episodeRepo.findById(episode.getId());
		if (modifiedEpisode != null) {
			if (modifiedEpisode.isActive() == false) {
				modifiedEpisode.setActive(episode.isActive());
				modifiedEpisode.setTitle(episode.getTitle());
				modifiedEpisode.setContent(episode.getContent());
				modifiedEpisode.setSoundCloudUrl(episode.getSoundCloudUrl());
				modifiedEpisode.setItunesUrl(episode.getItunesUrl());
				episodeRepo.save(modifiedEpisode);
			}
		} else {
			episodeRepo.save(episodeMapper.fromDto(episode));
		}
		return findById(episode.getId());
	}
	
}
