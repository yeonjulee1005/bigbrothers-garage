export const useFetchComposable = () => {
  const client = useSupabaseClient()

  /**
   * ! Load Data !
   */

  const { keepingData } = storeToRefs(useKeepingStore())
  const { garagePosition } = storeToRefs(useGaragePositionStore())
  const { transporter, transportStatus } = storeToRefs(useTransportOptions())

  const insertData = async (insertData: SerializeObject, table: string) => {
    const { error } = await client
      .from(table)
      .insert(insertData)

    if (error) {
      return error
    }
  }

  const upsertData = async (upsertData: SerializeObject, table: string) => {
    const { error } = await client
      .from(table)
      .upsert(upsertData)

    if (error) {
      return error
    }
  }

  const loadKeeping = async () => {
    const { data }: SerializeObject = await useFetch('/api/keeping', {
      headers: useRequestHeaders(['cookie']),
      immediate: true
    })

    keepingData.value = data.value
  }

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
    insertData,
    upsertData,
    loadKeeping,
    loadGaragePosition,
    loadTransporter,
    loadTransportStatus,
    loadStorage,
    uploadStorage
  }
}
