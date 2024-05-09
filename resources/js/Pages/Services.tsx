import Guest from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Button, Container } from "react-bootstrap";

export default function Services({auth}: PageProps) {

    return (
        <>
            <Head title="Services"/>
            <Guest user={auth.user}>
                <Container className="main_box">
                    <Container className='btn_service_box' style={{marginBottom: '10px'}}>
                        <Button variant="success" className='order_btn animate__animated animate__backInLeft'>Записаться на услугу</Button>
                    </Container>
                    <Container className="service_control animate__animated animate__backInRight">
                        <h2>Category</h2>
                        <ul>
                            <li>services - 00$</li>
                            <li>services - 00$</li>
                            <li>services - 00$</li>
                        </ul>
                    </Container>
                </Container>
            </Guest>
        </>
    );
}