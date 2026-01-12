package com.skc.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicController {

	@GetMapping("/")
	public String home() {
		return "홈 페이지 - 전체 공개";
	}

	@GetMapping("/public")
	public String publicPage() {
		return "퍼블릭 페이지 - 전체 공개";
	}
}