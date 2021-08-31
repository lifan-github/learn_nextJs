import { Button } from 'antd';
import Router from 'next/router';
import classes from '../../styles/home.module.css';

const AllEventsPage = ({bannerList, localNavList, subNavList, salesBox, gridNav}) => {
    const goBack = () => {
        Router.back();
    }
    return (
        <div className={classes.box}>
            <div>Events(静态路由)</div>
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

AllEventsPage.getInitialProps = async ({req}) => {
    // 本地开发localhost: 3000 有跨域问题，server.js 配置了跨域
    const baseUrl = 'https://www.devio.org/io/flutter_app/json/home_page.json'
    let url = process.env.NODE_ENV === 'development' ? '/io/flutter_app/json/home_page.json' : baseUrl;
    const res = await fetch(url);
    const json = await res.json();
    const result = {
        bannerList: json.bannerList,
        localNavList: json.localNavList,
        subNavList: json.subNavList,
        salesBox: json.salesBox,
        gridNav: json.gridNav,
    }
    return result;
}



export default AllEventsPage;