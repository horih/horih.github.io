/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Paper, Text, Title, AspectRatio, Grid, SimpleGrid, rem, Anchor } from '@mantine/core';
import classes from './ArticleCard.module.css';

interface CardProps {
    image: string;
    title: string;
    category: string;
    url: string;
    desp: string;
}

export default function ArticleCard({ image, title, category, url, desp }: CardProps) {
    const PRIMARY_COL_HEIGHT = rem(100);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
    if (url === '') {
        return (
            <Paper shadow="md" p="xl" radius="md" className={classes.card}>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <Grid gutter="md">
                        <Grid.Col>
                            <div style={{ height: SECONDARY_COL_HEIGHT }}>
                                <Text className={classes.category} size="xs">
                                    {category}
                                </Text>
                                <Title order={3} className={classes.title}>
                                    {title}
                                </Title>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <div style={{ height: SECONDARY_COL_HEIGHT }} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <div style={{ height: SECONDARY_COL_HEIGHT }}>
                            <Text className={classes.category} size="xs">
                            {desp}
                            </Text>
                            </div>
                        </Grid.Col>
                    </Grid>
                    <div style={{ height: PRIMARY_COL_HEIGHT }}>
                        <AspectRatio maw={2000} mx="auto"><img
                          src={image}
                        />
                        </AspectRatio>
                    </div>
                </SimpleGrid>
            </Paper>
        );
    }
    return (
        <Paper shadow="md" p="xl" radius="md" className={classes.card}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                <Grid gutter="md">
                    <Grid.Col>
                        <div style={{ height: SECONDARY_COL_HEIGHT }}>
                            <Text className={classes.category} size="xs">
                                {category}
                            </Text>
                            <Title order={3} className={classes.title}>
                                {title}
                            </Title>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={{ height: SECONDARY_COL_HEIGHT }}>
                            <Anchor href={url} target="_blank">
                                ToLink...
                            </Anchor>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                    <div style={{ height: SECONDARY_COL_HEIGHT }}>
                            <Text className={classes.category} size="xs">
                            {desp}
                            </Text>
                    </div>
                    </Grid.Col>
                </Grid>
                <div style={{ height: PRIMARY_COL_HEIGHT }}>
                    <AspectRatio maw={2000} mx="auto"><img
                      src={image}
                    />
                    </AspectRatio>
                </div>
            </SimpleGrid>
        </Paper>
    );
}
