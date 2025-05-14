import React, { useEffect, useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export default function Questions() {

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [page, setPage] = useState(0);


  const data = {
    questions: [
      {
        question: "What is React?",
        options: ["Library", "Framework", "Language", "Browser"],
        answer: "Library",
        
      },
      {
        question: "What is JSX?",
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JSON Syntax",
          "None",
        ],
        answer: "JavaScript XML",
      },   {
        question: "Who is goat?",
        options: [
          "CR7",
          "Ronaldo",
          "Ronaldo jr DAD",
          "",
        ],
        answer: "",
      },
    ],
    totalQuestions: 3,
  };

  const { questions = [], totalQuestions } = data;

  const handlePrev = (e) => {
    e.preventDefault();
    if (page !== 0) {
      setPage(page - 1);
      setSelectedAnswer(null);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (page + 1 < totalQuestions) {
      setPage(page + 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="relative bg-white flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="flex-1 p-6 overflow-auto relative">
          <h1 className="flex justify-center text-xl md:text-2xl font-bold mb-6 text-gray-800">
            Questions
          </h1>

          <div className="flex items-center justify-end flex-wrap gap-2 mb-4">
      
            <div className="text-sm md:text-lg font-semibold">
              {page + 1}/{totalQuestions}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 shadow-sm mb-4">
            <div className="flex items-start mb-3">
              <div className="bg-[#2A586F] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                {page + 1}
              </div>
              <h2 className="text-md md:text-lg font-medium">
                {questions[page]?.question}
              </h2>
            </div>

            <div className="space-y-3 bg-white p-3">
              {questions[page]?.options.map((option) => (
                <div
                  key={option}
                  className={`p-3 rounded-md flex items-center cursor-pointer w-full md:w-60 group ${selectedAnswer==option?"bg-green-300":"bg-amber-100"}`}
                  onClick={() => setSelectedAnswer(option)}
                >
                  <label className="flex items-center gap-2 cursor-pointer w-full">
                    <input
                      type="radio"
                      name="quiz-answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => setSelectedAnswer(option)}
                      className="hidden"
                    />
                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          selectedAnswer === option
                            ? "bg-blue-600"
                            : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                    <span className="ml-2">{option}</span>
                    
   

      ))                     
    }
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 px-4 py-1 rounded text-white bg-[#2A586F]"
              >
                <IoArrowBack /> Previous
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-1 px-4 py-1 rounded text-white bg-[#2A586F]"
              >
                Next <IoArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
