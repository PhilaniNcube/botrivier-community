export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      business_directory: {
        Row: {
          business_type: Database['public']['Tables']['business_type']['Row']
          created_at: string
          directory_id: Database['public']['Tables']['directory']['Row']
        }
        Insert: {
          business_type: string
          created_at?: string
          directory_id: string
        }
        Update: {
          business_type?: string
          created_at?: string
          directory_id?: string
        }
      }
      business_type: {
        Row: {
          id: string
          created_at: string
          title: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
        }
        Update: {
          id: string
          created_at?: string
          title?: string
        }
      }
      directors: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          position: string
          contact: string
        }
        Insert: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string
          position?: string
          contact?: string
        }
        Update: {
          id: string
          created_at?: string
          first_name?: string
          last_name?: string
          position?: string
          contact?: string
        }
      }
      directory: {
        Row: {
          id: string
          created_at: string
          business_name: string
          first_name: string
          last_name: string
          email: string
          website: string
          phone_number: string
        }
        Insert: {
          id?: string
          created_at?: string
          business_name?: string
          first_name?: string
          last_name?: string
          email?: string
          website?: string
          phone_number?: string
        }
        Update: {
          id: string
          created_at?: string
          business_name?: string
          first_name?: string
          last_name?: string
          email?: string
          website?: string
          phone_number?: string
        }
      }
      documents : {
        Row: {
          id: string
          created_at: string
          title: string
          src:string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          src:string
        }
        Update: {
          id: string
          created_at?: string
          title?: string
          src?:string
        }
      }
      events: {
        Row: {
          id: string
          created_at: string
          title: string
          date: string
          time: string
          description: string
          images: string[]
          venue: string
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string
          date?: string
          time?: string
          description?: string
          images?: string[]
          venue?: string
        }
        Update: {
          id: string
          created_at?: string
          title?: string
          date?: string
          time?: string
          description?: string
          images?: string[]
          venue?: string
        }
      }
      portfolios: {
        Row: {
          id: string
          created_at: string
          title: string
          manager: string
          contact: string
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string
          manager?: string
          contact?: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          manager?: string
          contact?: string
        }
      }
      profiles: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
        }
        Insert: {
          id?: string
          first_name?: string
          last_name?: string
          email: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
        }
      }
      projects: {
        Row: {
          id: string
          created_at: string
          title: string
          images: string[]
          description: string
          start_date: string
          completed: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string
          images?: string[]
          description?: string
          start_date?: string
          completed?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          images?: string[]
          description?: string
          start_date?: string
          completed?: boolean
        }
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
  }
}

