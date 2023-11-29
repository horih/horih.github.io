import {
    IconStack2,
    IconMan,
    IconHome,
} from '@tabler/icons-react';

import DemoTabs from './DemoTabs';
import ArticleCard from './ArticleCard';
import { Container, Title, Text, Stack, Paper, Divider, ScrollArea, SimpleGrid, useMantineTheme, Space, Anchor }
    from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';



function Home() {
    return (<>
        <Container size="responsive">
            <Stack>
                <Paper shadow="xs" radius="xl" withBorder p="xl" style={{ width: '100%' }}>
                    <Space h='xl'></Space>
                    <Title order={1} style={{ textAlign: 'center' }}>Welcome To My Page</Title>
                    <Space h='xl'></Space>
                </Paper>
                <Paper shadow="xs" radius="xl" withBorder p="xl" >
                    <Title order={2} style={{ textAlign: 'center' }}>Others...</Title>
                    <Divider my="sm" />
                    <Anchor href="https://github.com/horih" target="_blank">
                        <i className="devicon-github-original colored" style={{ fontSize: '80px' }}></i>
                    </Anchor>
                </Paper>
            </Stack>
        </Container >
    </>);
}

function AboutMe() {
    return (<>
        <Container size="responsive">
            <ScrollArea.Autosize offsetScrollbars mah='600' maw='auto' mx="auto">
                <Stack>
                    <Paper shadow="xs" radius="xl" withBorder p="xl" >
                        <Title order={2} style={{ textAlign: 'center' }}>Affication</Title>
                        <Divider my="sm" />
                        <Title order={3}>University</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>Toyohashi University of Technology</Text>
                        <Title order={3}>Department</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>Computer Science and Engineering</Text>
                        <Title order={3}>Grade</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>Third</Text>
                        <Title order={3}>Labolatory</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>not yet determined</Text>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl" >
                        <Title order={2} style={{ textAlign: 'center' }}>Skills Acquired</Title>
                        <Divider my="sm" />
                        <Title order={3}>TOEIC Listening&Reading IP</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>Score 710</Text>
                        <Title order={3}>EIKEN Grade 2</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>Passed</Text>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl" >
                        <Title order={2} style={{ textAlign: 'center' }}>Achievements</Title>
                        <Divider my="sm" />
                        <Title order={3}>NHK学生ロボコン2022</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>First Place</Text>
                        <Title order={3}>NHK学生ロボコン2023</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>First Place</Text>
                        <Title order={3}>ABURobocon2023</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>First Place</Text>
                    </Paper>
                </Stack>
            </ScrollArea.Autosize>
        </Container>
    </>);
}

function ArticleCards() {
    const data = [
        {
            image:
                'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            url: 'https://qiita.com/horihi/items/03e9058b88319e505bb2',
            title: 'EtherCAT Master on STM32H7',
            category: 'HardWare&SoftWare',
        },
        {
            image:
                'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Wireless Debugger',
            category: 'HardWare&Software',
        },
        {
            image:
                'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'BLDC MotorDriver',
            category: 'HardWare&Software',
        },
        {
            image:
                'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'SatysFi Template on DevContainer',
            category: 'Software',
        }
    ];

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <ArticleCard {...item} />
    ));



    return (
        <div>{slides}</div>
    );
}

function Tools() {

    return (<>
        <Container size="responsive">
            <ScrollArea.Autosize offsetScrollbars mah='600' maw='auto' mx="auto">
                <Stack>
                    <Paper shadow="xs" radius="xl" withBorder p="xl" >
                        <Title order={2} style={{ textAlign: 'center' }}>OS</Title>
                        <Divider my="sm" />
                        <SimpleGrid cols={2}>
                            <i className="devicon-windows8-original" style={{ fontSize: '80px' }}></i>
                            <i className="devicon-ubuntu-plain" style={{ fontSize: '80px' }}></i>
                        </SimpleGrid>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl" >
                        <Title order={2} style={{ textAlign: 'center' }}>Editor</Title>
                        <Divider my="sm" />
                        <SimpleGrid cols={2}>
                            <i className="devicon-intellij-plain" style={{ fontSize: '80px' }}></i>
                            <i className="devicon-vscode-plain" style={{ fontSize: '80px' }}></i>
                        </SimpleGrid>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl" >
                        <Title order={2} style={{ textAlign: 'center' }}>Programing Language</Title>
                        <Divider my="sm" />
                        <SimpleGrid cols={5}>
                            <i className="devicon-c-plain" style={{ fontSize: '80px' }}></i>
                            <i className="devicon-cplusplus-plain" style={{ fontSize: '80px' }}></i>
                            <i className="devicon-java-plain" style={{ fontSize: '80px' }}></i>
                            <i className="devicon-typescript-plain" style={{ fontSize: '80px' }}></i>
                            <i className="devicon-go-original-wordmark" style={{ fontSize: '80px' }}></i>
                        </SimpleGrid>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl" >
                        <Title order={2} style={{ textAlign: 'center' }}>Framework</Title>
                        <Divider my="sm" />
                        <SimpleGrid cols={2}>
                            <i className="devicon-react-original" style={{ fontSize: '80px' }}></i>
                            <i className="devicon-svelte-plain" style={{ fontSize: '80px' }}></i>
                        </SimpleGrid>
                    </Paper>
                </Stack>
            </ScrollArea.Autosize>
        </Container >

    </>);
}




export default function Components() {

    const data = [
        { demo: Home, icon: IconHome, name: 'Home', description: '' },
        {
            demo: AboutMe,
            icon: IconMan,
            name: 'About Me',
            description: 'self-introduction',
        },
        {
            demo: Tools,
            icon: IconStack2,
            name: 'Tools',
            description: 'tools I have used',
        },
        {
            demo: ArticleCards,
            icon: IconStack2,
            name: 'Projects',
            description: 'the works I have developed',
        },
    ];

    return (<>
        <DemoTabs data={data} title="My PortFolio" />
    </>);

}