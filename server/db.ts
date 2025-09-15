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
        imgSrc: "https://cdn.britannica.com/49/1949-050-39ED83BA/Flag-South-Korea.jpg",
        answer: 'South Korea',
    },
    {
        points: 300,
        question:
            'Who wrote this book?',
        imgSrc: '/seuss.jpg',
        answer: 'Dr. Seuss',
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
            answer: '4',
        },
        {
            points: 200,
            question:
                'What school name does this image remind you of?',
            imgSrc: 'https://socialwelfare.library.vcu.edu/wp-content/uploads/2014/02/Horace-Mann-9397522-1-402.jpg',
            answer: 'HoraceMann',
        },
        {
            points: 300,
            question: 'What is the name of this bakery/cafe?',
            imgSrc: 'https://cdn.columbusunderground.com/wp-content/uploads/2024/12/ParisBaguette-AK3-1536x864.jpg',
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
            'What is the name of this food?',
        imgSrc: 'https://littlesunnykitchen.com/wp-content/uploads/Chicke-tikka-masala-2-7.jpg',
        answer: 'Chicken Tikka Masala',
        },
        {
        points: 300,
        question: 'What country is this?',
        imgSrc: 'https://hips.hearstapps.com/hmg-prod/images/places-in-italy-lead-marco-bottigelli-65e6208eb4a69.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*',
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