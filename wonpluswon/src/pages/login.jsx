import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
import { Box, Button,Link, Flex, Text, FormControl, FormLabel, Heading, Input, useToast, Icon, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'


const Login = () => {
    const router = useRouter()
    const [data, setdata] = useState({
        email:"",
        password:""
    });
      
    const handleChange = (e) => {
        const {name,value}=e.target
        setdata({...data,[name]:value})
    }
    
    
    
        const handleSubmit = async(e) => {
            e.preventDefault()
           await fetch("https://lazy-bandanna-ant.cyclic.app/users/login",{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                   "content-type":"application/json"
                }
            }).then(res=>
                res.json()
                
                // console.log(res.data.token)
                
            )
            .then(res=>{
                console.log(res)
                localStorage.setItem("token", res.token);
                 router.push('/')
            })
        
    }

    return (
        <>
            <Box bgColor="#f5f5f5" pb="50px" mt={["12","12","12","12","auto"]}>
                <Flex w={["90%", "70%", "70%"]} m="auto" direction={["column", "column", "row"]} justify="space-between">
                    <Box w={["100%", "100%", "45%"]} mt="30px" p="25px" bgColor={"white"}>
                        <Heading size="lg" mb="30px">Existing Customers</Heading>
                        {/* <form onSubmit={handleSubmit}> */}
                        <form onSubmit={handleSubmit} >

                            <FormControl>
                                <FormLabel >*Email address</FormLabel>
                                <Input value={data.email} h="50px"  name='email'border="1px solid black" onChange={handleChange} mb="30px" isRequired type='email' />
                                <FormLabel>*Password</FormLabel>
                                <Input value={data.password} h="50px"  name='password'border="1px solid black" onChange={handleChange} mb="30px" isRequired type='password' />

                            </FormControl>
                            <Link href="/admin-login">
                                <Text as="u" color="red" >Do you have an admin account?</Text>
                            </Link>
                            <Button w="100%" color="white" mt="20px" borderRadius="0px" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} type="submit">SIGN-IN</Button>

                        </form>


                    </Box>
                    <Box w={["100%", "100%", "45%"]} mt="30px" p="25px" h="300px" bgColor="white">
                        <Heading size="lg" mb="30px">Existing Customers</Heading>
                        <Link href="/signup">
                            <Button w="100%" color="black" mb="20px" mt="20px" borderRadius="0px" border="1px solid black" bgColor="white" _hover={{ bgColor: "#28bdb7", color: "black" }} type="submit">REGISTER</Button>
                        </Link>
                       
                    </Box>

                </Flex>
            </Box>
        </>
    )
}

export default Login