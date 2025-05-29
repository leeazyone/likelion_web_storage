# 로컬 회원가입 & 세션 로그인 구현 (JavaScript)

## 목적  
서버 없이 브라우저 환경에서 LocalStorage와 SessionStorage를 활용하여 로그인 및 회원가입 기능을 구현해보고, 클라이언트 사이드 저장소의 개념을 이해하기 위함
---

## 과정  

### 1. 회원가입 기능 (LocalStorage 사용)  
- 사용자가 입력한 아이디와 비밀번호를 `localStorage`에 저장  
- 기존에 동일한 아이디가 존재할 경우 중복 가입을 방지  
- 저장 형식: `localStorage.setItem("users", JSON.stringify([...]))`  

### 2. 로그인 기능 (SessionStorage 사용)  
- 로그인 시 입력한 정보가 `localStorage`에 저장된 유저 정보와 일치하는지 확인  
- 성공 시, `sessionStorage`에 현재 로그인한 유저의 ID를 저장  
- 페이지를 새로고침하면 로그인 상태가 풀리는 구조 (SessionStorage 기반이므로 브라우저 종료 시 초기화됨)  

---

## 실행 결과  
- 회원가입 시 정보가 `localStorage`에 정상 저장됨  
- 로그인 시 일치하는 계정이면 로그인 성공 → `sessionStorage`에 로그인 정보 저장  
- 브라우저 새로고침 또는 종료 시 세션 만료되어 자동 로그아웃됨  

---

## 요약 및 결과  
JavaScript의 `localStorage`와 `sessionStorage`를 이용해 서버 없이도 회원가입 및 로그인 기능을 구현
회원가입은 브라우저에 사용자 정보를 저장하고, 로그인은 세션 기반으로 일시적인 로그인 상태를 유지하도록 구성
이를 통해 클라이언트 저장소의 차이점과 활용 방식을 실습
