// src/pages/ChallengesPage.js
import React, { useState } from 'react';
import './ChallengesPage.css';

const ChallengesPage = () => {
  const [quizLink, setQuizLink] = useState('');
  const [leaderboard, setLeaderboard] = useState([
    { name: 'Alice', score: 95 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 75 },
  ]);

  const handleCreateQuiz = () => {
    const generatedLink = `https://eduorbitquiz.com/quiz-${Math.random().toString(36).substring(7)}`;
    setQuizLink(generatedLink);
  };

  return (
    <div className="challenges-page">
      <h1>Challenges and Quizzes</h1>
      <div className="quiz-creation">
        <h2>Create a Quiz</h2>
        <button onClick={handleCreateQuiz}>Generate Quiz Link</button>
        {quizLink && (
          <p>
            Share this quiz link with your friends: <a href={quizLink}>{quizLink}</a>
          </p>
        )}
      </div>
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChallengesPage;
