import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './ArticleCard.module.css';

interface CardProps {
    image: string;
    title: string;
    category: string;
}

export default function ArticleCard({ image, title, category }: CardProps) {
    return (
        <Paper shadow="md" p="xl" radius="md" className={classes.card} style={{ backgroundImage: image }}>
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Button variant="white" color="dark">
                Read article
            </Button>
        </Paper>
    );
}
