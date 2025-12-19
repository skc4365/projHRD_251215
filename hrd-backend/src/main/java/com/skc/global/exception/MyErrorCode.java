package com.skc.global.exception;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MyErrorCode {

//	브라우저 -> F12 -> 주소창엔터 -> network -> (빨간오류를 찾아서) response 확인해보자 ㅎ
	MEMBER_NOT_FOUND(HttpStatus.NOT_FOUND, "회원을 찾을 수 없습니다."),
	DB_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "DB 처리 중 오류가 발생했습니다."),
	UNKNOWN_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "알 수 없는 오류가 발생했습니다.");

	private final HttpStatus status;
	private final String message;

	//생성자, 게터

}
