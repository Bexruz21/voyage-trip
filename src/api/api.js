// export const API_BASE_URL = 'https://voyage-api-mdab.onrender.com/api';
export const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const API = {
  AUTH: {
    REGISTER: `${API_BASE_URL}/users/register`,
    LOGIN: `${API_BASE_URL}/users/login`,
    FORGOT_PASSWORD: `${API_BASE_URL}/users/forgot-password`,
    RESET_PASSWORD: `${API_BASE_URL}/users/reset-password`,
  },

  USERS: {
    ME: `${API_BASE_URL}/users/me`,
    PROFILE: `${API_BASE_URL}/users/profile`,
  },

  CARDS: `${API_BASE_URL}/memberships/`,

  REGIONS: {
    LIST: `${API_BASE_URL}/travel/regions`,
    DETAIL: (regionId) => `${API_BASE_URL}/travel/regions/${regionId}/`,
  },
  COUNTRIES: {
    LIST: `${API_BASE_URL}/countries`,
    DETAIL: (countryId) => `${API_BASE_URL}/travel/countries?id=${countryId}`,
    CITIES: (countryId) => `${API_BASE_URL}/travel/cities?country=${countryId}`,
  },
  CITIES: {
    LIST: `${API_BASE_URL}/travel/cities`,
    DETAIL: (cityId) => `${API_BASE_URL}/travel/cities?id=${cityId}`,
  }
};
