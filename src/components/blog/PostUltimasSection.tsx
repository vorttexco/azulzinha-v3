import { BlogPost, BlogCardSmall } from "@/components/shared/BlogCard";

interface PostUltimasSectionProps {
  posts: BlogPost[];
}

export default function PostUltimasSection({ posts }: PostUltimasSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_50%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <h2 className="text-[26px] lg:text-[38px] leading-[1.2] lg:leading-[1.3] text-laranja mb-6">
          Últimas postagens
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <BlogCardSmall key={post.postId} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
