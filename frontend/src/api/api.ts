import axios from "axios"

const BASE_URL = "http://localhost:4000/api"

export const getSummary = () => axios.get(`${BASE_URL}/summary`)
export const getDrivers = () => axios.get(`${BASE_URL}/drivers`)
export const getRiskFactors = () => axios.get(`${BASE_URL}/risk-factors`)
export const getRecommendations = () =>
  axios.get(`${BASE_URL}/recommendations`)

export const getRevenueTrend = () =>
  axios.get(`${BASE_URL}/revenue-trend`)