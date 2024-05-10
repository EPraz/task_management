const generatePath = (title) => {
  // Replace spaces with underscores and convert to lowercase
  return title.replace(/\s+/g, "_").toLowerCase();
};

export const MenuHomePage = [
  {
    title: "Departamento A",
    path: generatePath("Departamento A"),
  },
  {
    title: "Departamento B",
    path: generatePath("Departamento B"),
  },
];
