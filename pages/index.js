import Link from 'next/link';
import Router from 'next/router';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from 'antd';
import classes from '../styles/home.module.css';

function HomePage() {
    function onClick() {
        Router.push({
            pathname: '/events/list/888',
            query: {
                id: 999
            }
        })
    }
    return (
        <div className={classes.box}>
            <ReactFullpage
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={500}
                scrollHorizontally = {true}
                scrollHorizontallyKey = {'YOUR KEY HERE'}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div className={classes.pageContainer1}>
                                    <p>Section 1 (welcome to fullpage.js)</p>
                                    <Link href="/events">跳转至events入口页面(静态路由)</Link>
                                    <Link href="/events/list">跳转至events/[eventId]页面(动态嵌套路由)</Link>
                                    <Link href="/events/list/767">跳转至events/[eventId]/[id]页面(动态嵌套传参路由)</Link>
                                    <div onClick={onClick}>编程式跳转路由携带参数</div>
                                    <Button className={classes.btn1} type="primary" onClick={() => fullpageApi.moveSectionDown()}>下 滑</Button>
                                </div>
                            </div>

                            <div className="section">
                                <div className={classes.pageContainer2}>
                                    <p>Section 2</p>
                                    <Button className={classes.btn1} type="primary" onClick={() => fullpageApi.moveSectionDown()}>下 滑</Button>
                                </div>
                            </div>

                            <div className="section">
                                <div className={classes.pageContainer3}>
                                    <p>Section 3</p>
                                    <Button className={classes.btn1} type="primary" onClick={() => fullpageApi.moveSectionDown()}>下 滑</Button>
                                </div>
                            </div>

                            <div className="section">
                                <div className={classes.pageContainer4}>
                                    <p>Section 4</p>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    )
}


export default HomePage;