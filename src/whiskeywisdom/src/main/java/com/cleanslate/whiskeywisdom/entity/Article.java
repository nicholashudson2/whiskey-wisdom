package com.cleanslate.whiskeywisdom.entity;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "Article")
public class Article {
	
	@Transient
	java.util.Date today = new java.util.Date();

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;

	private boolean deleted;

	private boolean active;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private final Timestamp posted = new java.sql.Timestamp(today.getTime());

	private String content;

	public Article(Date today, boolean deleted, boolean active, String content) {
		this.today = today;
		this.deleted = deleted;
		this.active = active;
		this.content = content;
	}

	public Article() {

	}

	public Date getToday() {
		return today;
	}

	public void setToday(Date today) {
		this.today = today;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Timestamp getPosted() {
		return posted;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Article article = (Article) o;
		return id == article.id;
	}

	@Override
	public int hashCode() {

		return Objects.hash(id);
	}
}
