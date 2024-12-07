/**
 * Title: FAQ
 * Description: FAQ - Where user can learn about frequently asked questions
 * Author: Md Abdullah
 * Date: 07/12/2024
 */

const questions = [
  "What are the foods like Steel Yat? How does the mail plan work?",
  "How Do I Eat Fresh and Lean?",
  "How long do my meals last?",
  "What if I don't eat them all at once?",
  "What's in the food? Is it organic? Is it gluten free?",
];

export default function FAQ() {
  return (
    <div className="container mx-auto flex justify-center items-center py-10">
      <div className="max-w-[800px] text-center">
        <h1 className="text-3xl font-bold">Popular Frequently Asked Questions.</h1>
        <p className="mt-4 text-sm text-gray-400">
          <span className="font-semibold text-green-600">Simply Good Food</span> prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?
        </p>

        <div className="w-full mt-4">
          {questions.map((question, index) => (
            <Question key={index} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface QuestionProps {
  question: string;
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className="w-full mt-2 p-3 flex justify-between shadow-sm items-center">
      <h2 className="text-gray-600 font-semibold text-start w-[85%]">{question}</h2>
      <span className="text-orange-600 bg-gray-200 py-1 px-3 rounded-full font-medium">{`>`}</span>
    </div>
  );
};