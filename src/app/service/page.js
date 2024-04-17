import BlogBoxList from "@/src/components/blog/blogBoxList";
import SmallBlog from "@/src/components/blog/smallBlog";
import TitleText from "@/src/components/titleText";
import { serviceSubTitle, serviceTitle } from "@/src/config/constant";

export default function Blog({ }) {
    return (
        <div className="blog-page">
            <TitleText title={serviceTitle} subTitle={serviceSubTitle} />
            <div className="container">
                <BlogBoxList />
            </div>
            <div className="section-end-space" />
        </div>
    )
}