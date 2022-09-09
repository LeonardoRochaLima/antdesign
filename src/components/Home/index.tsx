import { Space, Typography } from 'antd';
import styles from './Home.module.css'

const { Title, Paragraph } = Typography;

export const Home = () => {
    return (
        <Space className={styles.space}>
            <Typography>
                <Title>VPS: Melhore resultados!</Title>
                <Paragraph>
                    Nosso server Cloud dispõe de segurança para sua aplicação e performance. 
                    Com preços previsíveis e escalabilidade para suportar seu crescimento em qualquer estágio.
                </Paragraph>
            </Typography>
        </Space>
    )
}