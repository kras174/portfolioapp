import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  timeout: 3000,
});

//TODO: создать API для подгрузки категорий из базы данных
//TODO: создать возможность добавления новых категорий
const categoryData = [
  { id: "c-0", name: "Все" },
  { id: "c-2", name: "Wordpress" },
  { id: "c-3", name: "Bitrix" },
  { id: "c-4", name: "HTML" },
  { id: "c-1", name: "React" },
  { id: "c-5", name: "Redux" },
  { id: "c-6", name: "NextJS" },
  { id: "c-7", name: "VUE" },
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

export async function getAllWorkIds() {
  const works = await axiosInstance.get(`/portfolio`).then((res) => res.data);

  return works.map((work) => {
    return {
      params: {
        id: work._id,
      },
    };
  });
}

export const getWorks = async () => {
  return await axiosInstance.get(`/portfolio`).then((res) => res.data);
};

export const getWorkById = async (id) => {
  return await axiosInstance.get(`/portfolio/${id}`).then((res) => res.data);
};

export const createWork = async (newWork) => {
  newWork.id = Math.random().toString(36).substr(2, 7);
  console.log(newWork.preview);
  if (newWork.preview) {
    const previewArray = newWork.preview.trim().split(",");
    newWork.preview = previewArray;
  }
  return await axiosInstance
    .post(`/portfolio`, newWork, setAuthHeader())
    .then((res) => res.data);
};

export const updateWork = async (work) => {
  console.log(work.preview);
  if (work.preview) {
    const previewArray = work.preview.trim().split(",");
    work.preview = previewArray;
  }
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
