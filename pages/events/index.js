import { Button } from 'antd';
import path from 'path';
import fs from 'fs';
import Router from 'next/router';
import classes from '../../styles/home.module.css';


// ====== 前端渲染及数据获取 ========
/**
const AllEventsPage = ({ bannerList, localNavList, subNavList, salesBox, gridNav }) => {
    const goBack = () => {
        Router.back();
    }
    return (
        <div className={classes.box}>
            <div>Events(静态路由)</div>
            <div className={classes.bannerBox}>
                {
                    bannerList.length > 0 && bannerList.map((item, index) => {
                        return <img key={index} src={item.icon} />
                    })
                }
            </div>
            <Button onClick={goBack} type="primary">返 回</Button>
        </div>
    )
}

AllEventsPage.getInitialProps = async ({ req }) => {
    // 本地开发localhost: 3000 有跨域问题，server.js 配置了跨域
    const baseUrl = 'https://www.devio.org/io/flutter_app/json/home_page.json'
    let url = process.env.NODE_ENV === 'development' ? '/io/flutter_app/json/home_page.json' : baseUrl;
    const res = await fetch(url);
    const json = await res.json();
    return {
        bannerList: json.bannerList,
        localNavList: json.localNavList,
        subNavList: json.subNavList,
        salesBox: json.salesBox,
        gridNav: json.gridNav,
    }
}

export default AllEventsPage;
 */


 // ====== 服务端预渲染及数据获取 ========
const AllEventsPage = (props) => {
    const { bannerList, localNavList, subNavList, salesBox, gridNav } = props;

    const goBack = () => {
        Router.back();
    }

    return (
        <div className={classes.box}>
            <div>服务端预渲染及数据获取</div>
            <div className={classes.bannerBox}>
                {
                    bannerList.map((item, index) => {
                        return <img key={index} src={item.icon} />
                    })
                }
            </div>
            <Button onClick={goBack} type="primary">返 回</Button>
        </div>
    )
}

// 预渲染和数据获取
export function getStaticProps() {
    console.log('再次生成页面...');
    const filePath = path.join(process.cwd(), 'data', 'data1.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    console.log(data, 'data----');
    if(JSON.stringify(data) == "{}"){
        return {
            notFound: true, // 没有数据 进入配置的404页面
        };
    }

    if(!data){ // 重定向
        return{
            redirect: {
                destination: "/no-data", // 重定向新的路由
            }
        }
    }

    return {
        props: {
            bannerList: data.bannerList,
            localNavList: data.localNavList,
            subNavList: data.subNavList
        },
        revalidate: 10, // 服务端10秒更新一次
    }
    
}

export default AllEventsPage;