import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

class AuthService {
  // Register a new user
  register(user) {
    return axios.post(`${API_BASE_URL}/register`, user);
  }

  // Login with credentials
  login(credentials) {
    return axios.post(`${API_BASE_URL}/login`, credentials);
  }
}

export default new AuthService();
