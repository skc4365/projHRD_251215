package com.skc.global.exception;

import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	// 비즈니스 예외처리
	@ExceptionHandler(BusinessException.class)
	public ResponseEntity<ErrorResToReact> handleBusinessException(BusinessException e) {
		MyErrorCode myErrorCode = e.getMyErrorCode();
		return ResponseEntity
				.status(myErrorCode.getStatus())
				.body(new ErrorResToReact(myErrorCode.getMessage()));

	}
	
	//DB_Mybatis 예외처리
	@ExceptionHandler(DataAccessException.class)
	public ResponseEntity<ErrorResToReact> heandleDBEntity(DataAccessException e) {
		return ResponseEntity
				.status(MyErrorCode.DB_ERROR.getStatus())
				.body(new ErrorResToReact(MyErrorCode.DB_ERROR.getMessage()));
	}
	
	//(나머지 모든 에러)알 수 없는 예외처리
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResToReact> handleException(Exception e) {
		return ResponseEntity
				.status(MyErrorCode.UNKNOWN_ERROR.getStatus())
				.body(new ErrorResToReact(MyErrorCode.UNKNOWN_ERROR.getMessage()));
	}
	
}
