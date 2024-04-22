export const useFetchComposable = () => {
  const client = useSupabaseClient()

  /**
   * ! Load Data !
   */

  const { keepingData, keepingAllData } = storeToRefs(useKeepingStore())
  const { transportationData, transportationAllData } = storeToRefs(useTransportationStore())
  const { garagePosition } = storeToRefs(useGaragePositionStore())
  const { transporter, transportStatus } = storeToRefs(useTransportOptions())

  const insertData = async (data: SerializeObject, table: string) => {
    const { error } = await client
      .from(table)
      .insert(data)

    if (error) {
      return error
    }
  }

  const updateData = async (dataDD: SerializeObject, updateId: string, table: string) => {
    const {  error } = await client
      .from(table)
      .update(dataDD as never)
      .eq('id', updateId)
      .select()

    if (error) {
      return error
    }
  }

  const upsertData = async (data: SerializeObject, table: string) => {
    const { error } = await client
      .from(table)
      .upsert(data)

    if (error) {
      return error
    }
  }

  const loadKeeping = async (allData: boolean) => {
    const { data }: SerializeObject = await useFetch('/api/keeping', {
      headers: useRequestHeaders(['cookie']),
      query: {
        allData
      },
      immediate: true
    })

    allData
      ? keepingAllData.value = data.value
      : keepingData.value = data.value
  }

  const loadTransportation = async (allData: boolean) => {
    const { data }: SerializeObject = await useFetch('/api/transportation', {
      headers: useRequestHeaders(['cookie']),
      query: {
        allData
      },
      immediate: true
    })

    allData
      ? transportationAllData.value = data.value
      : transportationData.value = data.value
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
    updateData,
    upsertData,
    loadKeeping,
    loadTransportation,
    loadGaragePosition,
    loadTransporter,
    loadTransportStatus,
    loadStorage,
    uploadStorage
  }
}
