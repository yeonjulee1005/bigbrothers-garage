import { defineStore } from 'pinia'

export const useGaragePositionStore = defineStore('garagePosition', () => {
  /**
   * ! Pinia State !
   *
   * @param garagePosition 게러지 위치 데이터
   *
   */

  const garagePosition = ref()

  return {
    garagePosition
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})
