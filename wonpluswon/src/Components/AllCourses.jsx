import {Menu, MenuList, MenuButton,Button,MenuItem} from "@chakra-ui/react"
import {ChevronDownIcon} from '@chakra-ui/icons'

 const  AllCourses =()=>{

    return (<>
   <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    All Courses
  </MenuButton>
  <MenuList>
  <MenuItem>IIT Jee</MenuItem>
    <MenuItem>NEET</MenuItem>
    <MenuItem>GATE</MenuItem>
    <MenuItem>School Prep</MenuItem>
    <MenuItem>Defence</MenuItem>
  </MenuList>
</Menu>
    </>)
}

export default AllCourses