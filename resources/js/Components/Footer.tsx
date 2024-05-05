import { Container } from "react-bootstrap";
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
    return (
        <div className="footer">
            <Container className="street">ул. Уличная д.1</Container>
            <Container>2024&#169;</Container>
            <Container className="social_network_list">
                <span><TelegramIcon/></span>
                <span><TelegramIcon/></span>
                <span><TelegramIcon/></span>
                <span><TelegramIcon/></span>
            </Container>
        </div>
    );
}