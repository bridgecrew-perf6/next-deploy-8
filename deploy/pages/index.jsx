import Link from "next/link"
import Navigation from "../components/navigation"


export async function getStaticProps() {

  const data = [
            {
                _id: 1,
                link: '/',
                title: 'Home'
            },
            {
                _id: 2,
                link: '/about',
                title: 'About'
            },
            {
                _id: 3,
                link: '/team',
                title: 'Team'
            },
        ]

  return {
      props: {list: data}
  }
}


export default function Home({list}) {
  return (
    <div>

      <header>
        <Navigation list={list} />
      </header>
    </div>
  )
}



