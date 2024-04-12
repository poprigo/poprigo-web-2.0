import BlogBoxList from "@/src/components/blog/blogBoxList";
import SmallBlog from "@/src/components/blog/smallBlog";
import TitleText from "@/src/components/titleText";
import { blogSubTitle, blogTitle } from "@/src/config/constant";

export default function Blog({ }) {
    return (
        <div className="blog-page">
            <TitleText title={blogTitle} subTitle={blogSubTitle} />
            <div className="blog-page-container">
                <div className="blog-main-blog-container">
                    <div className="main-blog-details-container">
                        <p className="blog-date-text">Posted on 16 March, 2023</p>
                        <div className="space-container" />
                        <h2 className="sub-title">Understanding Accessibility Needs in the Metaverse</h2>
                    </div>
                </div>
                <div className="blog-small-blog-list-container">
                    <SmallBlog />
                    <SmallBlog />
                    <SmallBlog />
                    <SmallBlog />
                </div>
            </div>
            {/* <div className="section-end-space" /> */}

            <div className="blog-box-main-container">
                <div className="container">
                    <TitleText title="Special Blog's" subTitle={"RESOURCES"} isUP={true} />
                    {/* <TitleText title={"Special Blog's"} /> */}
                    <BlogBoxList />
                </div>
                <div className="section-end-space" />
            </div>
        </div>
    )
}