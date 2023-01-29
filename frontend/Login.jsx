import {Input,Button,Box,Flex} from '@chakra-ui/react'


const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit=()=>{
        const data = {
            email,password
        }
        console.log(data)
        fetch('http://localhost:4500/user/login',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json()).then(res=>{
            localStorage.setItem("token",res.token)
        }).catch(err=>console.log(err))
    }


    return (
        <Box>
            <Flex direction='column'>
            <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']} placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']} placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Button mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']} onClick={handleSubmit} >Log In</Button>
            </Flex>
            </Box>
    )
}
export default Login