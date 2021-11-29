import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import readingTime from 'reading-time';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string', required: false },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    banner: { type: 'string', required: false },
    avatar: { type: 'string', required: false},
    author: { type: 'string', required: true },
  },
  computedFields
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});

export default contentLayerConfig