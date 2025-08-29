"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreatePollPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);

  const addOption = () => setOptions((o) => [...o, ""]);
  const updateOption = (i: number, v: string) =>
    setOptions((o) => o.map((opt, idx) => (idx === i ? v : opt)));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to an API. Here we just log it.
    console.log({ question, options: options.filter(Boolean) });
    alert("Poll created (mock). Check console log.");
  };

  return (
    <div className="section">
      <div className="container">
        <div className="mb-4">
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            ← Back
          </Link>
        </div>
        <h1 className="h2 mb-4">Create a Poll</h1>
        <form onSubmit={handleSubmit} className="card">
          <label className="block mb-2 text-gray-700 font-medium">
            Question
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
            placeholder="What's your question?"
            required
          />

          <label className="block mb-2 text-gray-700 font-medium">
            Options
          </label>
          <div className="space-y-3 mb-4">
            {options.map((opt, i) => (
              <input
                key={i}
                type="text"
                value={opt}
                onChange={(e) => updateOption(i, e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder={`Option ${i + 1}`}
                required
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={addOption}
              className="btn btn-outline"
            >
              Add Option
            </button>
            <button type="submit" className="btn btn-primary">
              Save Poll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
