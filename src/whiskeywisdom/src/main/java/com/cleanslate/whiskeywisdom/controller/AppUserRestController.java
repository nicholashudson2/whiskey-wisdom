package com.cleanslate.whiskeywisdom.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cleanslate.whiskeywisdom.entity.AppUser;
import com.cleanslate.whiskeywisdom.repository.AppUserRepository;

@RestController
@RequestMapping(value = "admin")
@CrossOrigin
public class AppUserRestController {

	private AppUserRepository appUserRepository;
	
	public AppUserRestController(AppUserRepository appUserRepository) {
		this.appUserRepository = appUserRepository;
	}
 
	/**
	 * Web service for getting all the appUsers in the application.
	 * 
	 * @return list of all AppUser
	 */
//	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/users")
	public List<AppUser> users() {
		return appUserRepository.findAll();
	}
 
	/**
	 * Web service for getting a user by his ID
	 * 
	 * @param id
	 *            appUser ID
	 * @return appUser
	 */
//	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/users/{id}")
	public ResponseEntity<AppUser> userById(@PathVariable Long id) {
		AppUser appUser = appUserRepository.findOne(id);
		if (appUser == null) {
			return new ResponseEntity<AppUser>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<AppUser>(appUser, HttpStatus.OK);
		}
	}
 
	/**
	 * Method for deleting a user by his ID
	 * 
	 * @param id
	 * @return
	 */
//	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@DeleteMapping("/users/{id}")
	public ResponseEntity<AppUser> deleteUser(@PathVariable Long id) {
		AppUser appUser = appUserRepository.findOne(id);
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String loggedUsername = auth.getName();
		if (appUser == null) {
			return new ResponseEntity<AppUser>(HttpStatus.NO_CONTENT);
		} else if (appUser.getUsername().equalsIgnoreCase(loggedUsername)) {
			throw new RuntimeException("You cannot delete your account");
		} else {
			appUserRepository.delete(appUser);
			return new ResponseEntity<AppUser>(appUser, HttpStatus.OK);
		}
	}
 
	/**
	 * Method for adding a appUser
	 * 
	 * @param appUser
	 * @return
	 */
//	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public ResponseEntity<AppUser> createUser(@RequestBody AppUser appUser) {
		if (appUserRepository.findByUsername(appUser.getUsername()) != null) {
			throw new RuntimeException("Username already exist");
		}
		return new ResponseEntity<AppUser>(appUserRepository.save(appUser), HttpStatus.CREATED);
	}
 
	/**
	 * Method for editing an user details
	 * 
	 * @param appUser
	 * @return modified appUser
	 */
//	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@RequestMapping(value = "/users", method = RequestMethod.PUT)
	public AppUser updateUser(@RequestBody AppUser appUser) {
		if (appUserRepository.findByUsername(appUser.getUsername()) != null
				&& appUserRepository.findByUsername(appUser.getUsername()).getId() != appUser.getId()) {
			throw new RuntimeException("Username already exist");
		}
		return appUserRepository.save(appUser);
	}
	
}
