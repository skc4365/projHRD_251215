package com.skc.api.shopmember;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skc.domain.shopmember.ShopMember;
import com.skc.domain.shopmember.ShopMemberService;

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
	@GetMapping("/add")
	public Map<String, Integer> getShopMemberAdd() {
		int nextCustno = shopMemberService.getShopMemberNextCustno();
		return Map.of("nextCustno", nextCustno);
	}

//	홈쇼핑 로직-회원등록 
	@PostMapping("/add")
	public Map<String, String> addShopMember(@RequestBody ShopMember shopMember) {
		shopMemberService.addShopMember(shopMember);
		return Map.of("message", "회원등록이 완료되었습니다.");
	}

//	홈쇼핑 회원목록조회/수정
	@GetMapping("/list")
	public List<ShopMember> getShopMemberList() {
        return shopMemberService.getShopMemberList();
    }
//	회원매출조회
	@GetMapping("/sales")
	public String getShopMemberSales() {
		return "shopMemberSales";
	}

//	홈으로
	@GetMapping("/home")
	public String getShoppingMemberHome() {
		return "redirect:/api/shopMember";
	}
	

	
}




