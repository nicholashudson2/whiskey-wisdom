package com.cleanslate.whiskeywisdom.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.cleanslate.whiskeywisdom.dto.ArticleDto;
import com.cleanslate.whiskeywisdom.entity.Article;

@Mapper(componentModel="spring")
public interface ArticleMapper {

	Article fromDto(ArticleDto dto);
	
	ArticleDto toDto(Article article);
	
	List<Article> fromDtos(List<ArticleDto> dtos);
	
	List<ArticleDto> toDtos(List<Article> articles);
	
}
