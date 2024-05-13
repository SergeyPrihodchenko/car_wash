import { ModalOrder } from "@/Components/Modal";
import Guest from "@/Layouts/GuestLayout";
import { Category, PageProps, Service } from "@/types";
import { Head } from "@inertiajs/react";
import { BorderBottom } from "@mui/icons-material";
import { useCallback, useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function Services({auth, count_orders, categories, services}: PageProps) {

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderServices = useCallback((service: Service) => {
        return (
            <li key={service.id}>{service.title} - {service.price}$</li>
        );
    }, []);

    const renderCategory = useCallback((category: Category) => {
        return (
            <>
                <h2 key={category.id}>{category.title}</h2>
                <ul key={category.id+category.title}>
                    {services.map(renderServices)}
                </ul>
            </>
        );
    }, []);

    return (
        <>
            <Head title="Services"/>
            <Guest user={auth.user} count_orders={count_orders}>
                <Container className="main_box">
                    <Container className='btn_service_box' style={{marginBottom: '10px'}}>
                        <Button onClick={handleShow} variant="success" className='order_btn animate__animated animate__backInLeft'>Записаться на услугу</Button>
                    </Container>
                    <Container className="service_control animate__animated animate__backInRight">
                        {categories.map(renderCategory)}
                    </Container>
                </Container>
            </Guest>
            <ModalOrder handleClose={handleClose} show={show}/>
        </>
    );
}