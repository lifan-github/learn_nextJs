import MainHeader from './main-header';
import MainFooter from './main-footer';
import classes from './header.module.css';

function Layout(props){
    console.log(props, '---------此处可以判断哪些不用header---------');
    return(
        <div className={classes.pageBox}>
            <MainHeader/>
            <main className={classes.container}>{props.children}</main>
            <MainFooter/>
        </div>
    )
}

export default Layout