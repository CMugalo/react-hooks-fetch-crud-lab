import React from "react";

function QuestionList({questions}) {

  const displayedQuestions = questions.map((question) => <li key={question.id}>{question.prompt}</li>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
