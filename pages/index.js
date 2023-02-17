import HeadMeta from '@/pages/src/HeadMeta'
import Layout from '@/pages/src/Layout'
import List from '@/pages/src/List'
import Update from '@/pages/src/Update'
import Write from '@/pages/src/Write'

export default function Home() {
  return (
    <>
      <Layout>
        <HeadMeta title="index" />
        <List />
      </Layout>
    </>
  )
}
