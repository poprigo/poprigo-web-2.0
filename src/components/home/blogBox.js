export default function BlogBox({ title = "", subTitle = "", date = "", image }) {
    return (
        <div className="blog-item">
            <div className="blog-image"></div>
            <div className="blog-content">
                <h2 className="blog-title-text">Understanding Accessibility Needs in the Metaverse</h2>
                <div className="space-container" />

                <p className="description-text">
                    The metaverse’s emergence has ignited a spark in the tech space - but how can we fan
                    that spark into a steady flame? Discover what the metaverse exactly is, how crucial
                    accessibility is for its...
                </p>

                <div className="space-container" />
                <div className="space-container" />

                <p className="blog-date-text">Posted on 16 March, 2023</p>
            </div>
        </div>
    );
}