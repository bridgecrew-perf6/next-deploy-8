import Link from "next/link"

export async function getStaticProps() {

    return {
        props: {test: true}
    }
}

const Navigation = ({list}) => {
    return (
        <nav>
            Навигация
            <ul>
                {list.map(item => 
              <li key={item._id}>
                <Link href={item.link}>{item.title}</Link>
              </li>)}
            </ul>
        </nav>
    )
}

export default Navigation

// export async function getServerSideProps() {
//     const data = [
//         {
//             _id: 1,
//             link: '/',
//             title: 'Home'
//         },
//         {
//             _id: 2,
//             link: '/about',
//             title: 'About'
//         },
//         {
//             _id: 3,
//             link: '/team',
//             title: 'Team'
//         },
//     ]

//     console.log(data);
//     console.log(1);

//     return {
//         props: {
//             data: data,
//             test: true
//         }
//     }
// }

