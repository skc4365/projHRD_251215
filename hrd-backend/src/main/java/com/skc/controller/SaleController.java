package com.skc.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sale")
public class SaleController {

	@GetMapping
	public String getSales() {
		return "판매 목록 조회";
	}

	@GetMapping("/{id}")
	public String getSale(@PathVariable Long id) {
		return "판매 상세 조회: " + id;
	}

	@PostMapping
	public String createSale() {
		return "판매 등록 완료";
	}

	@PutMapping("/{id}")
	public String updateSale(@PathVariable Long id) {
		return "판매 수정 완료: " + id;
	}

	@DeleteMapping("/{id}")
	public String deleteSale(@PathVariable Long id) {
		return "판매 삭제 완료: " + id;
	}
}
