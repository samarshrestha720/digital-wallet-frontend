import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL + "/api/user", // Replace with your actual API base URL
});

// Define the type for the authentication response
type AuthResponse = {
  token: string;
};

// Define the type for login credentials
type LoginCredentials = {
  email: string;
  password: string;
};

// Define the type for registration data
type RegisterData = {
  fullname: string;
  email: string;
  password: string;
};

export const login = async (credentials: LoginCredentials): Promise<String> => {
  try {
    const response = await api.post<String>("/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};
