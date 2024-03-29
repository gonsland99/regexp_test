# 정규표현식(RegExp)
정규식, Regula Expression

## 역할
- 문자검색(search)
- 문자대체(replace)
- 문자추출(extract)

## 테스트 사이트
https://regexr.com/

## 테스트용 String
`
010-1234-5678
thegon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick prown fox jumps over the lazy dog.
abbcccdddd
`
## 정규식 생성
```js
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자열의 배열(Array) 반환
replace | `문자열.replace(정규식,대체문자)`| 일치하는 문자를 대체

## 플래그(옵션)
플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자 구분없애기(igonore case)
m | 여러줄 일치(multi line)

## 패턴(표현)
패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개이상 연속 일치
{3,5} | 3개이상 5개이하 연속일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z사이의 문자구간(소문자)
[A-Z] | A부너 Z사이의 문자구간(대문자)
[0-9] | 0부터 9사이 숫자
[가-힣] | 가부터 힣까지 문자
\w | 63개문자(Word, 대소영문자52개 + 숫자10개 + _)
\b | 63개문자 외 일치않는 경계
\d | 숫자
\s | 공백
(?=) | 앞쪽일치(Lookahead)
(?<=) | 뒤쪽일치(Lookbehind)