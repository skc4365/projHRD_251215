package com.skc.controller;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

/**
 * @SpringBootTest Spring Boot 애플리케이션 전체 컨텍스트를 로딩하는 테스트 어노테이션
 * 
 * @AutoConfigureMockMvc 서버를 띄우지 않고(Mock) Controller를 HTTP 요청처럼 테스트하게 해줌
 * 
 * @SpringBootTest + @AutoConfigureMockMvc "실제 서버 환경 그대로 + 포트 없이 HTTP 테스트"
 */

@SpringBootTest
@AutoConfigureMockMvc
public class HomeControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("1_/경로 접근_401 Unauthorized")
	void testHomeUnauthorized() throws Exception {
		mockMvc.perform(get("/")).andDo(print()).andExpect(status().isUnauthorized());
	}

	@Test
	@DisplayName("2_/private경로 접근_401 Unauthorized")
	void testPrivateUnauthorized() throws Exception {
		mockMvc.perform(get("/private")).andDo(print()).andExpect(status().isUnauthorized());
	}

	@Test
	@WithMockUser(username = "testuser")
	@DisplayName("3_testuser가 /경로 접근_성공")
	void testHomeWithAuthentication() throws Exception {
		mockMvc.perform(get("/")).andDo(print()).andExpect(status().isOk())
				.andExpect(content().string("여기는 홈home 입니다"));
	}

	@Test
	@WithMockUser
	@DisplayName("4_testuser가 /private경로 접근_성공")
	void testPrivateWithAuthentication() throws Exception {
		mockMvc.perform(get("/private")).andDo(print()).andExpect(status().isOk())
				.andExpect(content().string("여기는 프라이빗 페이지"));
	}

}
