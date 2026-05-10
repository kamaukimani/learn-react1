const userName="Paul";
const city="Nairobi";
const image="https://i.imgur.com/mV8PQxj.gif";

export { userName,city,image};
const user = {
  name: "Paul",
  city: "Nairobi",
  bio: "I made this!",
  color: "firebrick",
  links: {
    github: "https://github.com/kamaukimani",
    linkedin: "https://www.linkedin.com/in/paul-kimani-222a29338/",
  },
  projects: [
    {
      id: 1,
      name: "Reciplease",
      about: "A recipe tracking app",
      technologies: ["Rails", "Bootstrap CSS"],
    },
    {
      id: 2,
      name: "Kibbles N Bitz",
      about: "Tinder for dogs",
      technologies: ["React", "Redux"],
    },
    {
      id: 3,
      name: "Alienwares",
      about: "Etsy for aliens",
      technologies: ["React", "Redux", "Rails"],
    },
  ],
};

export default user;