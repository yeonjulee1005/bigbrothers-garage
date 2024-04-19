import { defineStore } from 'pinia'

export const useTransportOptions = defineStore('transportOptions', () => {
  /**
   * ! Pinia State !
   *
   * @param transporter 운송자 데이터
   * @param transportStatus 운송 상태 데이터
   *
   */

  const transporter = ref()
  const transportStatus = ref()

  return {
    transporter,
    transportStatus
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})
