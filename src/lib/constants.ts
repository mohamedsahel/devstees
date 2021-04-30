export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
export const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
export const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY || ''

export type ActionType = {
  type: string
  payload?: any
}
