import React, { useState, useEffect, useRef } from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Image,
  CloseButton,
  calc,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Home() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  //const bg = useColorModeValue("white", "#12101D");
  const mobileNav = useDisclosure();

  return (
    <Box
      bgImage="url('/img/background.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="full"
      h="100vh"
      // h={alert(height + "ss")}
      // h={`calc(100vh-${height}px)`}
      // h="100vh"
    >
      <chakra.header
        bg="#12101D"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        ref={ref}
      >
        {console.log(height)}
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Image
            src="/logo.svg"
            width={{
              base: "100%",
              sm: "200px",
              md: "230px",
              lg: "250px",
              xl: "270px",
            }}
          />
          {/* <chakra.h1
              fontSize="xl"
              fontWeight="medium"
              color="#17C1F6"
              ml="12"
            >
              Dracula Game
            </chakra.h1> */}

          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="white"
              fontFamily="EB Garamond"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">MIGRATE</Button>
              <Button variant="ghost">RISKY GAME</Button>
              <Button variant="ghost">WOOL POUCHES</Button>
              <Button variant="ghost">LAND</Button>
              <Button variant="ghost">ALPHA GAME</Button>
              <Button variant="ghost">WHITEPATER</Button>
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="#12101D"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  MIGRATE
                </Button>
                <Button w="full" variant="ghost">
                  RISKY GAME
                </Button>
                <Button w="full" variant="ghost">
                  WOOL POUCHES
                </Button>
                <Button w="full" variant="ghost">
                  LAND
                </Button>
                <Button w="full" variant="ghost">
                  WHITEPATER
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
}
