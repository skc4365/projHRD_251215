USE hrdtest;

# 회원정보tbl: 회원번호 | 회원이름 | 가입일자 | 고객등급|주소
CREATE TABLE IF NOT EXISTS  book_member(
	custno 	INT NOT NULL PRIMARY KEY,
	custname VARCHAR(20),
	joindate DATE,
	grade 	CHAR(1),
	address 	VARCHAR(60)
);
INSERT INTO book_member VALUES(10001, '홍길동',  '2019-02-15', 'A', '경기도 수원시 ...');
INSERT INTO book_member VALUES(10002, '홍길동2', '2019-03-15', 'B', '경기도 군포시 ...');
INSERT INTO book_member VALUES(10003, '홍길동3', '2019-04-15', 'A', '경기도 안양시시 ...');
INSERT INTO book_member VALUES(10004, '홍길동4', '2019-05-15', 'B', '경기도 분당구 ...');
INSERT INTO book_member VALUES(10005, '홍길동5', '2019-06-15', 'A', '경기도 용인시 ...');
INSERT INTO book_member VALUES(10006, '홍길동6', '2019-07-15', 'C', '경기도 광주시 ...');
SELECT * FROM book_member

# 회원대여정보tbl: 회원번호 | 책번호 | 대여일자 | 반납일자
CREATE TABLE IF NOT EXISTS rent_member(
	custno 		INT NOT NULL,
	bookno 		INT NOT NULL,
	rentdate	 	DATE,
	returndate 	DATE,
	PRIMARY KEY(custno, bookno)
);
INSERT INTO rent_member VALUES(10001, 1234, '2019-02-15', '2019-02-15');
INSERT INTO rent_member VALUES(10001, 1122, '2019-02-15', '2019-03-15');
INSERT INTO rent_member VALUES(10002, 1234, '2019-02-15', '2019-03-15');
INSERT INTO rent_member VALUES(10003, 1234, '2019-02-16', '2019-03-15');
INSERT INTO rent_member VALUES(10004, 1122, '2019-02-16', '2019-03-15');
INSERT INTO rent_member VALUES(10005, 1122, '2019-02-16', '2019-04-15');
INSERT INTO rent_member VALUES(10005, 1113, '2019-02-17', '2019-04-15');
INSERT INTO rent_member VALUES(10005, 1114, '2019-02-18', '2019-04-15');
INSERT INTO rent_member VALUES(10006, 1115, '2019-02-19', '2019-05-15');
SELECT * FROM rent_member;

# ===== 프로그램 기능 정의 =====
# ----- [다음회원번호] book_member회원등록(custno+1)
SELECT IFNULL(MAX(custno), 0)+1 AS next_custno FROM book_member;

# ----- book_member회원등록 -----
INSERT INTO book_member VALUES(10001, '홍길동',  '2019-02-15', 'A', '경기도 수원시 ...');

# ----- rent_member회원별 대여현황 -----
SELECT r.custno, b.custname, COUNT(r.custno) AS cnt
FROM rent_member r, book_member b
WHERE r.custno = b.custno
GROUP BY r.custno
ORDER BY COUNT(r.custno) DESC;

# ----- rent_member도서별 대여현황 -----
SELECT bookno, COUNT(bookno) AS cnt
FROM rent_member
GROUP BY bookno
ORDER BY COUNT(bookno) DESC;

# ----- book_member회원조회 -----
SELECT custno, custname, joindate, 
			CASE grade
				WHEN 'A' THEN 'VIP'
				WHEN 'B' THEN '일반'
				WHEN 'C' THEN '직원'
				ELSE '기타'
			END AS grade_name, 
			address
FROM book_member
ORDER BY custno ASC;

# ----- book_member회원수정 -----
#(10001, '홍길동',  '2019-02-15', 'A', '경기도 수원시 ...');
# select * from book_member;
UPDATE book_member 
SET
 	custname = '홍길동',
 	joindate = '2019-02-15',
 	grade 	= 'A',
 	address 	= '경기도 수정수정'
WHERE custno = 10001;

