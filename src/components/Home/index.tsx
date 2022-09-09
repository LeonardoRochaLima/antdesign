import { Card, Divider } from 'antd';
import styles from './Home.module.css'
export const Home = () => {
    return (
        <Card>
            <p>Card content</p>
            <p>Card content</p>
            <Divider className={styles.divider}/>
            <p>Card content</p>
        </Card>
    )
}