import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What US state is the Land of Lincoln?',
        answer: 'Illinois',
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
        imgSrc: 'https://m.media-amazon.com/images/I/714EMQgmsbL._SY522_.jpg',
        answer: 'Dr. Seuss',
    },
    {
        points: 400,
        question: 'Who wrote the Critique of Pure Reason?',
        answer: 'Immanuel Kant',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What is this Cafe called?',
            imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020',
            answer: 'Chaotic Good',
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
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb1tCOwOdOeYcp5iflCvvW95qCqpmNUo-TMIt3ndxzsxzmgmH18iClIIQLPO48ojPg5Rts2AUm9rZBeVPcjnjrjGaLSzCwbipQotY4EhOk3tUoHJjJyZjTqfY5s9MZ5eSkGrrqmom4JXUdHEqE-Ts8E9i-SuFf9xEukJcFBs5NuOhe6ANdODMFYzyV_Q/s16000/Unfinished.jpg",
            answer: 'Keith Haring',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    }
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