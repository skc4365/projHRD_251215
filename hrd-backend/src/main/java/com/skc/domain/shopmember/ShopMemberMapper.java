package com.skc.domain.shopmember;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ShopMemberMapper {
	
	@Select("""
		    SELECT IFNULL(MAX(custno), 0)+1 AS next_custno 
		    FROM shop_member
		""")
	int getShopMemberNextCustno();
	
	@Insert("""
			INSERT INTO shop_member (custno, custname, phone, address, joindate, grade, city)
			VALUES (#{custno}, #{custname}, #{phone}, #{address}, #{joindate}, #{grade}, #{city})
		""")
	void addShopMember(ShopMember shopMember);

	@Select("""
			    SELECT custno, custname, phone, address, joindate, 
						CASE grade
							WHEN 'A' THEN 'VIP'
							WHEN 'B' THEN '일반'
							WHEN 'C' THEN '직원'
							ELSE '기타'
						END AS grade_name, 
						city
				FROM shop_member
				ORDER BY custno ASC
			""")
	List<ShopMember> getShopMemberList();

	

}
