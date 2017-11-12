package com.cleanslate.whiskeywisdom.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cleanslate.whiskeywisdom.dto.EpisodeDto;
import com.cleanslate.whiskeywisdom.repository.EpisodeRepository;
import com.cleanslate.whiskeywisdom.service.EpisodeService;

@RestController
@RequestMapping("episode")
@CrossOrigin
public class EpisodeController {

	EpisodeService episodeService;
	EpisodeRepository episodeRepo;
	
	public EpisodeController(EpisodeService episodeService, EpisodeRepository episodeRepo) {
		this.episodeService = episodeService;
		this.episodeRepo = episodeRepo;
	}
	
	@GetMapping("/all")
	public List<EpisodeDto> getEpisodes() {
		return episodeService.getAllEpisodesByActiveTrue();
	}
	
	@GetMapping("/admin")
	public List<EpisodeDto> adminGetEpisodes() {
		return episodeService.getAll();
	}
	
	@GetMapping("/@{id}")
	public EpisodeDto findById(@PathVariable long id) {
		return episodeService.findById(id);
	}
	
	@PostMapping("/new")
	public EpisodeDto create(@RequestBody EpisodeDto episode) {
		episodeService.create(episode);
		return episodeService.findById(episode.getId());
	}
	
	@PatchMapping("/@{id}")
	public EpisodeDto update(@PathVariable long id, @RequestBody EpisodeDto episode) {
		episodeService.create(episode);
		return episodeService.findById(episode.getId());
	}
}
