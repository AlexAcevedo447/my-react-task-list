import { Link } from "react-router-dom";
import "./AppHeader.css";
import { Heading, Text, Button, useColorMode, Flex } from "@chakra-ui/react";
import { useNsColorValues } from "./hooks";

export default () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const { bg, fontColor } = useNsColorValues();
    return (
        <Flex backgroundColor={bg} className="app-header">
            <Heading as="h1" color={fontColor} className="main-button">
                <Text className="d-scr">NS Task Manager</Text>
            </Heading>

            <nav>
                <ul>
                    <Link className="nav-option" to="/" >
                        <Text as="li" color={fontColor}>Home</Text>
                        <Flex as="span" backgroundColor={fontColor}></Flex>
                    </Link>
                    <Link className="nav-option" to="/tasks">
                        <Text as="li" color={fontColor}>Tasks</Text>
                        <Flex as="span" backgroundColor={fontColor}></Flex>
                    </Link>
                    <Link className="nav-option" to="/about_us">
                        <Text as="li" color={fontColor}>About Us</Text>
                        <Flex as="span" backgroundColor={fontColor}></Flex>
                    </Link>
                </ul>

            </nav>
            <Button color={fontColor} onClick={() => { toggleColorMode(); console.log(colorMode) }} >{colorMode === "light" ? "Light" : "Dark"} mode</Button>
        </Flex>
    )
}