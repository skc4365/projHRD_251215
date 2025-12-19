USE hrdtest;
#SHOW TABLES;

#DESC shopmember;
#SHOW CREATE TABLE shopmember;

#SET FOREIGN_key_checks = 0;
#DROP TABLE shopmember;
#SET foreign_key_checks = 1;

# ===== 테이블 작성  =====

# 샘플데이터 : 회원번호 | 판매번호 | 단가 | 수량 | 가격 | 상품코드 | 판매일자

# 회원정보tbl : 회원번호 | 회원성명 | 연락처 | 주소 | 가입일자 | 고객등급 | 도시코드
CREATE TABLE IF NOT EXISTS shop_member (
	custno 	INT NOT NULL PRIMARY KEY,
	custname varchar(20),
	phone		CHAR(13),
	address 	varchar(60),
	joindate DATE,
	grade 	CHAR(1),
	city 		CHAR(2)	 	
);
INSERT INTO shop_member VALUES(100001, '김행복', '010-1111-2222', '서울 동대문구 휘경1동', '2015-12-02', 'A', '01');
INSERT INTO shop_member VALUES(100002, '이축복', '010-1111-3333', '서울 동대문구 휘경2동', '2015-12-06', 'B', '01');
INSERT INTO shop_member VALUES(100003, '장믿음', '010-1111-4444', '울릉군 울릉읍 독도1리', '2015-10-01', 'B', '30');
INSERT INTO shop_member VALUES(100004, '최사랑', '010-1111-5555', '울릉군 울릉읍 독도2리', '2015-11-13', 'A', '30');
INSERT INTO shop_member VALUES(100005, '진평화', '010-1111-6666', '제주도 제주시 외나무골', '2015-12-25', 'B', '60');
INSERT INTO shop_member VALUES(100006, '차공단', '010-1111-7777', '제주도 제주시 감나무골', '2015-12-11', 'C', '60');
SELECT * FROM shop_member;

# 회원매출정보 tbl : 회원번호 | 판매번호 | 단가 | 수량 | 가격 | 상품코드 | 판매일자
CREATE TABLE IF NOT EXISTS shop_money(
	custno 	INT NOT NULL,
	saleno 	INT NOT NULL,
	pcost 	INT,
	emount 	INT,
	price 	INT,
	pcode 	varchar(4),
	sdate 	DATE,
	PRIMARY KEY (custno, saleno)
);
INSERT INTO shop_money VALUES(100001, 20160001, 500, 	5, 2500, 'A001', '2016-01-01');
INSERT INTO shop_money VALUES(100001, 20160002, 1000, 4, 4000, 'A002', '2016-01-01');
INSERT INTO shop_money VALUES(100001, 20160003, 500, 	3, 1500, 'A008', '2016-01-01');
INSERT INTO shop_money VALUES(100002, 20160004, 2000, 1, 2000, 'A004', '2016-01-02');
INSERT INTO shop_money VALUES(100002, 20160005, 500, 	1,  500, 'A001', '2016-01-03');
INSERT INTO shop_money VALUES(100003, 20160006, 1500, 2, 3000, 'A003', '2016-01-03');
INSERT INTO shop_money VALUES(100004, 20160007, 500, 	2, 1000, 'A001', '2016-01-04');
INSERT INTO shop_money VALUES(100004, 20160008, 300, 	1,  300, 'A005', '2016-01-04');
INSERT INTO shop_money VALUES(100004, 20160009, 600, 	1,  600, 'A006', '2016-01-04');
INSERT INTO shop_money VALUES(100004, 20160000, 3000, 1, 3000, 'A007', '2016-01-06');
SELECT * FROM shop_money;

# ===== 프로그램 기능정의 =====
# ----- [다음회원번호] shop_money회원등록(custno+1)   -----
SELECT IFNULL(MAX(custno), 0)+1 AS next_custno FROM shop_member;

# ----- shop_money회원등록 -----
INSERT INTO shop_member VALUES(100099, '김행복', '010-1111-2222', '서울 동대문구 휘경9동', '2015-12-02', 'A', '01');

# ----- shop_money회원조회 -----
SELECT custno, custname, phone, address, joindate, 
				CASE grade
					WHEN 'A' THEN 'VIP'
					WHEN 'B' THEN '일반'
					WHEN 'C' THEN '직원'
					ELSE '기타'
				END AS grade_name, 
				city
FROM shop_member
ORDER BY custno ASC;

# ----- shop_money회원수정 -----
UPDATE shop_member
SET
    custname = '테스트',
    phone    = '010-9999-0000',
    address  = '테스트동네',
    joindate = '2015-12-12',
    grade    = 'A',
    city     = '01'
WHERE custno = 100099;

# ----- shop_money매출조회 -----
SELECT s.custno, m.custname, 
	CASE m.grade
		WHEN 'A' THEN 'VIP'
		WHEN 'B' THEN '일반'
		WHEN 'C' THEN '직원'
		ELSE '기타'
	END AS grade_name,
	SUM(price) AS sales
FROM shop_money s
LEFT JOIN shop_member m ON s.custno = m.custno
GROUP BY s.custno, m.custname, m.grade
ORDER BY sales DESC;


# ----- shop_money회원등록 -----


# ===== 문법설명 ==============
# CREATE TABLE IF NOT EXISTS shop_member 테이블이 없으면 새로 생성해라
# IFNULL(값, 0) 값이 null이면 0으로 바꿔라~