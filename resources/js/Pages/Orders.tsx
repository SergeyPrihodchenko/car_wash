import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Order, PageProps } from "@/types";
import { Head, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { useCallback, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

export default function Orders({auth, orders}: PageProps) {

    const [ordersState, setOrdersState] = useState<Array<Order>>(orders);

    const deleteRow = (e: any) => {
        axios.post(route('orders.delete', {id: e.target.id}))
        .then(res => {
            setOrdersState(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    const renderOrders = useCallback((order: Order) => {
        return (
            <>
                <tr key={order.id}>
                    <td key={order.id + 'id'}>{order.id}</td>
                    <td key={order.id + order.name + order.created_at}>{order.name}</td>
                    <td key={order.id + order.phone}>{order.phone}</td>
                    <td key={order.id + order.created_at}>{order.created_at}</td>
                    <td key={order.id + 'btn'}><Button onClick={deleteRow} key={order.id + 'delete'}  id={String(order.id)}>Удалить заявку</Button></td>
                </tr>
            </>
        );
    }, []);
    return (
        <>
            <Head title="Заказы"/>
            <Authenticated user={auth.user}>
                <Container className="main_box">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Номер телефона</th>
                        <th>Дата заявки</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersState.map(renderOrders)}
                    </tbody>
                </Table>
                </Container>
            </Authenticated>
        </>
    );
}