package com.skc.domain.bookmanager;

import org.springframework.stereotype.Service;

@Service
class BookManagerServiceImpl implements BookManagerService  {

	private final BookManagerMapper bookManagerMapper;
	
	BookManagerServiceImpl(BookManagerMapper bookManagerMapper) {
		this.bookManagerMapper = bookManagerMapper;
	}

	@Override
	public int getBookManagerNextCustno() {
		return bookManagerMapper.getBookManagerNextCustno();
	}
	
	@Override
	public void addBookManager(BookManagerDTO dto) {
		bookManagerMapper.saveBookManager(dto);
	}

	

}
