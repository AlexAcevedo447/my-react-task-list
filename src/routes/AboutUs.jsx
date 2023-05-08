import "./AboutUs.css";
import PersonCard from "../components/cards/PersonCard";
import lazyNamedExports from "../components/utils/lazyNamedExports";
import { Suspense } from "react";
import { SiAngular, SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTypescript } from "react-icons/SI"
import { Technology } from "../models/technology";
const MeImg = lazyNamedExports(() => import("../components/images/Images"), "MeImg")

export default () => {
    document.title = "About us"
    return (
        <div className="exotic-section">
            <h2>About Developer</h2>
            <div className="exotic-container">
                <Suspense fallback="Loading..." children={<MeImg />} />
                <span className="v-divisor"></span>
                <PersonCard name={"Jhon Alexis Paniagua Acevedo"} email={"paniaguaalexis40@gmail.com"} phone={"3003024459"} technologies={[new Technology(SiJavascript, "technology", "yellow"), new Technology(SiTypescript, "technology", "blue"), new Technology(SiReact, "technology", "aqua"), new Technology(SiAngular, "technology", "red"), new Technology(SiNodedotjs, "technology", "green"), new Technology(SiExpress, "technology", "white"), new Technology(SiMongodb, "technology", "green"), new Technology(SiGit, "technology", "#ff9100")]} />
            </div>
            <span className="h-divisor"></span>
            <h2>About Functionalities</h2>
            <div className="exotic-container">
                <div>
                    <h3>Add new task: </h3>
                    <p>This functionality lets you add a new task to the dashboard and watch it at the same time. The system lets you know if the process was right or wrong</p>
                </div>
                <div>
                    <h3>Modify a task: </h3>
                    <p>This feature lets you modify a certain task if necessary. You can instantly see the changes that were done and system notices you if the process was a success or not</p>

                </div>
                <div>
                    <h3>Delete a task: </h3>
                    <p>A function that lets you organize your workspace deleting tasks you don´t need for any reason</p>
                </div>
                <div>
                    <h3>Mark a task as completed: </h3>
                    <p>This feature grants you the possibility to know about thee tasks you completed without deleting them</p>
                </div>
            </div>
            <h2>About technologies this project was built</h2>
            <div className="exotic-container ">
                <div>
                    <h3><strong><SiHtml5 /> HTML</strong></h3>
                    <p>The pages´ skeleton</p>
                </div>
                <div>
                    <h3><strong><SiCss3 /> CSS</strong></h3>
                    <p>The pages´ skin</p>
                </div>
                <div>
                    <h3><strong><SiJavascript /> JavaScript</strong></h3>
                    <p>The interactive actions of the pages</p>
                </div>
                <div>
                    <h3><strong><SiReact /> React</strong></h3>
                    <p> The combination of the technologies mentioned before</p>
                </div>
                <div>
                    <h3><strong><SiGit /> Git</strong></h3>
                    <p>This is a life recorder, saves the most important records of the pages´ life</p>
                </div>
            </div>
        </div>
    )
}