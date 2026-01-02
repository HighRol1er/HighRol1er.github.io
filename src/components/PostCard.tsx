interface PostCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
}

export function PostCard({
  title,
  description,
  date,
  tags,
  readTime,
}: PostCardProps) {
  return (
    <article className="group p-6 rounded-2xl bg-[#13131a]/60 backdrop-blur-sm border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
        <time>{date}</time>
        <span className="w-1 h-1 rounded-full bg-gray-600" />
        <span>{readTime}</span>
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-medium rounded-md bg-emerald-500/10 text-emerald-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
