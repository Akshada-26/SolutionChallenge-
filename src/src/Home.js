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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  WrapItem,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,

} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat } from 'react-icons/bi';
import { AddIcon } from '@chakra-ui/icons';
import { HamburgerIcon } from '@chakra-ui/icons';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Footer from './Footer';

import Home from './Home';
import UserProfile from './UserProfile';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [newPostCaption, setNewPostCaption] = useState('');

  


  <Router>
  <div>
    <Routes>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </Routes>
    <Footer />
  </div>
</Router>
  
  const handleNewPost = () => {
    const newPost = {
      id: Date.now(),
      author: 'New Author',
      avatar: 'https://via.placeholder.com/150',
      content: newPostContent,
      image: newPostImage,
      caption: newPostCaption,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setNewPostImage(null);
    setNewPostCaption('');
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleComment = (postId, commentText) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            comments: [...post.comments, { author: 'You', content: commentText }],
          }
        : post
    );
    setPosts(updatedPosts);
  };

  // Inside your HomePage component in App.js

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file instanceof Blob) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPostImage(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    console.error('Error: Parameter is not a Blob object');
  }
};

  return (

    
    <div className="container">


      <Menu placement="top-start">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <Heading size="2xl" textAlign="center" my="4">
          FARMGRAM
        </Heading>
        <MenuList>
          <MenuItem>
            <label htmlFor="image-upload">Create New Post</label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </MenuItem>
          
          <Menu>
          <MenuButton as={Button} colorScheme='pink'>
            Profile
          </MenuButton>

          <MenuList id="menu">
            <MenuGroup title='Profile'>
              <MenuItem>My Account</MenuItem>
              
              <Router>
      <Routes>
        <Route path="/user-profile" element={<UserProfile />} />
        {/* Other routes */}
      </Routes>
    </Router>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        </MenuList>
      </Menu>
      
      <Wrap justify="center" mb={4}>
        <WrapItem>
          <Avatar name='Dan Abrahmov' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOk2A8xZA1dUg_vU4U6GPwjeKo5DYEGv9Yog&usqp=CAU' />
        </WrapItem>
        <WrapItem>
          <Avatar name='Kola Tioluwani' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAsqk0yY7JoVAsfqk9mB7mPwV0wzU6E7seA&usqp=CAU' />
        </WrapItem>
        <WrapItem>
          <Avatar name='Kent Dodds' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzl6CKuO_ootWKtB0pnAssq90mcXM1GnDf1Q&usqp=CAU' />
        </WrapItem>
        <WrapItem>
          <Avatar name='Ryan Florence' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPLeWyhZXM7XNSnUBMeCa3KY9QaCU-b-khQ&usqp=CAU' />
        </WrapItem>
        <WrapItem>
          <Avatar name='Prosper Otemuyiwa' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3B_C83um7EllSCrZYvT68S0fCPdYXHhvyyQ&usqp=CAU' />
        </WrapItem>
        <WrapItem>
          <Avatar name='Christian Nwamba' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qvsGGfWnrspDriLdWIA69Z7J35n4_uMNWA&usqp=CAU' />
        </WrapItem>
        <WrapItem>
          <Avatar name='Segun Adebayo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvuEv6p52SNngiMZL-HVjE0pCePgHOxaOGg&usqp=CAU' />
        </WrapItem>
      </Wrap>


      {newPostImage && (
        <Card maxW="1000px" mb={4}>
          <CardHeader>Create New Post</CardHeader>
          <CardBody>
            <Input
              placeholder="Enter caption..."
              value={newPostCaption}
              onChange={(e) => setNewPostCaption(e.target.value)}
              mb="2"
            />
            <Image src={newPostImage} alt="Preview" mb="2" />
            <Input
              placeholder="Enter post content..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              mb="2"
            />
          </CardBody>
          <CardFooter>
            <Button onClick={handleNewPost} colorScheme="blue">
              Post
            </Button>
          </CardFooter>
        </Card>
      )}

      {posts.map((post) => (
        <Flex key={post.id} justify="center" alignItems="center" flexDirection="column">
          <Card maxW="1000px" mb={4}>
            <CardHeader>
              <Flex spacing="4">
                <Avatar name={post.author} src={post.avatar} />
                <Heading size="sm">{post.author}</Heading>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              {post.content && <Text>{post.content}</Text>}
              {post.image && <Image src={post.image} alt="Post Image" />}
              {post.caption && <Text>{post.caption}</Text>}
            </CardBody>
            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button
                flex="1"
                variant="ghost"
                leftIcon={<BiLike />}
                onClick={() => handleLike(post.id)}
              >
                Like ({post.likes})
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                Comment
              </Button>
              {/* Comment input field */}
              <Input
                flex="2"
                variant="filled"
                placeholder="Add a comment"
                onChange={(e) => handleComment(post.id, e.target.value)}
              />
            </CardFooter>
          </Card>
         
        </Flex>

        
      ))}
    </div>
    
  );
  
}

export default HomePage;
<footer style={{ backgroundColor: 'lightgray', padding: '20px', textAlign: 'center' }}>
  <nav>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/">Home</Link></li>
      <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/about">About</Link></li>
      <li style={{ display: 'inline', margin: '0 10px' }}><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</footer>;
