import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

import { useRouter } from 'next/router'
const SignUp = () => {
    const router = useRouter()
const [data, setdata] = useState({
    name:"",
    email:"",
    password:""
});
  
const handleChange = (e) => {
    const {name,value}=e.target
    setdata({...data,[name]:value})
}



    const handleSubmit = async(e) => {
        e.preventDefault()
       await fetch("https://lazy-bandanna-ant.cyclic.app/users/register",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
               "content-type":"application/json"
            }
        }).then(res=>{
            res.json()
            router.push('/login')
             console.log(res)
        })
    //     .then((res)=>{
    //         console.log(res)
    //        
    // })
    .catch((err)=>console.log(err))

    
}

    return (
        <Box bgColor="#f5f5f5" pt="50px" pb="50px" mt={["12","12","12","12","auto"]}>

            <Box w={["90%", "50", "40%"]} m="auto" p="25px" bgColor={"white"}>
                <Heading size="lg" mb="30px">Existing Customers</Heading>
                <form onSubmit={handleSubmit}>

                    <FormControl>
                        <FormLabel >*Your Name</FormLabel>
                        <Input h="50px" onChange={handleChange} value={data.name} border="1px solid black" name='name' mb="30px" />
                        <FormLabel >*Email address</FormLabel>
                        <Input value={data.email} h="50px" border="1px solid black" onChange={handleChange} mb="30px" isRequired name='email' type='email' />
                        <FormLabel>*Password</FormLabel>
                        <Input value={data.password} h="50px" border="1px solid black" onChange={handleChange} mb="30px" name="password" isRequired type='password' />

                    </FormControl>
                    <Text color="black" as="u" >Do you have a raferral code?</Text>
                 
                   <Button w="100%" color="white" mt="20px" borderRadius="0px" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} type="submit">Sign Up</Button>
 
                </form>


            </Box>


        </Box>

    )
}

export default SignUp