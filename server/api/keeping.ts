import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<SupabaseDataBase>(event)

  const { data, error } = await client
    .from('keeping')
    .select('id, transportStatus(id, code, code_name), garagePosition(id, code, code_name), car_number, car_model, name, mobile, start_date, end_date, memo, car_photo_name, extra_photo_name, deleted')
    .eq('deleted', false)

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
