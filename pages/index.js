import Link from 'next/link';
import Router from 'next/router';
import classes from '../styles/home.module.css';

function HomePage() {
    function onClick(){
        Router.push({
            pathname: '/events/list/888',
            query: {
                id: 999
            }
        })
    }
    return (
        <div className={classes.box}>
            <p>---我是HomePage页---</p>
            <Link href="/events">跳转至events入口页面(静态路由)</Link>
            <Link href="/events/list">跳转至events/[eventId]页面(动态嵌套路由)</Link>
            <Link href="/events/list/767">跳转至events/[eventId]/[id]页面(动态嵌套传参路由)</Link>
            <div onClick={onClick}>编程式跳转路由携带参数</div>
        </div>
    )
}


export default HomePage;