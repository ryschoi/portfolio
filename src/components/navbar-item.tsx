import {
    Link

} from "react-router";
export default function NavBarItem({ name, path, currentPage }: { name: string, path: string, currentPage: string }) {
    return (
        <Link to={path} className={`caption no-underline green-hover ${path === currentPage ? "nav-active" : "gray"}`}>
            {name}
        </Link>
    );
}