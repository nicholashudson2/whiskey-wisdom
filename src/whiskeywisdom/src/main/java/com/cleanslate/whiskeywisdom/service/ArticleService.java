package com.cleanslate.whiskeywisdom.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cleanslate.whiskeywisdom.dto.ArticleDto;
import com.cleanslate.whiskeywisdom.entity.Article;
import com.cleanslate.whiskeywisdom.mapper.ArticleMapper;
import com.cleanslate.whiskeywisdom.repository.ArticleRepository;

@Service
public class ArticleService {

	private ArticleRepository articleRepo;
	private ArticleMapper articleMapper;

	public ArticleService(ArticleRepository articleRepo, ArticleMapper articleMapper) {
		this.articleRepo = articleRepo;
		this.articleMapper = articleMapper;
	}
	
	public List<ArticleDto> getAllArticlesByActiveTrue() {
		return articleMapper.toDtos(articleRepo.findAllByActiveTrue());
	}
	
	public List<ArticleDto> getAll() {
		return articleMapper.toDtos(articleRepo.findAll());
	}
	
	public ArticleDto findById(long id) {
		return articleMapper.toDto(articleRepo.findById(id));
	}

	public ArticleDto create(ArticleDto article) {
		Article modifiedArticle = articleRepo.findById(article.getId());
		if (modifiedArticle != null) {
			if (modifiedArticle.isActive() == false) {
				modifiedArticle.setActive(article.isActive());
				modifiedArticle.setTitle(article.getTitle());
				modifiedArticle.setContent(article.getContent());
				modifiedArticle.setSoundCloudUrl(article.getSoundCloudUrl());
				modifiedArticle.setItunesUrl(article.getItunesUrl());
				articleRepo.save(modifiedArticle);
			}
		} else {
			articleRepo.save(articleMapper.fromDto(article));
		}
		return findById(article.getId());
	}
	
}
