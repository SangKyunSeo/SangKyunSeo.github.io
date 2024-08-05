import { defineStore } from "pinia"

export const useDataStore = defineStore("dataStore", () => {
  const profileTitle = [
    "bi bi-person-fill",
    "bi bi-mortarboard-fill",
    "bi bi-envelope-fill",
    "bi bi-pen-fill",
    "bi bi-house-door-fill",
    "bi bi-github",
  ]
  const profileDataList = [
    "1997. 08. 02",
    "고려대학교 세종캠퍼스 컴퓨터정보학과 졸업 (2016.03 ~ 2023.02)",
    "tkdrbs0802@naver.com",
    "정보처리기사 결과 대기중",
    "서울특별시 관악구",
    "https://github.com/SangKyunSeo",
  ]

  const skillTitleList = [
    "JAVA",
    "JAVASCRIPT",
    "SPRING",
    "SPRINGBOOT",
    "EXPRESS JS",
    "NEST JS",
    "JSP",
    "VUE JS",
    "MYSQL",
    "ORACLE",
    "GIT",
  ]

  const projectContentList = [
    {
      title: "택시 동승자를 구하기 위한 매칭 APP",
      date: "2022.04.01 - 2022.11.30",
      join: "1명",
      content:
        "등하교 시 택시 이용자 간에 동승자를 구해 택시비를 절약할 수 있도록 목적지를 기준으로 채팅방을 개설하여 동승자를 구합니다.",
      skill: "#JAVA #Firebase Realtime Database #Android Studio",
      func: [
        "구글 API를 사용한 로그인",
        "출발지 목적지 선택 별 채팅방 분리",
        "채팅방 생성",
        "채팅",
      ],
    },
    {
      title: "단순 CRUD 쇼핑몰 프로젝트",
      date: "2022.12.19 - 2023.01.30",
      join: "1명",
      content: "Spring 스터디를 위한 간단 CRUD 쇼핑몰 웹 사이트",
      skill: "#JAVA #JAVASCRIPT #MYSQL #JSP ",
      func: [
        "로그인",
        "상품 정보 및 상세 조회",
        "상품 문의 등록, 조회, 수정 및 삭제",
        "장바구니 등록, 조회, 수정 및 삭제",
      ],
    },
    {
      title: "내일의 집",
      date: "2023.06.07 - 2023.06.30",
      join: "6명",
      content: "오늘의 집을 밴치마킹한 가구 웹 사이트",
      skill: "#JAVA #JAVASCRIPT #ORACLE #JDBC ",
      func: ["중고 거래 글 등록, 조회, 수정 및 삭제", "채팅방 생성 및 삭제", "상품 바로구매 기능"],
    },
    {
      title: "Grinn",
      date: "2023.07.13 - 2023.07.30",
      join: "7명 (조장)",
      content: "Kream 웹 쇼핑몰을 밴치마킹한 경매 웹 사이트",
      skill: "#JAVA #JAVASCRIPT #SPRINGBOOT #ORACLE #MYBATIS ",
      func: [
        "상품 사이즈 별 입찰 정보 조회",
        "구매 입찰 등록 및 삭제",
        "판매 입찰 등록 및 삭제",
        "거래 등록 및 삭제",
        "관리자 거래 정보 관리",
      ],
    },
    {
      title: "클론 - 왓챠피디아",
      date: "2023.10.02 - 2023.10.23",
      join: "1명",
      content: "VUE 프레임워크 스터디를 위한 클론 사이트",
      skill: "#JAVA #JAVASCRIPT #SPRINGBOOT #MARIADB #VUE #SPRING SECURITY ",
      func: ["로그인", "리뷰 등록, 조회, 수정 및 삭제", "영화 조회"],
    },
    {
      title: "채팅 웹 사이트",
      date: "2024.02.12 - 2024.03.05",
      join: "4명",
      content: "Redis를 사용한 로그인 기반 채팅 웹 사이트",
      skill: "#JAVA #JAVASCRIPT / SPRINGBOOT / MARIADB / VUE #SPRING SECURITY #REDIS #FCM ",
      func: [
        "JWT 재발급 로직 기능",
        "1:1, 1:N 채팅방 생성 및 삭제",
        "실시간 로그인 회원 ON OFF 기능",
      ],
    },
    {
      title: "PCM(한국프리미엄카드마케팅) 정산 프로그램",
      date: "2024.03.13 - 2024.06.14",
      join: "4명",
      content: "한국 프리미엄 마케팅 회사 내 정산 시스템 개발",
      skill: "#JAVA #JAVASCRIPT #SPRINGBOOT #MARIADB #THYMELEAF ",
      func: [
        "매입 매출 세금계산서 정산 DB 설계",
        "가맹점 지급 통계 화면 및 API 설계",
        "바로빌 API 연동 및 세금계산서 조회 발급",
        "대용량 데이터 엑셀 다운로드",
      ],
    },
  ]

  const skillDataList = [80, 60, 70, 70, 20, 10, 70, 60, 80, 60, 80]

  const getProfileTitle = () => {
    return profileTitle
  }

  const getProfileDataList = () => {
    return profileDataList
  }

  const getSkillTitleList = () => {
    return skillTitleList
  }

  const getSkillDataList = () => {
    return skillDataList
  }

  const getProjectContentList = () => {
    return projectContentList
  }

  return {
    getProfileTitle,
    getProfileDataList,
    getSkillTitleList,
    getSkillDataList,
    getProjectContentList,
  }
})
