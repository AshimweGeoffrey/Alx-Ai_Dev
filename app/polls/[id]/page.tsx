"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { getPollById } from "@/lib/polls";

interface PageProps {
  params: {
    id: string;
  };
}

export default function PollDetailPage({ params }: PageProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState<{ [key: string]: number }>({});

  const pollId = parseInt(params.id);
  const poll = getPollById(pollId);

  if (!poll) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Poll Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The poll you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            ← Back to Polls
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;

    setVotes((prev) => ({
      ...prev,
      [selectedOption]: (prev[selectedOption] || 0) + 1,
    }));

    setHasVoted(true);
  };

  const getTotalVotes = () => {
    return Object.values(votes).reduce((sum, count) => sum + count, 0);
  };

  const getPercentage = (option: string) => {
    const total = getTotalVotes();
    if (total === 0) return 0;
    return Math.round(((votes[option] || 0) / total) * 100);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="mb-4 flex items-center justify-between">
          <Link href="/polls" className="text-blue-500 hover:text-blue-600">
            ← Back to Polls
          </Link>
          <button
            className="btn btn-outline"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          >
            Share
          </button>
        </div>

        <div className="card">
          <div className="mb-2 text-sm muted">{poll.category}</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {poll.question}
          </h1>

          {!hasVoted ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-3 mb-6">
                {poll.options.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id={option}
                      name="pollOption"
                      value={option}
                      checked={selectedOption === option}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label
                      htmlFor={option}
                      className="text-lg text-gray-700 cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={!selectedOption}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded transition-colors"
              >
                Submit Vote
              </button>
            </form>
          ) : (
            <div>
              <div className="border-2 border-green-200 bg-green-50 rounded-lg p-4 mb-6">
                <h2 className="text-xl font-semibold text-green-600 mb-2">
                  🎉 Thank you for voting!
                </h2>
                <p className="text-gray-700">
                  You voted for: <strong>{selectedOption}</strong>
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Results ({getTotalVotes()} total votes)
                </h3>
                <div className="space-y-3">
                  {poll.options.map((option) => (
                    <div key={option}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{option}</span>
                        <span className="text-gray-600">
                          {votes[option] || 0} votes ({getPercentage(option)}%)
                        </span>
                      </div>
                      <div className="w-full bar-rail">
                        <div
                          className="bar-fill"
                          style={{ width: `${getPercentage(option)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setHasVoted(false);
                  setSelectedOption("");
                }}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Vote Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
