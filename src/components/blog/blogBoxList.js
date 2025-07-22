import Link from "next/link";

export default function BlogBoxList({ }) {
    return (
        <div className="blog-box-container">
            <Link href='/blogDetails' className="blog-box">
                <p className="category-text">
                    BUSINESS TALK
                </p>

                <h2 className="sub-title">Understanding Accessibility Needs in the Metaverse</h2>
                <div className="space-container" />

                <p className="description-text">
                    The metaverse’s emergence has ignited a spark in the tech space - but how can we fan
                    that spark into a steady flame? Discover what the metaverse exactly is, how crucial
                    accessibility is for its...
                </p>

                <div className="ap-flex-gap" />
                <div className="blog-box-image">

                </div>
            </Link>

            <Link href='/blogDetails' className="blog-box">
                <p className="category-text">
                    BUSINESS TALK
                </p>

                <h2 className="sub-title">Understanding Accessibility Needs in the Metaverse</h2>
                <div className="space-container" />

                <p className="description-text">
                    The metaverse’s emergence has ignited a spark in the tech space - but how can we fan
                    that spark into a steady flame? Discover what the metaverse exactly is, how crucial
                    accessibility is for its...
                </p>

                <div className="ap-flex-gap" />
                <div className="blog-box-image">

                </div>
            </Link>

            <Link href='/blogDetails' className="blog-box">
                <p className="category-text">
                    BUSINESS TALK
                </p>

                <h2 className="sub-title">Understanding Accessibility Needs in the Metaverse</h2>
                <div className="space-container" />

                <p className="description-text">
                    The metaverse’s emergence has ignited a spark in the tech space - but how can we fan
                    that spark into a steady flame? Discover what the metaverse exactly is, how crucial
                    accessibility is for its...
                </p>

                <div className="ap-flex-gap" />
                <div className="blog-box-image">

                </div>
            </Link>
        </div>
    )
}