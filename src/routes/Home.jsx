
import "./Home.css";
import { NsButton } from "../components/buttons/NsButton";
import { useNavigate } from "react-router-dom";
import lazyNamedExports from "../components/utils/lazyNamedExports";
import { Suspense } from "react";

const TaskFollowImg = lazyNamedExports(() => import("../components/images/Images"), "TaskFollowImg")

export default () => {
    document.title = "Home"
    const navigate = useNavigate();
    return (
        <div className="exotic-section">
            <Suspense fallback="Loading..." children={<TaskFollowImg></TaskFollowImg>} />
            <h1>Welcome to <strong className="dancing-script">NS Task Manager</strong></h1>
            <div className="description">
                <p>The place where managing your tasks will not be a problem anymore</p>
                <p>Don´t believe me?</p>

            </div>
            <NsButton title={"Find out for yourself!"} mode={"glow"} openModal={() => navigate("/tasks")} />
        </div>
    )
}