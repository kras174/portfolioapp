import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 3000,
});

const categoryData = [
  { id: "c-0", name: "Все" },
  { id: "c-1", name: "React" },
  { id: "c-2", name: "Wordpress" },
  { id: "c-3", name: "Bitrix" },
  { id: "c-4", name: "HTML" },
];

const setAuthHeader = (req) => {
  // const token = req ? getCookieFromReq(req, "jwt") : Cookies.getJSON("jwt");
  const token = Cookies.getJSON("jwt");
  if (token) {
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  }
  return undefined;
};

export const getCategory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categoryData);
    }, 50);
  });
};

export const getWorks = async () => {
  return await axiosInstance.get(`/portfolios`).then((res) => res.data);
};

export const getWorkById = async (id) => {
  return await axiosInstance.get(`/portfolios/${id}`).then((res) => res.data);
};

export const createWork = async (newWork) => {
  newWork.id = Math.random().toString(36).substr(2, 7);
  return await axiosInstance
    .post(`/portfolios`, newWork, setAuthHeader())
    .then((res) => res.data);
};

export const updateWork = async (work) => {
  return await axiosInstance
    .patch(`/portfolios/${work._id}`, work, setAuthHeader())
    .then((res) => res.data);
};

export const deleteWork = async (id) => {
  return await axiosInstance
    .delete(`/portfolios/${id}`, setAuthHeader())
    .then((res) => res.data);
};

export const getSecretData = async () => {
  return await axiosInstance
    .get(`/secret`, setAuthHeader())
    .then((response) => response.data);
};
