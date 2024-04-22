import { defineStore } from 'pinia'

export const useKeepingStore = defineStore('keeping', () => {
  /**
   * ! Pinia State !
   *
   * @param keepingData 보관 데이터
   * @param keepingAllData 전체 보관 데이터
   *
   */

  const keepingData = ref()
  const keepingAllData = ref()

  return {
    keepingData,
    keepingAllData
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})
