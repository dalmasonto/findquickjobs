import { useEffect, useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Title,
    Group,
    Container,
    Drawer,
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
    Space,
} from '@mantine/core';
// import CustomFooter from '../common/CustomFooter';
import { NotificationsProvider } from '@mantine/notifications';
import { IconPlus } from '@tabler/icons';
import CustomNavlink from '../components/common/CustomNavlink';
import { APP_NAME, navlinks } from '../configs/appConfigs';
import { MantineWrapper } from './MantineWrapper';
import { ColorSchemeToggle } from '../components/theme/ColorSchemeToggle';


export default function AppWrapper(props: any) {
    const [opened, setOpened] = useState(false);

    const theme = useMantineTheme()

    return (
        <AppShell

            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            // navbar={
            //   <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
            //     <Text>Application navbar</Text>
            //   </Navbar>
            //   </MediaQuery>
            // }
            // aside={
            //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //       <Text>Application sidebar</Text>
            //     </Aside>
            //   </MediaQuery>
            // }
            // footer={
            //   <Footer height={60} p="md">
            //     Application footer
            //   </Footer>
            // }
            header={
                <Header height={60} sx={theme => ({
                    borderBottom: "none",
                })}>
                    <Container size="xl" className='h-100'>
                        <Group align="center" position="apart" className="h-100">
                            <Title order={4} style={{ textTransform: "uppercase" }}>{APP_NAME}</Title>
                            <Group>
                                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                                    <Group className='h-100'>
                                        {
                                            navlinks.filter(l => l.in_nav).map((link: any, i: any) => (
                                                <CustomNavlink key={`_navlink_${i}`} navlink={link} />
                                            ))
                                        }
                                    </Group>
                                </MediaQuery>
                            </Group>
                            <div className="h-100">
                                <Group className='h-100'>
                                    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                                        <Burger
                                            opened={opened}
                                            onClick={() => setOpened((o) => !o)}
                                            size="sm"
                                            color={theme.colors.gray[6]}
                                        />
                                    </MediaQuery>
                                    {/* <PinkButton btnDetails={{startIcon: <IconPlus />, label: "SUBMIT LISTING", click: () => {}}} /> */}
                                    {/* <BlueButton btnDetails={{icon: <IconPlus />, label: "SUBMIT LISTING", click: () => {}}} /> */}
                                    {/* <Space /> */}
                                    <ColorSchemeToggle />
                                </Group>
                            </div>
                        </Group>
                    </Container>
                </Header>
            }
            padding={0}
        >
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Register"
                padding="xl"
                size="lg"
                position='left'
            >
                opened
                {/* Drawer content */}
            </Drawer>
            <div className="min-height">
                {props?.children}
            </div>
            {/* <CustomFooter /> */}
        </AppShell>
    );
}