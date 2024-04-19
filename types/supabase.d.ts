type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

type SupabaseDataBase = {
  public: {
    Tables: {
      garagePosition: {
        Row: {
          code: string | null
          code_name: string | null
          created_at: string
          deleted: boolean | null
          id: string
          updated_at: string | null
        }
        Insert: {
          code?: string | null
          code_name?: string | null
          created_at?: string
          deleted?: boolean | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          code?: string | null
          code_name?: string | null
          created_at?: string
          deleted?: boolean | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      keeping: {
        Row: {
          car_model: string | null
          car_number: string | null
          car_photo_name: string | null
          created_at: string
          deleted: boolean | null
          end_date: string | null
          extra_photo_name: string | null
          garage_position: string | null
          id: string
          memo: string | null
          mobile: string | null
          name: string | null
          start_date: string | null
          transport_status: string | null
          updated_at: string | null
        }
        Insert: {
          car_model?: string | null
          car_number?: string | null
          car_photo_name?: string | null
          created_at?: string
          deleted?: boolean | null
          end_date?: string | null
          extra_photo_name?: string | null
          garage_position?: string | null
          id?: string
          memo?: string | null
          mobile?: string | null
          name?: string | null
          start_date?: string | null
          transport_status?: string | null
          updated_at?: string | null
        }
        Update: {
          car_model?: string | null
          car_number?: string | null
          car_photo_name?: string | null
          created_at?: string
          deleted?: boolean | null
          end_date?: string | null
          extra_photo_name?: string | null
          garage_position?: string | null
          id?: string
          memo?: string | null
          mobile?: string | null
          name?: string | null
          start_date?: string | null
          transport_status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_keeping_garage_position_fkey'
            columns: ['garage_position']
            isOneToOne: false
            referencedRelation: 'garagePosition'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_keeping_transport_status_fkey'
            columns: ['transport_status']
            isOneToOne: false
            referencedRelation: 'transportStatus'
            referencedColumns: ['id']
          },
        ]
      }
      transportation: {
        Row: {
          car_model: string | null
          car_number: string | null
          car_photo_name: string | null
          created_at: string
          deleted: boolean | null
          end_date: string | null
          extra_photo_name: string | null
          garage_position: string | null
          id: string
          luggage_photo_name: string | null
          memo: string | null
          mobile: string | null
          name: string | null
          start_date: string | null
          transport_status: string | null
          transporter: string | null
          updated_at: string | null
        }
        Insert: {
          car_model?: string | null
          car_number?: string | null
          car_photo_name?: string | null
          created_at?: string
          deleted?: boolean | null
          extra_photo_name?: string | null
          garage_position?: string | null
          id?: string
          jeju_in_date?: string | null
          jeju_out_date?: string | null
          luggage_photo_name?: string | null
          memo?: string | null
          mobile?: string | null
          name?: string | null
          transport_status?: string | null
          transporter?: string | null
          updated_at?: string | null
        }
        Update: {
          car_model?: string | null
          car_number?: string | null
          car_photo_name?: string | null
          created_at?: string
          deleted?: boolean | null
          extra_photo_name?: string | null
          garage_position?: string | null
          id?: string
          jeju_in_date?: string | null
          jeju_out_date?: string | null
          luggage_photo_name?: string | null
          memo?: string | null
          mobile?: string | null
          name?: string | null
          transport_status?: string | null
          transporter?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_transportation_garage_position_fkey'
            columns: ['garage_position']
            isOneToOne: false
            referencedRelation: 'garagePosition'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_transportation_transport_status_fkey'
            columns: ['transport_status']
            isOneToOne: false
            referencedRelation: 'transportStatus'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_transportation_transporter_fkey'
            columns: ['transporter']
            isOneToOne: false
            referencedRelation: 'transporter'
            referencedColumns: ['id']
          },
        ]
      }
      transporter: {
        Row: {
          car_number: string | null
          created_at: string
          deleted: boolean | null
          id: string
          mobile: string | null
          name: string | null
          updated_at: string | null
        }
        Insert: {
          car_number?: string | null
          created_at?: string
          deleted?: boolean | null
          id?: string
          mobile?: string | null
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          car_number?: string | null
          created_at?: string
          deleted?: boolean | null
          id?: string
          mobile?: string | null
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      transportStatus: {
        Row: {
          code: string | null
          code_name: string | null
          created_at: string
          deleted: boolean | null
          id: string
          updated_at: string | null
        }
        Insert: {
          code?: string | null
          code_name?: string | null
          created_at?: string
          deleted?: boolean | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          code?: string | null
          code_name?: string | null
          created_at?: string
          deleted?: boolean | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
