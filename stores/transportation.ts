import { defineStore } from 'pinia'

export const useTransportationStore = defineStore('transportation', () => {
  /**
   * ! Pinia State !
   *
   * @param transportationData 운송 데이터
   *
   */

  const transportationData = ref()

  return {
    transportationData
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})
