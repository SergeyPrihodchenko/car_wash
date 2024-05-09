import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Container, Table } from "react-bootstrap";

export default function Orders({auth}: PageProps) {
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
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
            </Authenticated>
        </>
    );
}