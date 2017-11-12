package com.cleanslate.whiskeywisdom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cleanslate.whiskeywisdom.entity.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser, Long>	 {

	public AppUser findByUsername(String username);
	
}
