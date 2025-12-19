package com.skc.domain.shopmember;

import java.time.LocalDate;

public record ShopMember(
		int custno, String custname, String phone, 
		String address, LocalDate joindate, String grade_name,
		String city
		) {}
