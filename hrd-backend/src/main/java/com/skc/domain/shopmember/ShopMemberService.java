package com.skc.domain.shopmember;

import java.util.List;

import jakarta.validation.Valid;

// 서비스인터페이스: 기능정의

///** 기능정의 
// * 회원리스트 
// * 회원추가
// * 회원별 판매합계
// */

public interface ShopMemberService {

	List<ShopMember> getShopMemberList();

	int getShopMemberNextCustno();

	void addShopMember(@Valid ShopMemberDTO dto);

	List<ShopSales> getShopSalesList();

	void deleteShopMember(int custno);

	void updateShopMember(@Valid ShopMemberDTO dto);

	

}
