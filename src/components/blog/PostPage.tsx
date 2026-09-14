import { BlogPost } from "@/components/shared/BlogCard";
import PostContent from "./PostContent";
import PostCtaSection from "./PostCtaSection";
import PostUltimasSection from "./PostUltimasSection";

interface PostPageProps {
  post: BlogPost;
  recentPosts: BlogPost[];
}

export default function PostPage({ post, recentPosts }: PostPageProps) {
  return (
    <>
      <PostContent post={post} />
      <PostCtaSection />
      <PostUltimasSection posts={recentPosts} />
    </>
  );
}
