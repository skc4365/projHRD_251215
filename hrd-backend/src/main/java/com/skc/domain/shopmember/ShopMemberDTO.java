package com.skc.domain.shopmember;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;

public record ShopMemberDTO(
		int custno, 
		@NotBlank(message = "고객명을 입력하세요") String custname, 
		String phone, 
		String address, 
		LocalDate joindate, 
		String grade,
		String city
		) {}