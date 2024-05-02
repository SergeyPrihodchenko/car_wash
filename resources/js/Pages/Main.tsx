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
                        <Row>
                            <h1>Свободное время</h1>
                        </Row>
                        <Row>
                            
                        </Row>
                    </Container>
               </Container>
            </GuestLayout>
        </>
    );
}
