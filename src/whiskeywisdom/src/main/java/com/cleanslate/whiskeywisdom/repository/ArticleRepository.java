package com.cleanslate.whiskeywisdom.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cleanslate.whiskeywisdom.entity.Article;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer> {

	public List<Article> findAllByActiveTrue();
	
	public List<Article> findAll();
	
	public Article findById(long id);

}
