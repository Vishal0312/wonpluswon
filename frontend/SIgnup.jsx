import {Box,Flex,Input,Button} from '@chakra-ui/react'


const Signup = () => {

    const [name,setName] = useState('')
    const [gender,setGender] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [age,setAge] = useState('')

    const handleSubmit=()=>{
        const data = {
            name,age,gender,email,password
        }
        console.log(data)
        fetch('https://tame-slug-cummerbund.cyclic.app/user/signup',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json"
            }
        })
    }


    return (
        <Box>
            <Flex direction='column'>
                <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']} variant='flushed' type="text" placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']} variant='flushed' placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)} />
                <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']} variant='flushed' placeholder='Enter specific area for the delivery' value={gender} onChange={(e)=>setGender(e.target.value)} />
                <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']} variant='flushed' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']} variant='flushed' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <Button mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','40%','40%']}>Log In</Button>
            
            </Flex>
            
        </Box>
        
    )
}
export default Signup