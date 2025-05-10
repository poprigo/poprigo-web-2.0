import BlogBoxList from "@/src/components/blog/blogBoxList";
import BorderButton from "@/src/components/borderButton";
import TitleText from "@/src/components/titleText";
import { blogSubTitle, blogTitle } from "@/src/config/constant";

export default function Blog({ }) {
    return (
        <div className="blog-page">
            <TitleText title={blogTitle} subTitle={blogSubTitle} />
            <div className="space-container" />
            <div className="space-container" />

            <div className="blog-page-container">
                <div className="blog-main-blog-container" />
                <div className="blog-small-blog-list-container">
                    <Description text="🕐 Posted on 16 March, 2023"/>
                    <div className="space-container" />
                    <div className="space-container" />
                    <Title text="Mobile Application" />
                    <Description text="Illuminate your app vision with bespoke design, where innovation converges with user-centric brilliance. Illuminate your app vision with bespoke design, where innovation converges with user-centric brilliance." />
                    <BorderButton title="Explore" style={{ alignSelf: 'start' }} />
                </div>
            </div>
            <div className="section-end-space" />

            <div className="blog-box-main-container">
                <div className="container">
                    <TitleText title="Special Blog's" subTitle={"RESOURCES"} isUP={true} />
                    <BlogBoxList />
                </div>
                <div className="section-end-space" />
            </div>
        </div>
    )
}

const Title = ({ text }) => (
    <h1 className="blog-h1-title">
        {text}
    </h1>
)

const Description = ({ text }) => (
    <p className="ap-sub-description-text">
        {text}
    </p>
)