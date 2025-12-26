package com.skc.domain.bookmanager;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;

public record BookManagerDTO(
		
		int custno,
		@NotBlank(message = "고객명을 입력하세요") String custname,
		LocalDate joindate,
		String grade,
		String address
) {}

/** 
 * 도서관리 - 회원정보 명세서
 * custno 	회원번호
 * custname 회원이름
 * joindate 가입일자
 * grade 	고객등급
 * address 	주소 
 * */