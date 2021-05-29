import Link from "next/link";
import useSWR from "swr";
import {NavItem} from "@/components/Nav/NavItem";
import {NavContainer, Logo} from './styles'

const fetcher = (url) => fetch(url).then((res) => res.json())

export const Nav = () => {
    // const {data} = useSWR('/api/pages', fetcher)
    // if(!data) return <p>...</p>

    // const navItems = data?.nodes

    const navItems = [
        {
            slug: "projects", title: "Projects"
        },
        {
            slug: "home", title: "Home", logo: true
        },
        {
            slug: "contact", title: "Contact"
        }
    ]
    return (
        <NavContainer>
            {/*<NavItem href={`/`} title={'Home'}/>*/}
            {navItems.map((item) =>

                <>
                    {item.logo &&  <Logo>  <Link href={'/'}>JFR </Link></Logo>||
                    <NavItem href={`/${item.slug}`} title={item.title} logo={!!item.logo}/>}
                </>
            )
            }
        </NavContainer>
    );
};
