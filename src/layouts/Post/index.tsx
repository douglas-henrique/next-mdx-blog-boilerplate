import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import Container from '@/components/Container';
import type { PropsWithChildren } from 'react';
import type { Post } from '.contentlayer/types';
import styles from './styles.module.scss'

export default function LayoutPost({
  children,
  post
}: PropsWithChildren<{ post: Post }>) {
  return (
    <Container
      title={`${post.title} – ${post.author}`}
      description={post.summary}
      image={`<https://your-url>${post.banner}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className={styles.article}>
        <h1> {post.title} </h1>
        <div className={styles.informations}>
          {!!post.avatar && <Image src={post.avatar} height="30" width="30" />}
          <label>
            {`${post.author} - `}  {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
          </label>
          <label>
            {post.readingTime.text}
          </label>
        </div>
        <div className={styles.post}>
          {children}
        </div>
      </article>
    </Container>
  );
}
