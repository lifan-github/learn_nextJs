import { Button } from 'antd';
import Router from 'next/router';
import classes from '../../styles/home.module.css';

function EventDetailPage(){
    function goBack(){
        Router.back();
    }
    
    return(
        <div className={classes.box}>
            <div>EventDetailPage(动态嵌套路由)</div>
            <Button onClick={goBack} type="primary">返 回</Button>
        </div>
    )
}

export default EventDetailPage;