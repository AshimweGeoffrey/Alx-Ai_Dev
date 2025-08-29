import Link from 'next/link'

export default function Home() {
  const polls = [
    {
      id: 1,
      question: "What's your favorite programming language?",
      options: ["JavaScript", "Python", "TypeScript", "Go"]
    },
    {
      id: 2,
      question: "Which framework do you prefer for web development?",
      options: ["React", "Vue", "Angular", "Svelte"]
    },
    {
      id: 3,
      question: "What's your preferred development environment?",
      options: ["VS Code", "WebStorm", "Vim", "Sublime Text"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          📊 Poll App
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {polls.map((poll) => (
            <div key={poll.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {poll.question}
              </h2>
              <p className="text-gray-600 mb-4">
                {poll.options.length} options available
              </p>
              <Link 
                href={`/polls/${poll.id}`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Vote Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
