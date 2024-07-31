import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Iframe Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
<a 
  style={{ textDecoration: 'none' }} 
  target="_blank" 
  title="Dynamic Content Block 1" 
  href="https://breeze.serving.global/v1/email/dc/click/8789843/1021611/1021610?utm_source=dynamic%20yield&utm_medium=email&utm_campaign=[CAMPAIGN NAME]&cuid=7&cuid_type=email&locale=5&version=1&tag_ids=1021610"
>
  <img 
    src="https://breeze.serving.global/v1/email/dc/image/8789843/1021611/1021610?utm_source=dynamic%20yield&amp;utm_medium=email&amp;utm_campaign=[CAMPAIGN NAME]&amp;cuid=7&amp;cuid_type=email&amp;locale=5&amp;version=1&amp;tag_ids=1021610" 
    alt="demo"
  />
</a>
      </main>
    </div>
  )
}
