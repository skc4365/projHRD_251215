package com.skc.api.shopmember;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skc.domain.shopmember.ShopMember;
import com.skc.domain.shopmember.ShopMemberDTO;
import com.skc.domain.shopmember.ShopMemberService;
import com.skc.domain.shopmember.ShopSales;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/shopmember")
public class ShopMemberController {

	private final ShopMemberService shopMemberService;

	public ShopMemberController(ShopMemberService shopMemberService) {
		this.shopMemberService = shopMemberService;
	}

//	홈쇼핑 메인
	@GetMapping
	public String getShopMember() {
		return "홈쇼핑 메인";
	}

//	홈쇼핑 화면-[다음회원번호]회원등록 
	@GetMapping("/view-add")
	public Map<String, Integer> getShopMemberViewAdd() {
		int nextCustno = shopMemberService.getShopMemberNextCustno();
		return Map.of("nextCustno", nextCustno);
	}

//	홈쇼핑 로직-회원등록 
	@PostMapping("/add")
	public ResponseEntity<Map<String, String>> addShopMember(@Valid @RequestBody ShopMemberDTO dto) {
		shopMemberService.addShopMember(dto);
		return ResponseEntity.ok(Map.of("message", "회원등록이 완료되었습니다."));
	}

//	홈쇼핑 회원목록조회/수정
	@GetMapping("/list")
	public List<ShopMember> getShopMemberList() {
		return shopMemberService.getShopMemberList();
	}
	
//	회원 삭제
	@DeleteMapping("/delete")
	public ResponseEntity<Map<String, String>> deleteShopMember(@RequestBody Map<String, Integer> map) {
		int custno = map.get("custno");
		shopMemberService.deleteShopMember(custno);
		return ResponseEntity.ok(Map.of("message", "회원삭제가 완료되었습니다."));
	}

//	회원매출조회
	@GetMapping("/sales")
	public List<ShopSales> getShopMemberSales() {
		return shopMemberService.getShopSalesList();
	}

//	홈으로
	@GetMapping("/home")
	public String getShoppingMemberHome() {
		return "redirect:/api/shopMember";
	}

}
