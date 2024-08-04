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

  const getProfileTitle = () => {
    return profileTitle
  }

  const getProfileDataList = () => {
    return profileDataList
  }

  return {
    getProfileTitle,
    getProfileDataList,
  }
})
