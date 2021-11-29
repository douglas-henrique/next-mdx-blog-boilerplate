import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from './Container.module.scss'

export default function Container(props: any) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: '<any title you want>',
    description: `<any description you want>`,
    image: '<any image you want>',
    type: 'website',
    twitterUser: '<your twitter user>',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <main className={styles.container}>{children}</main>
    </>
  )
}
