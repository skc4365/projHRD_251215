package com.skc.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@GetMapping
	public String adminPage() {
		return "관리자 페이지 - ADMIN 로그인 됨.";
	}

	@GetMapping("/users")
	public String getUsers() {
		return "사용자 목록 조회";
	}

	@GetMapping("/users/{id}")
	public String getUser(@PathVariable Long id) {
		return "사용자 상세 조회: " + id;
	}

	@PostMapping("/users")
	public String createUser() {
		return "사용자 생성 완료";
	}

	@PutMapping("/users/{id}")
	public String updateUser(@PathVariable Long id) {
		return "사용자 수정 완료: " + id;
	}

	@DeleteMapping("/users/{id}")
	public String deleteUser(@PathVariable Long id) {
		return "사용자 삭제 완료: " + id;
	}
}
