import React from 'react';
import { Box, Button, Flex, Heading, Image, Text, Wrap, WrapItem,Link, Divider, useDisclosure  } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'




const physicspayment = [
    {
      id:1,
 
      physicsplane:2000,
      Plane:"MONTHLY",
      
    },
    {
      id:2,
      physicsplane:3069,
      Plane:"SIX-MONTH",
      
    },
    {
      id:3,
      
      physicsplane:4149,
      Plane:"YEARLY",
      
    },

    
  ]
const Chemistrypayment = [
    {
      id:1,
 
      chempayment:1000,
      Plane:"MONTHLY",
      
    },
    {
      id:2,
      chempayment:2069,
      Plane:"SIX-MONTH",
      
    },
    {
      id:3,
      
      chempayment:3149,
      Plane:"YEARLY",
      
    },

    
  ]
  
const payment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
const handleProceed=()=>{
    console.log("VIKRANT")
    onOpen()
}

  return (
    <>

    {/* //pHYSICS */}
 <Box bgColor={'yellow'}  w='99%' m='auto' mt='5' borderRadius={'10px'}>
    <Image w={['75%','15%']} h='70px'   margin='auto' src='https://teamwork.jacobs-university.de/download/attachments/149063865/pslogoanimstylized.gif?version=1&modificationDate=1534263176000&api=v2' alt ='heading-1'/>
  </Box>
      <Box  border="1px solid black" mt={2} w='100%' display='grid' gridTemplateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} gap={3} >
    {
     physicspayment.map((e)=>{
       return (
          <Box className='cardcontainer' w={["80%","40%",'60%']} border="1px solid red" h="700px" m='auto'
           mt={5} borderRadius='12px' transition={'.2s'}  
           _hover={{transform:"scale(1.06)"}} bgColor="blackAlpha.800">
     
     <Heading textAlign={'center'} color='white'>{e.Plane}</Heading>
     
     <Image src='https://thumbs.gfycat.com/PhonyAdmirableGrayfox-size_restricted.gif' alt='buynow'></Image>
     
      <Box bgColor={'white'} w={['90%',"90%"]} m='auto'  mt='3'>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 USER</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 EMAIL</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 GB DISK SPACE</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 EMAIL SUPPORT</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>6 MONTHS UPGRADES</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
     </Box>
     <Box  display="flex" justifyContent="space-between" bgColor={'white'} w={['90%',"90%"]} m='auto'  mt='3'>
        <Image w='50%' mb='2' mt='2' h='65px' src='https://banner2.cleanpng.com/20180320/clq/kisspng-indian-rupee-sign-currency-symbol-clip-art-india-rs-png-5ab15451555777.3441298415215708973496.jpg' alt='free'/>        
   
   <Box w='40%'>
     <Heading fontSize={'45px'} >{e.physicsplane}</Heading>
    </Box>
</Box>
      <Box>
    <Text fontWeight={'bold'}>{e.foodName}(VEG)</Text>
       <Box  m='auto'mt='2'mb='1'  w='80%' border={'1px solid red'}>
       <Button w='100%' onClick={handleProceed} bgColor={"blue.300"} color='white' _hover={{backgroundColor:'green'}}>Buy-Now</Button>
       </Box>
      </Box>
   </Box>  
       )
     })
    }
     </Box>
     {/* //Chemistry   */}
  
  <Box bgColor={'yellow.300'}  w='99%' m='auto' mt='5' borderRadius={'10px'}>
    <Image w='30%' h='60px'   margin='auto' src="https://media.tenor.com/rmwpEvLfakAAAAAi/chemistry-organic.gif" alt ='heading-1'/>
  </Box>
      <Box  border="1px solid black" mt={2} w='100%' display='grid' gridTemplateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} gap={3} >
    {
     Chemistrypayment.map((e)=>{
       return (
          <Box className='cardcontainer' w={["80%","40%",'60%']} border="1px solid red" h="700px" m='auto'
           mt={5} borderRadius='12px' transition={'.2s'}  
           _hover={{transform:"scale(1.06)"}} bgColor="blackAlpha.800">
     
     <Heading textAlign={'center'} color='white'>{e.Plane}</Heading>
     
     <Image src='https://thumbs.gfycat.com/PhonyAdmirableGrayfox-size_restricted.gif' alt='buynow'></Image>
     
      <Box bgColor={'white'} w={['90%',"90%"]} m='auto'  mt='3'>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 USER</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 EMAIL</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 GB DISK SPACE</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 EMAIL SUPPORT</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>6 MONTHS UPGRADES</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
     </Box>
     <Box  display="flex" justifyContent="space-between" bgColor={'white'} w={['90%',"90%"]} m='auto'  mt='3'>
        <Image w='50%' mb='2' mt='2' h='65px' src='https://banner2.cleanpng.com/20180320/clq/kisspng-indian-rupee-sign-currency-symbol-clip-art-india-rs-png-5ab15451555777.3441298415215708973496.jpg' alt='free'/>        
   
   <Box w='40%'>
     <Heading fontSize={'45px'} >{e.chempayment}</Heading>
    </Box>
</Box>
      <Box>
    <Text fontWeight={'bold'}>{e.foodName}(VEG)</Text>
       <Box  m='auto'mt='2'mb='1'  w='80%' border={'1px solid red'}>
       <Button w='100%' onClick={handleProceed} bgColor={"blue.300"} color='white' _hover={{backgroundColor:'green'}}>Buy-Now</Button>
       </Box>
      </Box>
   </Box>  
       )
     })
    }
    
       
   </Box>
     {/* //MATH   */}
  
  <Box bgColor={'yellow.300'}  w='99%' m='auto' mt='5' borderRadius={'10px'}>
    <Image w='15%' h='60px'   margin='auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_S_DoPY-GQgXVaQzx0IkAZTHLPKdhGjbv9R_i48XQbPBUL7rA7iSzR92t7woSx_AyAg&usqp=CAU" alt ='heading-1'/>
  </Box>
      <Box  border="1px solid black" mt={2} w='100%' display='grid' gridTemplateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} gap={3} >
    {
     physicspayment.map((e)=>{
       return (
          <Box className='cardcontainer' w={["80%","40%",'60%']} border="1px solid red" h="700px" m='auto'
           mt={5} borderRadius='12px' transition={'.2s'}  
           _hover={{transform:"scale(1.06)"}} bgColor="blackAlpha.800">
     
     <Heading textAlign={'center'} color='white'>{e.Plane}</Heading>
     
     <Image src='https://thumbs.gfycat.com/PhonyAdmirableGrayfox-size_restricted.gif' alt='buynow'></Image>
     
      <Box bgColor={'white'} w={['90%',"90%"]} m='auto'  mt='3'>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 USER</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 EMAIL</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 GB DISK SPACE</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>1 EMAIL SUPPORT</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
<Text textAlign={'center'} mb='2' fontSize={'22px'} color='green' fontWeight={'bold'}>6 MONTHS UPGRADES</Text>
<Divider borderColor="black" w='70%' m={'auto'}/>
     </Box>
     <Box  display="flex" justifyContent="space-between" bgColor={'white'} w={['90%',"90%"]} m='auto'  mt='3'>
        <Image w='50%' mb='2' mt='2' h='65px' src='https://banner2.cleanpng.com/20180320/clq/kisspng-indian-rupee-sign-currency-symbol-clip-art-india-rs-png-5ab15451555777.3441298415215708973496.jpg' alt='free'/>        
   
   <Box w='40%'>
     <Heading fontSize={'45px'} >9000</Heading>
    </Box>
</Box>
      <Box>
    <Text fontWeight={'bold'}>{e.foodName}(VEG)</Text>
       <Box  m='auto'mt='2'mb='1'  w='80%' border={'1px solid red'}>
       <Button w='100%' onClick={handleProceed} bgColor={"blue.300"} color='white' _hover={{backgroundColor:'green'}}>Buy-Now</Button>
    {/* <Button m="auto" onClick={handleProceed} display="block" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} color="white" borderRadius="0px" w={["95%", "95%", "95%"]}> */}
        {/* Buy Now
        </Button>  */}
       </Box>
      </Box>
   </Box>  
       )
     })
    }
   </Box>
   <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
        <ModalContent>
          <ModalHeader>Payment Done !!!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image w="130px" m="auto" src="https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" />
            <Heading mt="20px" size="md">Your Course is Sucessfuly BUY.</Heading>
            <Text>Thanks for For Purchasing This Courese ,We will meet soon. </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} bgColor="green.200" borderRadius="0px">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  
  );
}

export default payment;
