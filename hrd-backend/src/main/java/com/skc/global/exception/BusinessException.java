package com.skc.global.exception;

import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException {
	
	private final MyErrorCode myErrorCode;
	
	public BusinessException(MyErrorCode myErrorCode) {
		super(myErrorCode.getMessage());
		this.myErrorCode = myErrorCode;
	}
	
}
