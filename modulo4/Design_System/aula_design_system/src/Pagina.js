
import { Button } from '@chakra-ui/react'
import { MdBuild , MdCall } from "react-icons/md"
import { HStack, FaFacebook, FaTwitter } from "react/jsx-no-undef"

export const Pagina = () => {
    return(

    <>
        <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
            Settings
        </Button>

        <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
            Call us
        </Button>

        <Button isLoading colorScheme='teal' variant='solid'>
            Email
        </Button>     

        <Button
            isLoading
            loadingText='Submitting'
            colorScheme='teal'
            variant='outline'
        >
            Submit
        </Button>

        <Button isLoading colorScheme='teal' variant='solid'>
            Email
        </Button>

        <HStack>

            <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                Facebook
            </Button>
        
            <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                Twitter
            </Button>

        </HStack>

    </>

   )
}
