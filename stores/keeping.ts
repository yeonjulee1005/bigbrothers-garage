import { defineStore } from 'pinia'

export const useKeepingStore = defineStore('keeping', () => {
  /**
   * ! Pinia State !
   *
   * @param keepingData 보관 데이터
   *
   */

  const keepingData = ref()

  return {
    keepingData
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})
