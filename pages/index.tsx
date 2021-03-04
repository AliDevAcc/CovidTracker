import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

function test() {
    // console.warn("data", props)
    return (
   
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        <h1 className={styles.title}>Fetch data</h1>
        <input id="test" type="text" placeholder="Write a country here"></input>

        <Link href='/Cases/'>
        <button>Press here after writing to get info</button><br></br>
        </Link>

        </div>
    )
}

// export async function getServerSideProps(context) {
// const query = context.query;
// const res = await fetch('https://covid-api.mmediagroup.fr/v1/cases?country=France')
// const data=await res.json();


//   return { props: { data } }
  
// }

export default test;
