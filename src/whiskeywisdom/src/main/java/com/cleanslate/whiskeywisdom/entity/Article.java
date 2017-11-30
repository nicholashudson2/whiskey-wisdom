package com.cleanslate.whiskeywisdom.entity;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Episode")
public class Episode {
	
	@Transient
	java.util.Date today = new java.util.Date();

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	private boolean active;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private final Timestamp posted = new java.sql.Timestamp(today.getTime());

	private String title;
	
	private String content;
	
	private String soundCloudUrl;
	
	private String itunesUrl;

	public Episode(Date today, long id, boolean active, String title, String content, String soundCloudUrl,
			String itunesUrl) {
		super();
		this.today = today;
		this.id = id;
		this.active = active;
		this.title = title;
		this.content = content;
		this.soundCloudUrl = soundCloudUrl;
		this.itunesUrl = itunesUrl;
	}

	public Episode() {
		super();
	}

	public java.util.Date getToday() {
		return today;
	}

	public void setToday(java.util.Date today) {
		this.today = today;
	}

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

	public Timestamp getPosted() {
		return posted;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Episode other = (Episode) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
}
