import Link from "next/link";
import { polls } from "@/lib/polls";

export default function PollsIndex() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="h2 mb-4">All Polls</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {polls.map((poll) => (
            <article key={poll.id} className="card">
              <div className="mb-2 text-sm muted">{poll.category}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {poll.question}
              </h3>
              <Link href={`/polls/${poll.id}`} className="btn btn-primary">
                Vote Now
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
