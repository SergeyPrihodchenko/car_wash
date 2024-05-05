import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Main({ auth,  appName}: PageProps<{ appName: string}>) {

    return (
        <>
            <Head title="Main" />
            <GuestLayout>
               <Container className='content_box'>
                    <Container className='time_table'> 
                    <h2>Наши услуги</h2>
                        <Row>
                            <ul className='present_list'>
                                <li>Наши услуги</li>
                                <li>Наши услуги</li>
                                <li>Наши услуги</li>
                            </ul>
                        </Row>
                    </Container>
                    <Container className='time_table'>
                        <h2>Наши контакты</h2>
                        <Row>
                            <ul className='present_list'>
                                <li>8-495-458-45-45 </li>
                                <li>8-909-99-99-99</li>
                            </ul>
                        </Row>
                    </Container>
               </Container>
               <Container className='content_box'>
                    <Container className='time_table'>
                            <h2>Время работы</h2>
                            <Row>
                                <ul className='present_list'>
                                    <li>пн-пт: 8:00 - 19:00</li>
                                    <li>сб: 10:00 - 17:00</li>
                                    <li>вб: выходной</li>
                                </ul>
                            </Row>
                        </Container>
               </Container>
                <Container>
                    <h4>Мы на карте</h4>
                    <Row>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A03dbf4b387d6dc8aae36c9dfd3b926c336e9ef9f17cf2ccca24d0792ef20823a&amp;source=constructor" width="400" height="300"></iframe>
                    </Row>
                </Container>
                <Footer/>
            </GuestLayout>
        </>
    );
}
