import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<SupabaseDataBase>(event)

  const allData = getQuery(event).allData

  if (allData) {
    const { data, error } = await client
      .from('transportation')
      .select('id, transporter(id, car_number, name, mobile), transportStatus(id, code, code_name), garagePosition(id, order, code, code_name), car_number, car_model, name, mobile, start_date, end_date, memo, car_photo_name, luggage_photo_name, extra_photo_name, class, deleted')
      .order('deleted', { ascending: true })

    if (error) {
      throw createError({ statusMessage: error.message })
    }

    return data
  } else {
    const { data, error } = await client
      .from('transportation')
      .select('id, transporter(id, car_number, name, mobile), transportStatus(id, code, code_name), garagePosition(id, order, code, code_name), car_number, car_model, name, mobile, start_date, end_date, memo, car_photo_name, luggage_photo_name, extra_photo_name, class, deleted')
      .eq('deleted', false)

    if (error) {
      throw createError({ statusMessage: error.message })
    }

    return data

  }
})
