export const API_BASE_URL = 'https://voyage-trip-api.onrender.com/api';

export const API = {
  AUTH: {
    REGISTER: `${API_BASE_URL}/user/auth/register/`,
    LOGIN: `${API_BASE_URL}/user/auth/login/`,
    ME: `${API_BASE_URL}/user/me/`,
    PROFILE: `${API_BASE_URL}/user/profile/`,
  },

  CARDS: `${API_BASE_URL}/cards/`,

  REGIONS: {
    LIST: `${API_BASE_URL}/regions/`,
    DETAIL: (id) => `${API_BASE_URL}/regions/${id}/`,
    COUNTRIES: (regionId) => `${API_BASE_URL}/regions/${regionId}/countries/`,
  },

  COUNTRIES: {
    LIST: `${API_BASE_URL}/countries/`,
    DETAIL: (id) => `${API_BASE_URL}/countries/${id}/`,
    CITIES: (countryId) => `${API_BASE_URL}/countries/${countryId}/cities/`,
  },

  CITIES: {
    LIST: `${API_BASE_URL}/cities/`,
    DETAIL: (id) => `${API_BASE_URL}/cities/${id}/`,
  },
};
