package com.cleanslate.whiskeywisdom.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.cleanslate.whiskeywisdom.dto.EpisodeDto;
import com.cleanslate.whiskeywisdom.entity.Episode;

@Mapper(componentModel="spring")
public interface EpisodeMapper {

	Episode fromDto(EpisodeDto dto);
	
	EpisodeDto toDto(Episode episode);
	
	List<Episode> fromDtos(List<EpisodeDto> dtos);
	
	List<EpisodeDto> toDtos(List<Episode> episodes);
	
}
