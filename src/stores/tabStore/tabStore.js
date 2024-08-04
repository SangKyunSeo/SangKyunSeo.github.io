import { defineStore } from "pinia"
import { ref } from "vue"

export const useTabStore = defineStore("tabStore", () => {
  const currentTabState = ref("Home")

  const getCurTab = () => {
    return currentTabState.value
  }

  const setCurTab = (tab) => {
    currentTabState.value = tab
  }

  return {
    getCurTab,
    setCurTab,
  }
})
