import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3000";

const worksData = [];

const categoryData = [
  { id: "c-0", name: "Все" },
  { id: "c-1", name: "React" },
  { id: "c-2", name: "Wordpress" },
  { id: "c-3", name: "Bitrix" },
  { id: "c-4", name: "HTML" },
];

export const getCategory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categoryData);
    }, 50);
  });
};

export const getWorks = () => {
  return axios.get(`${BASE_URL}/api/v1/works`).then((res) => res.data);
};

export const createWork = (newWork) => {
  newWork.id = Math.random().toString(36).substr(2, 7);
  return axios
    .post(`${BASE_URL}/api/v1/works`, newWork)
    .then((res) => res.data);
};

export const getWorkById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/works/${id}`).then((res) => res.data);
};

export const updateWork = (work) => {
  return axios
    .patch(`${BASE_URL}/api/v1/works/${work.id}`, work)
    .then((res) => res.data);
};

export const deleteWork = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/works/${id}`).then((res) => res.data);
};

const setAuthHeader = () => {
  const token = Cookies.getJSON("jwt");
  if (token) {
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  }
  return undefined;
};

export const getSecretData = async () => {
  return await axios
    .get(`${BASE_URL}/api/v1/secret`, setAuthHeader())
    .then((response) => response.data);
};
