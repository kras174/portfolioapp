import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  timeout: 3000,
});

const categoryData = [
  { id: "c-0", name: "Все" },
  { id: "c-1", name: "React" },
  { id: "c-2", name: "Wordpress" },
  { id: "c-3", name: "Bitrix" },
  { id: "c-4", name: "HTML" },
  { id: "c-5", name: "REDUX" },
  { id: "c-6", name: "NEXTJS" },
];

const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, "jwt") : Cookies.getJSON("jwt");
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
  return await axiosInstance.get(`/portfolio`).then((res) => res.data);
};

export const getWorkById = async (id) => {
  return await axiosInstance.get(`/portfolio/${id}`).then((res) => res.data);
};

export const createWork = async (newWork) => {
  newWork.id = Math.random().toString(36).substr(2, 7);
  newWork.preview = newWork.preview.split(",");
  return await axiosInstance
    .post(`/portfolio`, newWork, setAuthHeader())
    .then((res) => res.data);
};

export const updateWork = async (work) => {
  return await axiosInstance
    .patch(`/portfolio/${work._id}`, work, setAuthHeader())
    .then((res) => res.data);
};

export const deleteWork = async (id) => {
  return await axiosInstance
    .delete(`/portfolio/${id}`, setAuthHeader())
    .then((res) => res.data);
};

export const getSecretData = async () => {
  return await axiosInstance
    .get(`/secret`, setAuthHeader())
    .then((response) => response.data);
};
