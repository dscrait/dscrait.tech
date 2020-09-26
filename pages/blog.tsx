import Head from 'next/head';
import MediumBlogContainer from 'src/components/mediumBlogContainer';

const Blog = () => (
    <>
        <Head>
            <title>DSC-RAIT Medium Blogs</title>
        </Head>
        <MediumBlogContainer>
        <blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://medium.com/developer-student-club-rait">Developer Student Club, RAIT - Medium</a></h4><p>A community of budding developers, entrepreneurs and innovators, getting ready to take on real-world challenges by harnessing the power of technlogy.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
    </MediumBlogContainer>
    </>
);

export default Blog;

