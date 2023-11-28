import React from 'react';
import {
    IconForms,
    IconCalendar,
    IconStack2,
    IconBold,
    IconNotebook,
    IconSlideshow,
} from '@tabler/icons-react';

import { DemoTabs } from './DemoTabs';

import { Container } from '@mantine/core';


const data = [
    { demo: Container, icon: IconForms, name: 'Inputs', description: '20+ input components' },
    {
        demo: Container,
        icon: IconCalendar,
        name: 'Date pickers',
        description: 'Calendar, date pickers, time inputs',
    },
    {
        demo: Container,
        icon: IconStack2,
        name: 'Overlays & Navigation',
        description: 'Modal, HoverCard, Tabs, Stepper',
    },
    { demo: Container, icon: IconNotebook, name: 'Content', description: 'Accordion, Timeline' },
    {
        demo: Container,
        icon: IconBold,
        name: 'Rich text editor',
        description: 'Tiptap based rich text editor',
    },
    { demo: Container, icon: IconSlideshow, name: 'Carousel', description: 'Embla based carousel' },
];

export function Components() {
    return <DemoTabs data={data} title="100+ components" />;
}