import axios from 'axios';

const api = axios.create({
  baseURL: 'https://madeena.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Reservation specific API calls
export const reservationApi = {
  sendOtp: (email) => api.post('/reservations/send-otp', { email }),
  verifyOtp: (email, otp) => api.post('/reservations/verify-otp', { email, otp }),
  book: (data) => api.post('/reservations/book', data),
  getOccupiedSlots: (date) => api.get(`/reservations/occupied-slots/${date}`),
};

export default api;
