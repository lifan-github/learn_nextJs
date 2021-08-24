import { Button } from 'antd';
import Router from 'next/router';
import { useRouter } from 'next/router';
import classes from '../../styles/home.module.css';


function FilteredEventPage() {
    const router = useRouter();
    console.log(router, 'router');
    let id = "";
    id = router.query.id ? router.query.id : "没有传参";
    function goBack() {
        Router.back();
    }

    return (
        <div className={classes.box}>
            <div>FilteredEventPage(动态嵌套传参路由)</div>
            <p>{id}</p>
            <Button onClick={goBack} type="primary">返 回</Button>
        </div>
    )
}

export default FilteredEventPage;