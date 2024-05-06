import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button, Container, Form } from 'react-bootstrap';

export default function AdminPanel({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
        <Head title="AdminPanel" />
        <Container className='admin_main_block'>
            <Container className='category_control'>
            <Form className='category_control_form'>
                <Form.Label htmlFor="inputPassword5">Добавить категорию</Form.Label>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                />
                <Form.Text id="passwordHelpBlock" className='category_control_helpBlock' muted>
                    Добавленная категория будет отражаться на главной странице и на странице услуг.
                </Form.Text>
                <Button className='category_control_button' type='submit'>Создать</Button>
            </Form>
            </Container>
            <Container className='service_control'>
            <Form className='service_control_form'>
                <Form.Label htmlFor="inputPassword5">Выберете категорию</Form.Label>
                <Form.Select>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Label htmlFor="inputPassword5">Введите название услуги</Form.Label>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Добавленая услуга будет отражаться на странице услуг.
                </Form.Text>
                <Form.Label htmlFor="inputPassword5">Введите цену за услугу</Form.Label>
                <Form.Control
                    type="number"
                    id="inputPassword5"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Цена будет отражаться на странице услуг.
                </Form.Text>
                <Button className='service_control_button' type='submit'>Создать</Button>
            </Form>
            </Container>
        </Container>
        </AuthenticatedLayout>
    );
}
