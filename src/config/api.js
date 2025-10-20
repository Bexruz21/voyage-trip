export const API_BASE_URL = 'http://localhost:3000/api'

export const API = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    ME: `${API_BASE_URL}/auth/me`,
  },

  USERS: `${API_BASE_URL}/users`,
  CARDS: `${API_BASE_URL}/cards`,

  REGIONS: `${API_BASE_URL}/regions`,
  COUNTRIES: `${API_BASE_URL}/countries`,
  CITIES: `${API_BASE_URL}/cities`,

  TOURS: `${API_BASE_URL}/tours`,
}
