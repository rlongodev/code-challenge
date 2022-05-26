import { Avatar, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Person = () => {
    let params = useParams();
    const [userData, setUserData] = useState<any>();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://api.github.com/users/${params.personId}`).then(response => {
            setUserData(response.data);
        }).catch(error => {
            // catch error;
        })
    }, []);

    return (
        <>
            <Breadcrumb spacing='8px'>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink onClick={() => {
                        navigate("/");
                    }} href='/home'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>{userData?.name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                    src={`${userData?.avatar_url}`}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>{userData?.name}</Text>
                    <Text color={'gray.500'}>{userData?.location}</Text>
                </Stack>
            </Stack>
        </>
    )
};

export default Person;