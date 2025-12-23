package com.skc.domain.shopmember;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import jakarta.validation.Valid;

@Mapper
public interface ShopMemberMapper {

//	@Select("""
//		    SELECT IFNULL(MAX(custno), 0)+1 AS next_custno 
//		    FROM shop_member
//		""")
	int getShopMemberNextCustno();

	@Insert("""
				INSERT INTO shop_member (custno, custname, phone, address, joindate, grade, city)
				VALUES (#{custno}, #{custname}, #{phone}, #{address}, #{joindate}, #{grade}, #{city})
			""")
	void addShopMember(@Valid ShopMemberDTO dto);
	// void addShopMember(ShopMember shopMember);

//	@Select("""
//			    SELECT custno, custname, phone, address, joindate, 
//						CASE grade
//							WHEN 'A' THEN 'VIP'
//							WHEN 'B' THEN '일반'
//							WHEN 'C' THEN '직원'
//							ELSE '기타'
//						END AS grade_name, 
//						city
//				FROM shop_member
//				ORDER BY custno ASC
//			""")
	List<ShopMember> getShopMemberList();

	@Select("""
				SELECT s.custno, m.custname,
					CASE m.grade
						WHEN 'A' THEN 'VIP'
						WHEN 'B' THEN '일반'
						WHEN 'C' THEN '직원'
						ELSE '기타'
					END AS grade_name,
					SUM(price) AS sales
				FROM shop_money s
				LEFT JOIN shop_member m ON s.custno = m.custno
				GROUP BY s.custno, m.custname, m.grade
				ORDER BY sales DESC
			""")
	List<ShopSales> getShopSalesList();

	@Delete("""
			DELETE FROM shop_member
			WHERE custno = #{custno}
			""")
	void deleteShopMember(int custno);

	@Select("""
			SELECT custno, custname, phone, address, joindate, grade, city
			FROM shop_member
			WHERE custno = #{custno}
			""")
	ShopMember getShopMember(int custno);
	
	@Update("""
			UPDATE shop_member
			SET custname = #{custname}, phone = #{phone}, address = #{address}, 
				joindate = #{joindate}, grade = #{grade}, city = #{city}
			WHERE custno = #{custno}
			""")
	void updateShopMember(@Valid ShopMemberDTO dto);

}
