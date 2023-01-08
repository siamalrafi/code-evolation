import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ productId = 100 }) {
  return (

    <>

      <h1>This is the Index.js page</h1>
      <div>

        <Link href={'/blog'}>
          <h1>Go to blog page</h1>
        </Link>

  





      </div>





    </>
  )
}
