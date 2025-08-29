import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { Poll } from "@/lib/polls";

export default function PollCard({ poll }: { poll: Poll }) {
  return (
    <article className="card h-full flex flex-col">
      <div className="mb-2 text-sm muted">{poll.category}</div>
      <h3 className="text-xl font-semibold mb-3">{poll.question}</h3>
      <p className="muted mb-4">
        {poll.options.length} options
        {poll.tags?.length ? ` • ${poll.tags.join(", ")}` : ""}
      </p>
      <div className="mt-auto">
        <Link
          href={`/polls/${poll.id}`}
          className="btn btn-primary inline-flex items-center gap-2"
        >
          Vote Now <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}
