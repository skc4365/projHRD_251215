package com.skc.global.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ErrorResToReact {
	private String message;
	
	// 화면(react)쪽으로 에러메세지 전달하기

}
