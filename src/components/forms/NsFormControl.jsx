import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage } from "@chakra-ui/react"
import { useState } from "react"

export default function ({ label, helperMessage, validator, inputType, charactersLimit, value, stateChanger }) {

    const handleInputChange = (e) => stateChanger(e.target.value)

    const isError = validator ? validator(value, charactersLimit) : []
    return (
        <FormControl isInvalid={isError.length > 0}>
            <FormLabel color="white.100">{label}</FormLabel>
            <Input required={true} color="white.100" type={inputType} value={value} onChange={handleInputChange} />
            {!isError.length > 0 ? (
                <FormHelperText>
                    {helperMessage}
                </FormHelperText>
            ) : (
                <FormErrorMessage display="flex"
                    flexDirection="column" alignItems="start" justifyContent="center">{isError.map((message, index) => <p key={index}>* {message}</p>)}</FormErrorMessage>
            )}
        </FormControl>
    )
}