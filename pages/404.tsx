import { Center, Container, Stack, Title } from '@mantine/core';
import Head from 'next/head';
import { title } from 'process';
import { APP_NAME_WITH_SEP, SEPARATOR } from '../configs/appConfigs';
import AppWrapper from '../layouts/AppWrapper';


function Custom404() {
    return (
        <>
            <Head>
                <title>{`${APP_NAME_WITH_SEP} Page not found ${SEPARATOR} 404`}</title>
                <meta name="description" content="The page you are looking for was not found." />
            </Head>
            <Container className='full-height'>
                <Center className='h-100'>
                    <Stack>
                        <Title order={3} align="center">404</Title>
                        <Title align='center'>Page Not Found</Title>
                    </Stack>
                </Center>
            </Container>
        </>
    )
}

Custom404.PageLayout = AppWrapper;

export default Custom404