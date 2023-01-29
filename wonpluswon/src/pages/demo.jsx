import {Box,Flex,Text,Button,AspectRatio} from '@chakra-ui/react'



const Demo = () => {

    const handleClick = ()=>{
       alert('You have not subscribed. PLease subscribe to get more classes')
    }



    return(
        <div>
            <Box m='auto' w={['90%','90%','75%','75%']} mt='40px' >
                <Text as='b' fontSize={['20px','20px','40px','40px']}>Physics Section</Text>
                <Flex direction={['column','column','row','row']} gap='justify'>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                        <AspectRatio w='90%' m='auto' >
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/Y4klyPaFGnM"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Magnetic Field</Text>
                            <Text>Get the understanding of magnetic field</Text>
                    </Box>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                    <AspectRatio w='90%' m='auto'>
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/UjCey4nC5nA"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Electricity</Text>
                            <Text>Get the understanding of electricity</Text>
                    </Box>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                    <AspectRatio w='90%' m='auto'>
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/wP91Wqrxm2A"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Human Eye</Text>
                            <Text>Get the understanding of your eye</Text>
                    </Box>
                </Flex>
                <Button m='auto' w={['70%','70%','30%','30%']} mt='20px' onClick={handleClick} >More Classes</Button>
            </Box>
            <Box m='auto' w={['90%','90%','75%','75%']} mt='40px' >
            <Text as='b' fontSize={['20px','20px','40px','40px']}>Chemistry Section</Text>
                <Flex direction={['column','column','row','row']} gap='justify'>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                        <AspectRatio w='90%' m='auto' >
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/zUH8iveFHlM"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Chemiostry in everyday life</Text>
                    </Box>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                    <AspectRatio w='90%' m='auto'>
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/0rKTghv0QRA"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Polymers</Text>
                            <Text>Get the understanding of polymers</Text>
                    </Box>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                    <AspectRatio w='90%' m='auto'>
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/e0z7o-5UlQY"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Biomolecules</Text>
                            <Text>Get the understanding of Biomolecules</Text>
                    </Box>
                </Flex>
                <Button m='auto' w={['70%','70%','30%','30%']} mt='20px' onClick={handleClick} >More Classes</Button>
            </Box>
            <Box m='auto' w={['90%','90%','75%','75%']} mt='40px' >
            <Text as='b' fontSize={['20px','20px','40px','40px']}>Mathematics Section</Text>
                <Flex direction={['column','column','row','row']} gap='justify'>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                        <AspectRatio w='90%' m='auto' >
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/YGL9muhmOog"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Parabola</Text>
                            <Text>Get the understanding of parabola</Text>
                    </Box>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                    <AspectRatio w='90%' m='auto'>
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/Pn3LRUHE3z4"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Ellipse</Text>
                            <Text>Get the understanding of ellipse</Text>
                    </Box>
                    <Box w={['90%','90%','30%','30%']} m='auto' boxShadow='base' p='6' rounded='md'>
                    <AspectRatio w='90%' m='auto'>
                            <iframe
                                title='anything'
                                src="https://www.youtube.com/embed/MIK24L1SnOE"
                                allowFullScreen
                            />
                            
                            </AspectRatio>
                            <Text>Hyperbola</Text>
                            <Text>Get the understanding of hyperbola</Text>
                    </Box>
                </Flex>
                <Button m='auto' w={['70%','70%','30%','30%']} mt='20px' onClick={handleClick} >More Classes</Button>
            </Box>
        </div>
    )
}

export default Demo