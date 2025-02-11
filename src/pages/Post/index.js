import './Post.css'
import styles from './Post.module.css'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from '../../json/posts.json'
import PostModel from '../../components/PostModel'
import ReactMarkdown from 'react-markdown'
import NotFound from '../NotFound'
import DefaultPage from '../../components/DefaultPage'
import PostCard from '../../components/PostCard'

export default function Post() {
    const params = useParams()
    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if (!post) {
        return <NotFound />
    }

    const recommendedPosts = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <PostModel cover={`../../assets/posts/${post.id}/capa.png`} title={post.title}>
                        <div>
                            <ReactMarkdown className="post-markdown-container">
                                {post.content}
                            </ReactMarkdown>
                        </div>
                        <h2 className={styles.titleMorePosts}>
                            Recommended posts
                        </h2>
                        <ul className={styles.recommendedPosts}>
                            {recommendedPosts.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            ))}
                        </ul>
                    </PostModel>}
                />
            </Route>
        </Routes>
    );
}