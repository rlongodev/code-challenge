import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Heading, HStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState<any[]>();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.github.com/users').then(response => {
            setUsers(response.data.slice(0, 5));
        }).catch(error => {
            // catch error;
        })
    }, []);

    return (
        <>
            <Breadcrumb spacing='8px'>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Heading as='h1' fontSize='40px' size='lg'>Top 5 GitHub Users</Heading>
            <Text>Tap the username to see more information</Text>
            <HStack w={'100%'}>
                {users?.map(user => (
                    <Button onClick={() => {
                        navigate("/person/" + user.login);
                    }} w={'auto'} p={'2px'}>{user.login}</Button>
                ))}
            </HStack>
        </>
    )
}

export default Home;