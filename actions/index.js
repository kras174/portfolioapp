const worksData = [
  {
    id: "1",
    title: "Instaminion.com",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "Wordpress, HTML",
    image: "/assets/img/Instaminion.png",
    preview: "",
  },
  {
    id: "2",
    title: "Keksbi.com",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "HTML",
    image: "/assets/img/Keksbi.png",
    preview: "",
  },
  {
    id: "3",
    title: "Kisel74.ru",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "HTML",
    image: "/assets/img/kisel74.png",
    preview: "",
  },
  {
    id: "4",
    title: "Kvas.com",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "HTML",
    image: "/assets/img/Kvas.png",
    preview: "",
  },
  {
    id: "5",
    title: "MyCompanyWebSite.com",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "HTML",
    image: "/assets/img/MyCompanyWebSite.png",
    preview: "",
  },
];

const categoryData = [
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(worksData);
    }, 50);
  });
};

export const createWork = (newWork) => {
  return new Promise((resolve, reject) => {
    newWork.id = Math.random().toString(36).substr(2, 7);
    worksData.push(newWork);
    setTimeout(() => {
      resolve(worksData);
    }, 50);
  });
};

export const getWorkById = (id) => {
  return new Promise((resolve, reject) => {
    const workIndex = worksData.findIndex((w) => w.id === id);
    const work = worksData[workIndex];
    setTimeout(() => {
      resolve(work);
    }, 50);
  });
};
