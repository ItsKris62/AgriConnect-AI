// services/supabaseService.ts
import { createClient } from "@supabase/supabase-js";

// Load environment variables
import * as dotenv from "dotenv";
dotenv.config();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  let query = supabase.from(tableName).select("*");

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error.message);
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
    console.error("Error inserting data:", error.message);
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
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error updating data:", error.message);
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
  const { data, error } = await supabase.from(tableName).delete().eq("id", id).single();

  if (error) {
    console.error("Error deleting data:", error.message);
    throw error;
  }

  return data as T;
};

/**
 * Sign up a new user with email and password.
 * @param email - User's email address.
 * @param password - User's password.
 * @returns Promise resolving to the created user.
 */
export const signUpUser = async (
  email: string,
  password: string,
  options?: { data?: Record<string, any> }
) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options,
  });

  if (error) {
    console.error("Error signing up user:", error.message);
    throw error;
  }

  return user;
};

/**
 * Sign in a user with email and password.
 * @param email - User's email address.
 * @param password - User's password.
 * @returns Promise resolving to the authenticated user.
 */
export const signInUser = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error signing in user:", error.message);
    throw error;
  }

  return user;
};

/**
 * Sign in a user with OAuth provider (e.g., Google, Facebook).
 * @param provider - The OAuth provider (e.g., 'google', 'facebook').
 * @returns Promise resolving to the authenticated user.
 */
export const signInWithOAuth = async (provider: string) => {
  const { user, error } = await supabase.auth.signInWithOAuth({ provider });

  if (error) {
    console.error("Error signing in with OAuth:", error.message);
    throw error;
  }

  return user;
};

/**
 * Reset password for a user.
 * @param email - User's email address.
 * @returns Promise resolving to success or error.
 */
export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.error("Error resetting password:", error.message);
    throw error;
  }

  return true;
};

/**
 * Get the current authenticated user.
 * @returns Promise resolving to the current user or null.
 */
export const getCurrentUser = async () => {
  const { data: session, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error getting session:", error.message);
    return null;
  }

  return session?.user || null;
};

/**
 * Log out the current user.
 * @returns Promise resolving to success or error.
 */
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error logging out user:", error.message);
    throw error;
  }

  return true;
};

export default supabase;