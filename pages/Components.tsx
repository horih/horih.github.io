/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
    IconStack2,
    IconMan,
    IconHome,
    IconTools,
} from '@tabler/icons-react';
// eslint-disable-next-line max-len
import { Container, Title, Text, Stack, Paper, Divider, ScrollArea, SimpleGrid, Space, Anchor }
    from '@mantine/core';
import DemoTabs from './DemoTabs';
import ArticleCard from './ArticleCard';

function Home() {
    return (<>
        <Container size="responsive">
            <Stack>
                <Paper shadow="xs" radius="xl" withBorder p="xl" style={{ width: '100%' }}>
                    <Space h="xl" />
                    <Title order={1} style={{ textAlign: 'center' }}>Welcome To My Page</Title>
                    <Space h="xl" />
                </Paper>
                <Paper shadow="xs" radius="xl" withBorder p="xl">
                    <Title order={2} style={{ textAlign: 'center' }}>Others...</Title>
                    <Divider my="sm" />
                    <SimpleGrid cols={1}><Anchor href="https://github.com/horih" target="_blank" style={{ textAlign: 'center' }}>
                        <i className="devicon-github-original colored" style={{ fontSize: '80px', textAlign: 'center' }} />
                                         </Anchor>
                    </SimpleGrid>
                </Paper>
            </Stack>
        </Container>
            </>
    );
}

function AboutMe() {
    return (<>
        <Container size="responsive">
            <ScrollArea.Autosize offsetScrollbars mah="600" maw="auto" mx="auto">
                <Stack>
                    <Paper shadow="xs" radius="xl" withBorder p="xl">
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
                    <Paper shadow="xs" radius="xl" withBorder p="xl">
                        <Title order={2} style={{ textAlign: 'center' }}>Skills Acquired</Title>
                        <Divider my="sm" />
                        <Title order={3}>TOEIC Listening&Reading IP</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>Score 710</Text>
                        <Title order={3}>EIKEN Grade 2</Title>
                        <Text size="xl" style={{ textAlign: 'right' }}>Passed</Text>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl">
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
                'ecmaster.jpg',
            url: 'https://qiita.com/horihi/items/03e9058b88319e505bb2',
            title: 'EtherCAT Master',
            category: 'HardWare&SoftWare',
            desp: 'EC Master based SOEM',
        },
        {
            image:
                'bmp.jpg',
            title: 'Wireless Debugger',
            category: 'HardWare&Software',
            url: '',
            desp: 'wireless debugger based BMP',
        },
        {
            image:
                'bldc.jpg',
            title: 'BLDC MotorDriver',
            category: 'HardWare&Software',
            url: '',
            desp: 'motordriver based simpleFOC',
        },
        {
            image:
                'https://upload.wikimedia.org/wikipedia/commons/1/1e/SATySFi_logo.svg',
            title: 'SATySFi DevContainer',
            category: 'Software',
            url: 'https://github.com/horih/satysfi-devcontainer',
            desp: 'DockerImage with Language Server',
        },
    ];
    const slides = data.map((item) => (
        <ArticleCard {...item} />
    ));

    return (
        <Container size="responsive">
            <ScrollArea.Autosize offsetScrollbars mah="600" maw="auto" mx="auto"><Stack>{slides}</Stack></ScrollArea.Autosize>
        </Container>
    );
}

function Tools() {
    return (<>
        <Container size="responsive">
            <ScrollArea.Autosize offsetScrollbars mah="600" maw="auto" mx="auto">
                <Stack>
                    <Paper shadow="xs" radius="xl" withBorder p="xl">
                        <Title order={2} style={{ textAlign: 'center' }}>OS</Title>
                        <Divider my="sm" />
                        <SimpleGrid cols={2}>
                            <i className="devicon-windows8-original" style={{ fontSize: '80px', textAlign: 'center' }} />
                            <i className="devicon-ubuntu-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                        </SimpleGrid>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl">
                        <Title order={2} style={{ textAlign: 'center' }}>Editor</Title>
                        <Divider my="sm" />
                        <SimpleGrid cols={2}>
                            <i className="devicon-intellij-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                            <i className="devicon-vscode-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                        </SimpleGrid>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl">
                        <Title order={2} style={{ textAlign: 'center' }}>Programing Language</Title>
                        <Divider my="sm" />
                        <SimpleGrid cols={3}>
                            <i className="devicon-c-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                            <i className="devicon-cplusplus-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                            <i className="devicon-java-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                            <i className="devicon-typescript-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                            <i className="devicon-go-original-wordmark" style={{ fontSize: '80px', textAlign: 'center' }} />
                            <i className="devicon-rust-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                        </SimpleGrid>
                    </Paper>
                    <Paper shadow="xs" radius="xl" withBorder p="xl">
                        <Title order={2} style={{ textAlign: 'center' }}>Framework</Title>
                        <Divider my="sm" />
                        <SimpleGrid cols={2}>
                            <i className="devicon-react-original" style={{ fontSize: '80px', textAlign: 'center' }} />
                            <i className="devicon-svelte-plain" style={{ fontSize: '80px', textAlign: 'center' }} />
                        </SimpleGrid>
                    </Paper>
                </Stack>
            </ScrollArea.Autosize>
        </Container>

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
            icon: IconTools,
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
