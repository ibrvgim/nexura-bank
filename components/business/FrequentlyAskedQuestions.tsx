"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const questions = [
  {
    id: 0,
    question:
      "What is the difference between a Nexura Personal account and a Nexura Business account?",
    answer:
      "A Nexura Personal account is ideal for managing your personal international finances. A Nexura Business account offers enhanced features tailored for business needs — such as integrating with accounting software, managing team expenses, and granting access to employees or accountants.",
  },

  {
    id: 1,
    question: "Who is eligible for a Nexura Business account?",
    answer:
      "You’re eligible for a Nexura Business account if you operate as a sole trader, freelancer, limited or public company, partnership, or — in some regions — a charity or trust.",
  },

  {
    id: 2,
    question: "How long does the Nexura verification process take?",
    answer: "The verification process typically takes 5 – 7 business days.",
  },

  {
    id: 3,
    question: "What is the security level of Nexura Business?",
    answer:
      "Nexura follows strict security practices to protect your funds. Your money is either held with trusted banking institutions or invested in government-backed liquid assets like bonds. Nexura complies with regulations in all countries where it operates, ensuring transparency and fairness. Regulators closely monitor Nexura to ensure compliance with licensing standards.",
  },
];

function FrequentlyAskedQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState<null | number>(null);

  return (
    <div className="-mx-20 bg-[url(/images/orders-background.webp)] bg-cover bg-center bg-no-repeat py-40">
      <div className="mx-20 rounded-2xl bg-green-50 px-20 py-15 text-green-800">
        <p className="mb-5 w-1/2 text-7xl font-extrabold">
          <span className="uppercase">FAQ</span>s
        </p>

        {questions.map((item) => (
          <QuestionItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        ))}
      </div>
    </div>
  );
}

function QuestionItem({
  id,
  question,
  answer,
  currentQuestion,
  setCurrentQuestion,
}: {
  id: number;
  question: string;
  answer: string;
  currentQuestion: null | number;
  setCurrentQuestion: (value: number | null) => void;
}) {
  const isActive = currentQuestion === id;

  function handleDropdown(value: number) {
    if (currentQuestion === id) setCurrentQuestion(null);
    else setCurrentQuestion(value);
  }

  return (
    <section className="border-b-1 border-b-green-700">
      <button
        className="flex w-full cursor-pointer items-center justify-between py-5 text-lg font-medium tracking-wide"
        onClick={() => handleDropdown(id)}
      >
        {question}
        {isActive ? (
          <ChevronUpIcon className="size-9" />
        ) : (
          <ChevronDownIcon className="size-9" />
        )}
      </button>

      {isActive && (
        <p className="w-3/4 pb-5 text-[17px] text-gray-600">{answer}</p>
      )}
    </section>
  );
}

export default FrequentlyAskedQuestions;
