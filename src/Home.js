// HomePage.js
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat } from 'react-icons/bi';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Home() {
  // Your state and functions
  
  return (
    <div className="container">
      {/* Your existing JSX */}
      <Link to="/profile">
        <Button colorScheme="pink">My Account</Button>
      </Link>
      {/* Your existing JSX */}
    </div>
  );
}

export default Home;