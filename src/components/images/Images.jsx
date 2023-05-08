import taskImg from "../../assets/task_follow.jpg";
import me from "../../assets/me.jpg";

export function TaskFollowImg() {
    return (
        <img src={taskImg} alt="Task follow up" className="task-follow" />
    )
}

export function MeImg() {
    return (
        <img src={me} alt="" className="me" />
    )
}