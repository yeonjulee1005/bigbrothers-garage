export const useFetchComposable = () => {
  const client = useSupabaseClient()

  /**
   * ! Load Data !
   */

  const { garagePosition } = storeToRefs(useGaragePositionStore())
  const { transporter, transportStatus } = storeToRefs(useTransportOptions())

  const loadGaragePosition = async () => {
    const { data }: SerializeObject = await useFetch('/api/garagePosition', {
      headers: useRequestHeaders(['cookie']),
      immediate: true
    })

    garagePosition.value = data.value
  }

  const loadTransporter = async () => {
    const { data }: SerializeObject = await useFetch('/api/transporter', {
      headers: useRequestHeaders(['cookie']),
      immediate: true
    })

    transporter.value = data.value
  }

  const loadTransportStatus = async () => {
    const { data }: SerializeObject = await useFetch('/api/transportStatus', {
      headers: useRequestHeaders(['cookie']),
      immediate: true
    })

    transportStatus.value = data.value
  }

  const loadStorage = async (storage: string, imageName: string) => {
    const { data } = await client
      .storage
      .from(storage)
      .getPublicUrl(imageName)

    return data.publicUrl
  }

  const uploadStorage = async (storage: string, path: string, file: File) => {
    const { error } = await client
      .storage
      .from(storage)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true
      })

    return error
  }

  return {
    loadGaragePosition,
    loadTransporter,
    loadTransportStatus,
    loadStorage,
    uploadStorage
  }
}
