package com.cleanslate.whiskeywisdom.dto;

public class EpisodeDto {

	private long id;
	
	private boolean active;

	private String title;
	
	private String content;
	
	private String soundCloudUrl;
	
	private String itunesUrl;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getSoundCloudUrl() {
		return soundCloudUrl;
	}

	public void setSoundCloudUrl(String soundCloudUrl) {
		this.soundCloudUrl = soundCloudUrl;
	}

	public String getItunesUrl() {
		return itunesUrl;
	}

	public void setItunesUrl(String itunesUrl) {
		this.itunesUrl = itunesUrl;
	}
	
	
}
