package com.skc.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

	@GetMapping
	public String userPage() {
		return "사용자 페이지 - user로그인 됨.";
	}

	@GetMapping("/profile")
	public String profile() {
		return "사용자 프로필";
	}
}
