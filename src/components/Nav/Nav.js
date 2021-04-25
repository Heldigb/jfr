import Link from "next/link";
import useSWR from "swr";
import {NavItem} from "@/components/Nav/NavItem";
import {NavContainer} from './styles'
const fetcher = (url) => fetch(url).then((res) => res.json())


 export const Nav = () => {
    const {data,error} = useSWR('/api/pages', fetcher)
    if(!data) return <p>...</p>

    const navItems = data?.nodes
    return (
        <NavContainer>
            Menu
            <NavItem href={`/`} title={'Home'}/>
            {navItems.map((item) =>
                    <NavItem href={`/${item.slug}`} title={item.title}/>
                 )
            }
        </NavContainer>
    );
};
