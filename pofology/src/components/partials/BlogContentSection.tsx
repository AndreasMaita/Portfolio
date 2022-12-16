import { posts } from "@/data/posts";
import React from "react";
import internal from "stream";
import Post from "../shared/Post";
import SectionTitle from "../shared/SectionTitle";
import Menu from "./Menu";

interface BlogContentSectionProps {
    numberOfPosts: number;
}

class BlogContentSection extends React.Component<BlogContentSectionProps> {
    constructor(props: BlogContentSectionProps) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
                    {posts
                        .filter((_, index) => index < this.props.numberOfPosts)
                        .map((post) => (
                            <Post
                                key={post.id}
                                href={`/content/${post.id}`}
                                thumbnailUrl={post.thumbnailUrl}
                                title={post.title}
                                publishedAt={post.publishedAt}
                            />
                        )
                        )}
                </div>
            </>
        );
    }
}


export default BlogContentSection;