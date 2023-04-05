export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "What is the Zima App used for?",
    image: "https://s3cdn.yourator.co/banners/banners/000/001/522/home/8a8ca7e2fd2aab8efb737d9d16ef0f8782d1c47f.png",
    answers: [
      "Meet new people",
      "Book flights",
      "Buy cryptocurrency",
      "Get coupons",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "What industry is Goka in?",
    image: "https://i.imgur.com/3rrLPZt.png",
    answers: [
      "Manufacturing",
      "Construction",
      "Entertainment",
      "Web3",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText: "What can I win in Goka Mooncrates?",
    image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQ3NjFhYmFkZDI2YmJmM2QzNjA5YjliZTc1NTY2MjE0NmViNjMzNSZjdD1n/ZuhjSK9ihdspZzni2l/giphy.gif",
    answers: [
      "Concert Tickets",
      "Bitcoin",
      "Starbucks Gift Cards",
      "All of the above",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Who wrote the Bitcoin Whitepaper?",
    answers: ["Luke Skywalker", "Vitalik Buterin", "Satoshi Nakamoto", "Donald Trump"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "If you want a Goka Mooncrate, select Goka as the answer",
    answers: ["Goku", "Goko", "Goki", "Goka"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
