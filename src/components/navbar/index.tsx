import style from './navbar.module.css'

const NavBar = ({children}) => {
    return (
        <nav className={style.navbar}>
            {children}
        </nav>
    );
}

export default NavBar;