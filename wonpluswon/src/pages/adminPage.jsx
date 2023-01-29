
import {Box,Flex,Text,Input,Button,AspectRatio,Grid,GridItem} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'

const AdminPage = () => {
    const [title,setTitle] = useState('')
    const [subject,setSubject] = useState('')
    const [url,setUrl] = useState('')
    const [products,setProducts] = useState([])
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://lazy-bandanna-ant.cyclic.app/admin/users').then(res=>res.json()).then(res=>setUsers(res))
    },[users.length])

    useEffect(()=>{
        fetch('https://lazy-bandanna-ant.cyclic.app/users/products').then(res=>res.json()).then(res=>setProducts(res))
    },[products.length])

    const del=(ID)=>{
        const token = localStorage.getItem('token')
        fetch('https://lazy-bandanna-ant.cyclic.app/products/delete/'+ID,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
                "token":token
            }      
        }).then(res=>console.log(res))
    }

    const handleSubmit=()=>{
        const token = localStorage.getItem('token')
        const data = {
            title,subject,url
        }
        console.log(data,token)
        fetch('https://lazy-bandanna-ant.cyclic.app/products/create',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json",
                "token":token
            }
        }).then(res=>console.log(res))
    }

    //https://lazy-bandanna-ant.cyclic.app/users/products

    return (
        <div>
            <Box>
                <Text>Welcome</Text>
                <Box m='auto' mt='50px' w='80%' >
                    <Text fontSize='40px'>Overview</Text>
                    <Flex  direction={['column','column','row','row']} justifyContent='space-evenly'>
                        <Box p='10px' w={['90%','90%','30%','30%']} border='1px solid black' borderRadius='10px'>
                            <Text>Users</Text>
                            <Text>{users.length} total users</Text>
                        </Box>
                        <Box p='10px' border='1px solid black' w={['90%','90%','30%','30%']} borderRadius='10px'>
                            <Text>Subscribed Users</Text>
                            <Text>{users.length} total users</Text>
                        </Box>
                        <Box p='10px' border='1px solid black' borderRadius='10px' w={['90%','90%','30%','30%']}>
                            <Text>Classes</Text>
                            <Text>{products.length} classes are in application</Text>
                        </Box>
                    </Flex>
                    
                </Box>
                <Box>
                    <Text mt='50px' fontSize='40px'>Add another class</Text>
                    <Box >
                        <Flex m='auto' direction='column'>
                            <Input m='auto' w={['90%','90%','40%','40%']} type='text' placeholder='Enter title for the Class' value={title} onChange={(e)=>setTitle(e.target.value)} />
                            <Input m='auto' w={['90%','90%','40%','40%']} type='text' placeholder='Enter Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                            <Input m='auto' w={['90%','90%','40%','40%']} type='text' placeholder='Enter url for the Class' value={url} onChange={(e)=>setUrl(e.target.value)}/>
                            <Button onClick={handleSubmit} m='auto' w={['90%','90%','40%','40%']}>Add to the classes</Button>
                        </Flex>
                    </Box>
                </Box>
                <Text fontSize='40px' mt='60px' >Classes</Text>
                <Grid mt='40px' templateRows='auto' templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)']} gap={4}>
                    {products?products.map((e)=>{
                        return (
                            <GridItem style={{border:'1px solid black',width:'90%',margin:'auto'}} key={e._id}>
                                <Text>{e.title}</Text>
                                <Text>{e.subject}</Text>
                                    <AspectRatio w='90%' m='auto' >
                                        <iframe
                                            title='anything'
                                            src =  {e.url}
                                            allowFullScreen
                                        />
                            
                                    </AspectRatio>
                                <Button onClick={()=>del(e._id)}>delete</Button>
                            </GridItem>
                        )
                    }) : <h1>Add your first product</h1>}
                </Grid>
            </Box>
        </div>
    )
}

export default AdminPage