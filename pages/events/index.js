import { Button } from 'antd';
import Router from 'next/router';
import classes from '../../styles/home.module.css';

function AllEventsPage(){
    function goBack(){
        Router.back();
    }

    return(
        <div className={classes.box}>
            <div>Events(静态路由)</div>
            <Button onClick={goBack} type="primary">返 回</Button>
        </div>
    )
}

export default AllEventsPage;