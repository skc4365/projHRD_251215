package com.skc.domain.shopmember;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ShopMemberServiceImpl implements ShopMemberService {

	private final ShopMemberMapper shopMemberMapper;

	public ShopMemberServiceImpl(ShopMemberMapper shopMemberMapper) {
		this.shopMemberMapper = shopMemberMapper;
	}

	@Override
	public List<ShopMember> getShopMemberList() {
		return shopMemberMapper.getShopMemberList();
	}

	@Override
	public int getShopMemberNextCustno() {
		return shopMemberMapper.getShopMemberNextCustno();
	}

	@Override
	public void addShopMember(ShopMember shopMember) {
		shopMemberMapper.addShopMember(shopMember);
	}

	@Override
	public List<ShopSales> getShopSalesList() {
		return shopMemberMapper.getShopSalesList();
	}

}
