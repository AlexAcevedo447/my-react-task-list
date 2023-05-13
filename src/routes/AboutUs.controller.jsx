import { CardBody } from "../models/cardProps";
import { Technology } from "../models/technology";
import { SiAngular, SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTypescript } from "react-icons/SI"

export const technologies = [new Technology(SiHtml5, "red"), new Technology(SiCss3, "blue"), new Technology(SiJavascript, "yellow"), new Technology(SiTypescript, "blue"), new Technology(SiReact, "aqua"), new Technology(SiAngular, "red"), new Technology(SiNodedotjs, "green"), new Technology(SiExpress, "white"), new Technology(SiMongodb, "green"), new Technology(SiGit, "#ff9100")];

export const developerCardProps = [new CardBody("Name", "Jhon Alexis Paniagua Acevedo"), new CardBody("Technologies", technologies)]

export const functionalitiesCardProps = [new CardBody("Add new task: ", "This functionality lets you add a new task to the dashboard and watch it at the same time. The system lets you know if the process was right or wrong"), new CardBody("Modify a task: ", "This feature lets you modify a certain task if necessary. You can instantly see the changes that were done and system notices you if the process was a success or not"), new CardBody("Delete a task: ", "A function that lets you organize your workspace deleting tasks you don´t need for any reason"), new CardBody("Mark a task as completed: ", "This feature grants you the possibility to know about thee tasks you completed without deleting them")]

const transformedIcons = technologies.map((technology) => {
    const { Component, color } = technology;
    return <Component color={color} size="30px" />
})
export const appTechnologies = [new CardBody(<strong>{transformedIcons[0]}HTML</strong>, "The pages´ skeleton"), new CardBody(<strong>{transformedIcons[1]} CSS</strong>, "The pages´ skin"), new CardBody(<strong>{transformedIcons[2]} JavaScript</strong>, "The interactive actions of the pages"), new CardBody(<strong>{transformedIcons[4]} React</strong>, "The combination of the technologies mentioned before"), new CardBody(<strong>{transformedIcons[transformedIcons.length - 1]} Git</strong>, "This is a life recorder, saves the most important records of the pages´ life")]