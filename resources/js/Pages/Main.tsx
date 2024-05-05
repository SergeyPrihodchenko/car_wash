import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';
import { Col, Container, Row } from 'react-bootstrap';

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
                        <Row>
                            
                        </Row>
                    </Container>
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
            </GuestLayout>
        </>
    );
}
