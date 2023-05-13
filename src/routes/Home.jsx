
import "./Home.css";
import { NsButton } from "../components/buttons/NsButton";
import { useNavigate } from "react-router-dom";
import task_image from "../assets/task_follow.jpg"
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export default () => {
    document.title = "Home"
    const navigate = useNavigate();
    return (
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" width="98%" height="80%" gap="30px">
            <Image src={task_image} className="task_follow" />
            <Heading as="h1" display="flex" flexDirection="row" gap="10px">Welcome to <Text className={"d-scr"}>NS Task Manager</Text></Heading>
            <Text fontSize="2xl">The place where managing your tasks will not be a problem anymore</Text>
            <Text fontSize="xl">Don´t believe me?</Text>
            <NsButton title={"Find out for yourself!"} mode={"glow"} openModal={() => navigate("/tasks")} />
        </Flex>
    )
}