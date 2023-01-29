import React, { useState } from "react";
// import styles from "../styles/Home.modules.css"
// import { Link } from "react-router-dom";
import {
  Box,
  Hide,
  Image,
 Text,
  Show,Link, Button
} from "@chakra-ui/react";
// import './nav.module.css'
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import { useEffect } from "react";


const Navbar= () => {
  const [size, setSize] = React.useState("");
  const [user, setuser] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();


  
useEffect(() => {
  // Perform localStorage action
  const item = localStorage.getItem('token')
setuser(item)

},[])



  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

const logout=()=>{
 let item= localStorage.removeItem("token")
setuser(item)
  
}


  return (
    <>
      <Box
        margin='auto'
        fontSize="17px"
        // position="fixed"
        top="0"
        width="99%"
      
        alignItems="center"
        bg="white"
        color="black"
        display="flex"
        px="20px"
        justifyContent="space-between"
        zIndex="999"
        bgColor='teal.100'
      >
        <Box display="flex" alignItems="center" gap="5">
          <a href="/">
            <Box w={{ base: "100px", md: "150px" }}>
              <Image w='90px' h='50px'
                src="https://uploads-ssl.webflow.com/5e8ca0127fa02aca66309e1e/5ee690ba9c39a79a1c42ff90_05-B-KidRead.gif"
                alt="navbar_logo"
              />
              <Text fontSize='12px' textAlign='left' fontWeight='bold'>WonPlusWon</Text>
            </Box>
          </a>
          <Hide below="md">
            <a href="/home">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/live">
              <img width='85px'src='https://media1.giphy.com/media/VbV4Pd353kZPfjXtfq/giphy.gif?cid=6c09b952aeanqdo30s8dasdng2uqm2dztkf6xe2urbglwzcy&rid=giphy.gif&ct=s' alt='live'></img>
            </a>
            <a href="/demo">Demo</a></Hide>
        </Box>
        <Box display="flex" alignItems="center" gap="4">
          <Hide below="md">
          <a href="/contact">CONTACT</a>

            {/* <LockIcon  style={{margin:"auto 5px",color:"#ff7846"}} />Login */}
            <Link href={!user && "/login"} >
              {user ? (
                <Box onClick={logout}><UnlockIcon
                    style={{ margin: "auto 5px", color: "#ff7846" }}
                  />
                  Logout
                </Box>
              ) : (
                <Box>
                  <LockIcon style={{ margin: "auto 5px", color: "#ff7846" }} />
                  Login
                </Box>
              )}
            </Link>              
          </Hide>
        </Box>
        <Show below="md">
          <Box>
          <button onClick={() => handleClick(size)} key={size}>
              {<HamburgerIcon boxSize="1.5em" />}
            </button>
            {/* ----------------------------Sidebar----------------------------------------------------------------- */}
            <Drawer onClose={onClose} isOpen={isOpen}>
              {/* <DrawerOverlay /> */}
              <DrawerContent>
                <DrawerCloseButton
                  border="2px solid #38039a"
                  bg="#fff"
                  color="#38039a"
                />
                {/* <DrawerHeader></DrawerHeader> */}
                <DrawerBody bgColor={'blue.100'} border='3px solid green'>
                  <Box className="navbar_right" flexGrow="3" >
                    <a href="/" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Home
                      </p>
                    </a>

                    <a href="/about" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        About
                      </p>
                    </a>

                    <a href="/demo" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Demo
                      </p>
                    </a>
                    <a href="/live" onClick={onClose}>
                      <p onClick={onClose} className="side">
                      <img width='65px'src='https://media1.giphy.com/media/VbV4Pd353kZPfjXtfq/giphy.gif?cid=6c09b952aeanqdo30s8dasdng2uqm2dztkf6xe2urbglwzcy&rid=giphy.gif&ct=s' alt='live'></img>
                      </p>
                    </a>
                    <a href="/plane" onClick={onClose}>
                      <p onClick={onClose} className="side">
                        Suscription
                      </p>
                    </a>
                    <Link href={!user && "/login"} >
              {user ? (
                <Box onClick={logout}>
                  <UnlockIcon
                    style={{ margin: "auto 5px", color: "#ff7846" }}
                  />
                  Logout
                </Box>
              ) : (
                <Box>
                  <LockIcon style={{ margin: "auto 5px", color: "#ff7846" }} />
                  Login
                </Box>
              )}
            </Link>
                    {/* <a href="/login"  onClick={onClose}  ><p onClick={onClose} className='side'>Login</p></a> */}
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Show>
      </Box>
    </>
  );
}

export default Navbar;