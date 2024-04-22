import { defineStore } from 'pinia'

export const useTransportationStore = defineStore('transportation', () => {
  /**
   * ! Pinia State !
   *
   * @param transportationData 운송 데이터
   * @param transportationAllData 전체 운송 데이터
   *
   */

  const transportationData = ref()
  const transportationAllData = ref()

  return {
    transportationData,
    transportationAllData
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})
