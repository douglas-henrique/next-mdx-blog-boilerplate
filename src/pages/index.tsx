import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { allPosts } from '.contentlayer/data'

type Post = {
  title: string;
  publishedAt: string;
  author: string;
  readingTime: string;
  slug: string;
}

interface PostProps {
  posts: Post[]
}

const Home: NextPage<PostProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS blog with MDX</title>
        <meta name="description" content="Next js Blog using MDX files" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <ul>
          {
            posts.map(post => {
              return (
                <li key={post.slug}> 
                  {post.title} <br/>
                  {post.publishedAt} - {post.readingTime} <br />
                  {post.author}
                </li>
              )
            })
          }
        </ul>


      </main>


    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const posts = allPosts.map(post => {
    return {
      title: post.title,
      publishedAt: post.publishedAt,
      author: post.author,
      readingTime: post.readingTime.text,
      slug: post.slug
    }
  })


  return { props: { posts } }
}


export default Home




