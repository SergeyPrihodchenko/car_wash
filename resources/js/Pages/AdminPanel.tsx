import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Category, PageProps } from '@/types';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useCallback, useState } from 'react';


export default function AdminPanel({ auth, count_orders, categories }: PageProps) {

    const [style, setStyle] = useState({
        category: 'none',
        service: 'none'
    });

    const { post, data, setData, errors } = useForm({
        category: '',
        category_id: '',
        service: '',
        price: ''
    });

    const handleChange = (e: any) => {
        const title = e.target.id;
        const value = e.target.value;

        setData(title, value);
    }

    const submitCategory =(e: any) => {
        e.preventDefault();
        post(route('category.store'), {
            onSuccess: () => {
                setStyle({
                    ...style,
                    category: 'block'
                });
            }
        });
        setData({
            ...data,
            category: ''
        });
    }
    const submitService =(e: any) => {
        e.preventDefault();
        post(route('service.store'), {
            onSuccess: () => {
                setStyle({
                    ...style,
                    service: 'block'
                });
            }
        });
        setData({
            ...data,
            category_id: '',
            service: '',
            price: ''
        });
    }

    const renderCategories = useCallback((category: Category) => {
        return (<>
            <option key={category.id+category.title} value={category.id}>{category.title}</option>
        </>);
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            count_orders={count_orders}
        >
        <Head title="AdminPanel" />
        <Container className='main_box'>
            <Container className='admin_main_block'>
                <Container className='category_control'>
                    <Alert key={'success'} variant={'success'} style={{display: style.category}}> Категория добавлена </Alert>
                <Form className='category_control_form' onSubmit={submitCategory}>
                    <Form.Label htmlFor="category">Добавить категорию</Form.Label>
                    <Form.Control
                        type="text"
                        id="category"
                        value={data.category}
                        onChange={handleChange}
                    />
                    <Form.Text id="passwordHelpBlock" className='category_control_helpBlock' muted>
                        Добавленная категория будет отражаться на главной странице и на странице услуг.
                    </Form.Text>
                    <Form.Text id="passwordHelpBlock" className='category_control_helpBlock' style={{color: 'red'}} muted>
                    {errors.category && errors.category}
                    </Form.Text>
                    <Button className='category_control_button' type='submit'>Создать</Button>
                </Form>
                </Container>
                <Container className='service_control'>
                    <Alert key={'success'} variant={'success'} style={{display: style.service}}> Категория добавлена </Alert>
                <Form className='service_control_form' onSubmit={submitService}>
                    <Form.Label>Список категорий</Form.Label>
                    <Form.Select 
                        id='category_id'
                        name='category_id'
                        value={data.category_id}
                        onChange={handleChange}
                    >
                        <option>Выберете категорию</option>
                        {categories.map(renderCategories)}
                    </Form.Select>
                    <Form.Text id="passwordHelpBlock" className='category_control_helpBlock' style={{color: 'red'}} muted>
                    {errors.category_id && errors.category_id}
                    </Form.Text>
                    <Form.Label htmlFor="title_service">Введите название услуги</Form.Label>
                    <Form.Control
                        type="text"
                        id="service"
                        name='service'
                        value={data.service}
                        onChange={handleChange}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Добавленая услуга будет отражаться на странице услуг.
                    </Form.Text>
                    <Form.Text id="passwordHelpBlock" className='category_control_helpBlock' style={{color: 'red'}} muted>
                    {errors.service && errors.service}
                    </Form.Text>
                    <Form.Label htmlFor="price">Введите цену за услугу</Form.Label>
                    <Form.Control
                        type="number"
                        id="price"
                        name='price'
                        value={data.price}
                        onChange={handleChange}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Цена будет отражаться на странице услуг.
                    </Form.Text>
                    <Form.Text id="passwordHelpBlock" className='category_control_helpBlock' style={{color: 'red'}} muted>
                    {errors.price && errors.price}
                    </Form.Text>
                    <Button className='service_control_button' type='submit'>Создать</Button>
                </Form>
                </Container>
            </Container>
        </Container>
        </AuthenticatedLayout>
    );
}
