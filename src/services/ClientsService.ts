import { supabase } from '../config/supabase';
import type { Client } from '../interfaces/Client';

export class ClientsService {
  static async getClients(): Promise<Client[]> {
    const { data, error } = await supabase.from('clients').select('*').order('id', { ascending: true });

    if (error) {
      console.error('Error al obtener clientes:', error.message);
      throw error;
    }

    return (data as Client[]) || [];
  }

  static async addClient(client: Client): Promise<void> {
    const { error } = await supabase.from('clients').insert([client]);

    if (error) {
      console.error('Error al añadir cliente:', error.message);
      throw error;
    }
  }
}
