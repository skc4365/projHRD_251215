package com.skc.api;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skc.domain.bookmanager.BookManagerDTO;
import com.skc.domain.bookmanager.BookManagerService;

//import com.skc.domain.bookmanager.BookManagerService;

@RestController
@RequestMapping("/api/bookmanager")
public class BookManagerController {

	private final BookManagerService bookManagerService;

	public BookManagerController(BookManagerService bookManagerService) {
		this.bookManagerService = bookManagerService;
	}

	@GetMapping
	public ResponseEntity<Map<String, String>> getBookManager() {
		return ResponseEntity.ok(Map.of("title", "도서관리 메인"));
	}

//	홈으로
	@GetMapping("/home")
	public String getBookManagerHome() {
		return "redirect:/api/bookmanager";
	}

//	도서관리 화면-[다음회원번호]회원등록
	@GetMapping("/view-add")
	public Map<String, Integer> getBookManagerViewAdd() {
		int nextCustno = bookManagerService.getBookManagerNextCustno();
		return Map.of("nextCustno", nextCustno);
	}

//	도서관리 로직-회원등록
	@PostMapping("/add")
	public ResponseEntity<Map<String, String>> addBookManager(@RequestBody BookManagerDTO dto) {
		bookManagerService.addBookManager(dto);
		return ResponseEntity.ok(Map.of("message", "회원등록이 완료되었습니다."));
	}
	
//	회원대여 현황
//	@GetMapping("/rent")
//	public String getMethodName(@RequestParam String param) {
//		return new String();
//	}
	

//	도서관리 회원목록조회/수정
	@GetMapping("/list")
	public String getMethodName(@RequestParam String param) {
		return new String();
	}

}
