import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Footer from '@/Components/Footer';
import { url } from 'inspector';

export default function Main({ auth,  appName}: PageProps<{ appName: string}>) {

    return (
        <>
            <Head title="Main" />
            <GuestLayout>
                <Container className='main_box'>
                    <Container className='mainPage_box'>
                        <Container className='list_box'>
                            <h2 className='title_list_presents'>Наши услуги</h2>
                            <ListGroup variant="flush" className='list_presents'>
                                <ListGroup.Item className='list_item'>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item className='list_item'>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className='list_item'>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className='list_item'>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Container>
                        <Container className='list_box'>
                            <h2 className='title_list_presents'>Время работы</h2>
                            <ListGroup variant="flush" className='list_presents'>
                                <ListGroup.Item className='list_item'>пн-пт: 8:00-20:00</ListGroup.Item>
                                <ListGroup.Item className='list_item'>сб-вс: 12:00-20:00</ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </Container>
                    <Container className='carousel_box'>
                    <Carousel fade>
                        <Carousel.Item>
                            <img className='carousel_img' src={"./images/blackCar.jpg"} alt="" />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='carousel_img' src={"./images/blueCar.jpg"} alt="" />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Container>
                    <Container className='mainPage_contact_map_box'>
                        <Container className='contact_map_box'>
                            <h2 className='title_list_presents'>Наши контакты</h2>
                            <ListGroup variant="flush" className='list_presents'>
                                <ListGroup.Item className='list_item'>тел: 9-495-444-44-44</ListGroup.Item>
                                <ListGroup.Item className='list_item'>тел: 8-925-255-55-55</ListGroup.Item>
                            </ListGroup>
                        </Container>
                        <Container className='contact_map_box'>
                            <h2 className='title_list_presents'>Мы на карте</h2>
                            <iframe className='ya_map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A03dbf4b387d6dc8aae36c9dfd3b926c336e9ef9f17cf2ccca24d0792ef20823a&amp;source=constructor" height='400'></iframe>
                        </Container>
                    </Container>
                </Container>

            </GuestLayout>
        </>
    );
}
