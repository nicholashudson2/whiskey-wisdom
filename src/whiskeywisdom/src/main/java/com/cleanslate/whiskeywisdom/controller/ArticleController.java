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

import com.cleanslate.whiskeywisdom.dto.ArticleDto;
import com.cleanslate.whiskeywisdom.repository.ArticleRepository;
import com.cleanslate.whiskeywisdom.service.ArticleService;

@CrossOrigin
@RestController
@RequestMapping("article")
public class ArticleController {

	ArticleService articleService;
	ArticleRepository articleRepo;
	
	public ArticleController(ArticleService articleService, ArticleRepository articleRepo) {
		this.articleService = articleService;
		this.articleRepo = articleRepo;
	}
	
	
	// Update to check for valid access token. If valid, return all non-deleted posts. If invalid/null, return all active & non-deleted posts.
	@GetMapping("/all")
	public List<ArticleDto> getArticles() {
		return articleService.getAllArticlesByActiveTrue();
	}
	
//	@GetMapping("/admin")
//	public List<ArticleDto> adminGetArticles() {
//		return articleService.getAll();
//	}
	
//	@GetMapping("/@{id}")
//	public ArticleDto findById(@PathVariable long id) {
//		return articleService.findById(id);
//	}

	@PostMapping("/new")
	public ArticleDto create(@RequestBody ArticleDto article) {
		return articleService.create(article);
	}
	
	@PatchMapping("/@{id}")
	public ArticleDto update(@PathVariable long id, @RequestBody ArticleDto article) {
		articleService.create(article);
		return articleService.findById(article.getId());
	}
	
	// TODO: DeleteMapping to toggle deleted to true.
	
	// TODO: DeleteMapping to toggle active to false.
}
