import { Heading, Text } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Heading as="h1">
            <Text textDecoration="underline" >Todo app</Text>
        </Heading>
    );
}