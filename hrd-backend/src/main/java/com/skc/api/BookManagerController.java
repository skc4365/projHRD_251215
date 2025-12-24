package com.skc.api;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skc.domain.bookmanager.BookManagerService;


@RestController
@RequestMapping("/api/bookmanager")
public class BookManagerController {
	
//	private final BookManagerService bookManagerService;
//	
//	public BookManagerController(BookManagerService bookManagerService) {
//		this.bookManagerService = bookManagerService;
//	}
	
	@GetMapping
	public ResponseEntity<Map<String, String>> getBookManager() {
		return ResponseEntity.ok(Map.of("title", "도서관리"));
	}
		
	
	
	
	

}
