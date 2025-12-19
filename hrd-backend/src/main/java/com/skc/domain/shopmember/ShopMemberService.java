package com.skc.domain.shopmember;

import java.util.List;

// 서비스인터페이스: 기능정의
public interface ShopMemberService {
	List<ShopMember> getShopMemberList();

	int getShopMemberNextCustno();

	void addShopMember(ShopMember shopMember);
}
