import classes from './header.module.css';

function MainHeader() {
    return (
        <header className={classes.box}>
            <div>我是顶部header公共组件</div>
        </header>
    )
}

export default MainHeader