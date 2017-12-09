package com.cleanslate.whiskeywisdom.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "Article")
public class Article {

    @Transient
    java.util.Date today = new java.util.Date();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private boolean deleted;

    private boolean active;

    private String author;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private final Timestamp posted = new java.sql.Timestamp(today.getTime());

    private String title;

    @Column(columnDefinition="TEXT")
    private String content;

    public Article() {
        super();
    }

    public Article(Date today, boolean deleted, boolean active, String author, String title, String content) {
        super();
        this.today = today;
        this.deleted = deleted;
        this.active = active;
        this.author = author;
        this.title = title;
        this.content = content;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Timestamp getPosted() {
        return posted;
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
