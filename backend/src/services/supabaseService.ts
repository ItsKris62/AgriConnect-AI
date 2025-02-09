// services/supabaseService.ts
import { createClient } from '@supabase/supabase-js';

// Replace these values with your Supabase project credentials
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Fetch data from a table.
 * @param tableName - Name of the table to query.
 * @param filters - Optional filters for the query.
 * @returns Promise resolving to the fetched data.
 */
export const fetchFromTable = async <T>(
  tableName: string,
  filters?: Record<string, any>
): Promise<T[]> => {
  let query = supabase.from(tableName).select('*');

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }

  return data as T[];
};

/**
 * Insert data into a table.
 * @param tableName - Name of the table to insert into.
 * @param payload - Data to insert.
 * @returns Promise resolving to the inserted record.
 */
export const insertIntoTable = async <T>(
  tableName: string,
  payload: Record<string, any>
): Promise<T> => {
  const { data, error } = await supabase.from(tableName).insert(payload).single();

  if (error) {
    console.error('Error inserting data:', error.message);
    throw error;
  }

  return data as T;
};

/**
 * Update data in a table.
 * @param tableName - Name of the table to update.
 * @param id - ID of the record to update.
 * @param updates - Data to update.
 * @returns Promise resolving to the updated record.
 */
export const updateInTable = async <T>(
  tableName: string,
  id: number | string,
  updates: Record<string, any>
): Promise<T> => {
  const { data, error } = await supabase
    .from(tableName)
    .update(updates)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error updating data:', error.message);
    throw error;
  }

  return data as T;
};

/**
 * Delete data from a table.
 * @param tableName - Name of the table to delete from.
 * @param id - ID of the record to delete.
 * @returns Promise resolving to the deleted record.
 */
export const deleteFromTable = async <T>(
  tableName: string,
  id: number | string
): Promise<T> => {
  const { data, error } = await supabase.from(tableName).delete().eq('id', id).single();

  if (error) {
    console.error('Error deleting data:', error.message);
    throw error;
  }

  return data as T;
};