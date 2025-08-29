import Link from "next/link";
import { polls } from "@/lib/polls";
import { CompassIcon, PlusIcon } from "@/components/icons";
import PollCard from "@/components/PollCard";

export default function Home() {
  const featured = polls.slice(0, 3);

  return (
    <div>
      <section className="hero section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="max-w-2xl">
              <h1 className="h1 mb-4 gradient-text">
                Vote on topics that matter
              </h1>
              <p className="lead mb-6">
                Quick, simple polls across programming, web, and tools. Pick a
                side and see what the community thinks in real time.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="#polls"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  <CompassIcon /> Browse Polls
                </Link>
                <Link
                  href="/create"
                  className="btn btn-accent inline-flex items-center gap-2"
                >
                  <PlusIcon /> Create a Poll
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="media-frame glass gradient-border">
                <img
                  src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=1200&auto=format&fit=crop"
                  alt="Team voting illustration"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="polls" className="section">
        <div className="container">
          <div className="panel glass gradient-border mb-6 flex items-end justify-between">
            <h2 className="h2">Featured Polls</h2>
            <Link
              href="/polls"
              className="btn btn-outline inline-flex items-center gap-2"
            >
              Browse all
            </Link>
          </div>

          <div className="grid gap-6 auto-grid md:grid-cols-2 lg:grid-cols-3">
            {featured.map((poll) => (
              <PollCard key={poll.id} poll={poll} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
              <p className="muted">
                See how your choice stacks up in real time.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Lightweight</h3>
              <p className="muted">No accounts needed. Just pick and vote.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Open Source</h3>
              <p className="muted">Built with Next.js and TypeScript.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
