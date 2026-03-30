import { BlogPost, BlogCardLarge, BlogCardSmall } from "./BlogCard";

interface BlogDestaquesSectionProps {
  posts: BlogPost[];
}

export default function BlogDestaquesSection({ posts }: BlogDestaquesSectionProps) {
  if (posts.length === 0) return null;

  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 3);

  return (
    <section className="relative bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <h2 className="text-[26px] lg:text-[38px] leading-[1.2] lg:leading-[1.3] text-laranja mb-6">
          Destaques
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
          {/* Card grande */}
          <div className="lg:w-[775px] lg:shrink-0">
            <BlogCardLarge post={mainPost} />
          </div>

          {/* Cards menores */}
          {sidePosts.length > 0 && (
            <div className="flex flex-col gap-6">
              {sidePosts.map((post) => (
                <BlogCardSmall key={post.postId} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Gradient fade divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_8%,rgba(255,255,255,1)_100%)] pointer-events-none" />
    </section>
  );
}
