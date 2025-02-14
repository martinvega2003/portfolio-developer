import imgOne from "../images/project-one-thumbnail.png"
import imgTwo from "../images/project-two-thumbnail.png"
import imgThree from "../images/project-three-thumbnail.png"
import imgFour from "../images/project-four-thumbnail.png"

export const projectsData = [
    {
      id: 1,
      titleEn: "Project I",
      titleEs: "Proyecto I",
      image: imgOne || "https://via.placeholder.com/300",
      description:
        "This project showcases a seamless user experience designed for effective business solutions. It leverages modern technologies to address real-world challenges efficiently.",
      linkToCode: "https://github.com/martinvega2003/dentist-site-project-one",
      linkToDeployment: "https://dentist-site-project-one.vercel.app/",
    },
    {
      id: 2,
      titleEn: "Project II",
      titleEs: "Proyecto II",
      image: imgTwo || "https://via.placeholder.com/300",
      description:
        "A comprehensive project aimed at enhancing online visibility and driving engagement through innovative features tailored to clients' needs.",
      linkToCode: "https://github.com/martinvega2003/dentist-site-project-two",
      linkToDeployment: "https://dentist-site-project-two.vercel.app/",
    },
    {
      id: 3,
      titleEn: "Project III",
      titleEs: "Proyecto III",
      image: imgThree || "https://via.placeholder.com/300",
      description:
        "An advanced solution for optimizing workflows and improving performance metrics, ensuring scalability and efficiency.",
			linkToCode: "https://github.com/martinvega2003/dentist-site-project-three",
			linkToDeployment: "https://dentist-site-project-three.vercel.app/",
    },
		{
      id: 4,
      titleEn: "Project IV",
      titleEs: "Proyecto IV",
      image: imgFour || "https://via.placeholder.com/300",
      description:
        "An advanced solution for optimizing workflows and improving performance metrics, ensuring scalability and efficiency.",
			linkToCode: "https://github.com/martinvega2003/dentist-site-project-four",
			linkToDeployment: "https://dentist-site-project-four.vercel.app/",
    },
  ];