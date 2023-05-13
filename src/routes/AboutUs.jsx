
import PersonCard from "../components/cards/PersonCard";
import { Flex, Heading, Stack, StackDivider } from "@chakra-ui/react";
import meImg from "../assets/me.jpg"
import GeneralContentCard from "../components/cards/GeneralContentCard";
import { appTechnologies, developerCardProps, functionalitiesCardProps } from "./AboutUs.controller";

export default () => {
    document.title = "About us"
    const divider = <StackDivider />;
    return (
        <Stack width="100%" divider={divider} height="80%" display="flex" spacing="4" align="stretch">
            <Flex width="100%" flexDirection="row" alignItems="center" justifyContent="space-around" height="510px">
                <Heading width="30%" textAlign="center" as="h2">About Developer</Heading>
                <PersonCard image={meImg} cardBody={developerCardProps} />
            </Flex>

            <Flex width="100%" flexDirection="row" alignItems="center" justifyContent="space-around" height="510px">
                <GeneralContentCard cardBody={functionalitiesCardProps} />
                <Heading width="30%" textAlign="center" as="h2">About Functionalities</Heading>
            </Flex>

            <Flex width="100%" flexDirection="row" alignItems="center" justifyContent="space-around" height="510px">
                <Heading width="30%" textAlign="center" as="h2">About technologies with which this project was built</Heading>
                <GeneralContentCard cardBody={appTechnologies} />
            </Flex>
        </Stack>
    )
}