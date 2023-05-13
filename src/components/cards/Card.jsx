import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Text, Box, Image, Flex } from '@chakra-ui/react'
import { CardProps } from '../../models/cardProps';


export default function baseCard(functionalities) {
    /**
     * @param {CardProps} props;
     */
    return function (props) {
        const { img, title } = props.cardTitle;
        const cardBody = props.cardBody;
        return (
            <Card backgroundColor='blue.0' width="322px" height="509px" maxWidth="322px" maxHeight="509px" overflowY="scroll">
                {!img && !title ? <></> : <CardHeader>
                    {title && <Heading as='h2' color="white.100">{title}</Heading>}
                    {img && <Image src={img} width="100%" height="300px" />}
                </CardHeader>}

                <CardBody>
                    <Stack divider={<StackDivider color="white" />} spacing='4'>
                        {cardBody && cardBody.length > 0 && cardBody.map((item, index) => {
                            return (
                                <Box key={index}>
                                    <Heading color="white.100" size='xs' textTransform='uppercase'>
                                        {typeof item.cardBodyTitle == "string" && item.cardBodyTitle + ": "}
                                        {typeof item.cardBodyTitle == "object" && item.cardBodyTitle}
                                    </Heading>
                                    {typeof item.cardBodyContent == "string" && <Text color="white.100" pt='2' fontSize='sm'>
                                        {item.cardBodyContent}
                                    </Text>}
                                    {typeof item.cardBodyContent == "object" &&

                                        <Flex flexDirection="row" gap="10px" overflowX="scroll">
                                            {item.cardBodyContent.map((technology, index) => {
                                                const { Component, color } = technology;
                                                return (<Text key={index} pt='2' fontSize='sm'>
                                                    <Component size="25px" color={color} />
                                                </Text>)
                                            })}
                                        </Flex>

                                    }


                                </Box>
                            )
                        })}
                        {!cardBody && <Text color="white.100">No content to show</Text>}
                    </Stack>
                </CardBody>
            </Card>
        )
    }
}
