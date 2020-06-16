const worksData = [
  {
    id: "1",
    title: "Instaminion.com",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "Some frameworks",
    image: "/assets/img/Instaminion.png",
    preview: "",
  },
  {
    id: "2",
    title: "Keksbi.com",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "Some frameworks",
    image: "/assets/img/Keksbi.png",
    preview: "",
  },
  {
    id: "3",
    title: "Kisel74.ru",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "Some frameworks",
    image: "/assets/img/kisel74.png",
    preview: "",
  },
  {
    id: "4",
    title: "Kvas.com",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "Some frameworks",
    image: "/assets/img/Kvas.png",
    preview: "",
  },
  {
    id: "5",
    title: "MyCompanyWebSite.com",
    releaseYear: 2020,
    description: "BlaBlaBla",
    stack: "Some frameworks",
    image: "/assets/img/MyCompanyWebSite.png",
    preview: "",
  },
];

const categoryData = [
  { id: "c-1", name: "react" },
  { id: "c-2", name: "wordpress" },
  { id: "c-3", name: "bitrix" },
  { id: "c-4", name: "html" },
];

export const getCategory = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categoryData);
    }, 100);
  });
};

export const getWorks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(worksData);
    }, 100);
  });
};

export const getWorkById = (id) => {
  return new Promise((resolve, reject) => {
    const workIndex = worksData.findIndex((w) => w.id === id);
    const work = worksData[workIndex];
    setTimeout(() => {
      resolve(work);
    }, 100);
  });
};
