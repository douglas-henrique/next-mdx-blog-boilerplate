import { useMDXComponent } from 'next-contentlayer/hooks'
import { allPosts } from '.contentlayer/data'
import type { Post } from '.contentlayer/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import LayoutPost from '../../layouts/Post'

export default function Post({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code)
  return (
    <LayoutPost post={post}>
      <Component />
    </LayoutPost>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug)
  return { props: { post } }
}
