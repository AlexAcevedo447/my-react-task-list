
import { useNavigate } from "react-router-dom";
import task_image from "../assets/task_follow.jpg"
import { Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { useNsColorValues } from "../components/hooks";

export default () => {
    document.title = "Home"
    const navigate = useNavigate();
    const { fontColor } = useNsColorValues();
    return (
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" width="98%" height="80%" gap="30px">
            <Image src={task_image} borderRadius="20px" width="70%" />
            <Heading color={fontColor} as="h1" display="flex" flexDirection="row" gap="10px">Welcome to <Text className={"d-scr"}>NS Task Manager</Text></Heading>
            <Text color={fontColor} fontSize="2xl">The place where managing your tasks will not be a problem anymore</Text>
            <Text color={fontColor} fontSize="xl">Don´t believe me?</Text>
            <Button variant="outline" border="3px solid" borderColor={fontColor} borderRadius="0px" padding="25px" openModal={() => navigate("/tasks")}>Find out for yourself!</Button>
        </Flex>
    )
}