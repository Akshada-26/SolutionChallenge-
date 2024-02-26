import { Link } from 'react-router-dom';
import React from 'react';
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
import { HamburgerIcon } from '@chakra-ui/icons';


function UserProfile({ handleImageUpload })
{
// Inside the UserProfile component
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
          {/* Use Link component to navigate to UserProfile page */}
          <MenuItem>
            <Link to="/user-profile">My Account</Link>
          </MenuItem>
          <MenuItem>Payments</MenuItem>
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
}

export default UserProfile;