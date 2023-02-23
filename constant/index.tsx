import { Projects, TimeLineData, Technologies, Character, Blog } from '@/typings'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'

export const projects: Projects[] = [
    {
        title: 'MERN Memories',
        description:
            "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
        image: '/images/1.png',
        tags: ['Mongo', 'Express', 'React', 'Node'],
        source: 'https://google.com',
        visit: 'https://google.com',
        id: 0,
    },
    {
        title: 'E-Commerce',
        description:
            "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
        image: '/images/2.png',
        tags: ['React', 'JavaScript'],
        source: 'https://google.com',
        visit: 'https://google.com',
        id: 1,
    },
    {
        title: 'WebRTC App',
        description:
            "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
        image: '/images/3.jpg',
        tags: ['React', 'WebRTC'],
        source: 'https://google.com',
        visit: 'https://google.com',
        id: 2,
    },
    {
        title: 'Unichat',
        description:
            'This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application',
        image: '/images/4.jpg',
        tags: ['React', 'ChatEngine', 'Firebase'],
        source: 'https://google.com',
        visit: 'https://google.com',
        id: 3,
    },
]

export const technologies: Technologies[] = [
    {
        id: 1,
        icon: <DiReact size="2rem" />,
        skill: 'Front-End',
        description: 'Experience with <br> React.js',
    },
    {
        id: 2,
        icon: <DiFirebase size="2rem" />,
        skill: 'Back-End',
        description: 'Experience with <br> Node.js and Express',
    },
    {
        id: 3,
        icon: <DiZend size="2rem" />,
        skill: 'UI/UX',
        description: 'Experience with <br> Figma and Material-UI',
    },
]

export const timeLineData: TimeLineData[] = [
    {
        year: 2017,
        text: 'Started my journey',
    },
    {
        year: 2018,
        text: 'Worked as a freelance developer',
    },
    {
        year: 2019,
        text: 'Founded JavaScript Mastery',
    },
    {
        year: 2020,
        text: 'Shared my projects with the world',
    },
    {
        year: 2021,
        text: 'Started my own platform',
    },
]

export const character: Character[] = [
    {
        quality: 'Passion',
    },
    {
        quality: 'Self-Discipline',
    },
    {
        quality: 'Creativity',
    },
    {
        quality: 'Teamwork',
    },
]

export const blog: Blog[] = [
    {
        id: 1,
        title: 'How to use React Hooks',
        image: '/images/news_1.png',
        date: 'June 11, 2021',
    },
    {
        id: 2,
        title: 'What is an Execution Context in JavaScript?',
        image: '/images/news_2.png',
        date: 'June 11, 2021',
    },
    {
        id: 3,
        title: 'What is Hoisting in JavaScript?🤔',
        image: '/images/news_3.png',
        date: 'June 11, 2021',
    },
]
