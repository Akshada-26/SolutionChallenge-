// ProfilePage.js
import React from 'react';
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';

function ProfilePage() {
  // Data for user profile
  const user = {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
  };

  // Dummy previous posts
  const previousPosts = [
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      likes: 10,
      comments: [
        { author: 'Alice', content: 'Nice post!' },
        { author: 'Bob', content: 'Keep it up!' },
      ],
    },
    // More posts
  ];

  return (
    <div className="container">
      <Flex justify="center" align="center" direction="column">
        <Avatar name={user.name} src={user.avatar} />
        <Heading>{user.name}</Heading>
      </Flex>
      
      {/* Display previous posts */}
      {previousPosts.map((post) => (
        <Card key={post.id} maxW="800px" mb={4}>
          <CardHeader>{post.author}</CardHeader>
          <CardBody>
            <Text>{post.content}</Text>
            <Text>Likes: {post.likes}</Text>
            {/* Display comments */}
            {post.comments.map((comment, index) => (
              <Text key={index}>{comment.author}: {comment.content}</Text>
            ))}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default ProfilePage;
