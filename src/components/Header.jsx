import { Heading, Text } from "@chakra-ui/react";
import { useNsColorValues } from "./hooks";
import { TasksAPI } from "../services/task_api";
console.log(TasksAPI(this))
export const Header = () => {
    const { fontColor } = useNsColorValues()
    return (
        <Heading as="h1">
            <Text color={fontColor} textDecoration="underline" >Todo app</Text>
        </Heading>
    );
}