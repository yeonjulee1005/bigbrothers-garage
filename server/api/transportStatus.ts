import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<SupabaseDataBase>(event)

  const { data, error } = await client
    .from('transportStatus')
    .select('id, code, code_name, deleted')
    .eq('deleted', false)

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
