package com.skc.domain.shopmember;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

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

//	@Override
//	public void addShopMember(ShopMember shopMember) {
//		shopMemberMapper.addShopMember(shopMember);
//	}
	@Override
	public void addShopMember(@Valid ShopMemberDTO dto) {
		shopMemberMapper.addShopMember(dto);
	}

	@Override
	public List<ShopSales> getShopSalesList() {
		return shopMemberMapper.getShopSalesList();
	}

	@Override
	public void deleteShopMember(int custno) {
		shopMemberMapper.deleteShopMember(custno);
	}

	@Override
	public void updateShopMember(@Valid ShopMemberDTO dto) {
		shopMemberMapper.updateShopMember(dto);
	}



}
