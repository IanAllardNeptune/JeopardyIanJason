import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What year was Ian\'s first at Horace Mann',
        answer: '2022',
    },
    {
        points: 200,
        question:
            'Which country\'s flag is this?',
        imgSrc: "https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg",
        answer: 'Myanmar',
    },
    {
        points: 300,
        question:
            'What Ivy League school has the highest Native American enrollment (a whoppping 1%)?',
        answer: 'Dartmouth',
    },
    {
        points: 400,
        question: 'What is Ian\'s predominant ancestral country',
        answer: 'Cananda (French Canada)',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'How many 400-level courses does Ian take at Horace Mann this year?',
            imgSrc: 'https://www.shutterstock.com/image-illustration/four-hundred-3d-illustration-golden-260nw-1985281622.jpg',
            answer: 'Granite',
        },
        {
            points: 200,
            question:
                'What is this Cafe called?',
            imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020',
            answer: 'Chaotic Good',
        },
        {
            points: 300,
            question: 'What programming language is the below code?',
            imgSrc: '/programming_language.png',
            answer: 'Javascript',
        },
        {
            points: 400,
            question:
                'Who painted this?',
            imgSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/500px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
            answer: 'Van Gogh',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'Who is the future of the Patriots Dynasty?',
        imgSrc:
            "https://a.espncdn.com/i/headshots/nfl/players/full/4431452.png",
        answer: 'Drake Maye',
    },
     {
        points: 200,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    },
     {
        points: 300,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    },
     {
        points: 400,
        question:
            'What city does Ian want to live in when he is retired',
        answer: 'NYC',
    }
]);


const categories = [
    {
        title: 'My Past',
        questions: pastQuestions
    },
    {
        title: 'My Present',
        questions: presentQuestions
    },
    {
        title: 'My Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}