import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { allPosts } from '.contentlayer/data'

type Post = {
  title: string
  publishedAt: string
  author: string
  readingTime: string
  slug: string
  subtitle: string
  avatar: string
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
        <h1>Blog </h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={`posts/${post.slug}`}>
                  <a>
                    <small>{post.readingTime}</small>
                    <h2> {post.title} </h2>
                    <p>{post.subtitle}</p>
                    <div className={styles.infoWrapper}>
                      {!!post.avatar && <Image src={post.avatar} alt={`Foto de ${post.author}`} height="30" width="30" />}
                      <label>{post.author}</label> ·<label>{post.publishedAt} </label>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map((post) => {
    return {
      title: post.title,
      publishedAt: post.publishedAt,
      author: post.author,
      readingTime: post.readingTime.text,
      slug: post.slug,
      subtitle: post.subtitle,
      avatar: post.avatar,
    }
  })

  return { props: { posts } }
}

export default Home
