import Link from 'next/link'
import Layout from '../components/Layout'
import React from 'react'
import Sample from '~/packages/components/Sample/Sample'

const IndexPage = (): React.ReactElement => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Sample>test</Sample>
  </Layout>
)

export default IndexPage
