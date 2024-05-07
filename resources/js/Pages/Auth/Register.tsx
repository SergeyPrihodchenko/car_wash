import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Container, Form } from 'react-bootstrap';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <Container className='auth_box'>
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            name="name"
                            type='text'
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <Form.Text className="text-muted">
                            <InputError message={errors.name} className="mt-2 error" />
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <Form.Text className="text-muted">
                            <InputError message={errors.email} className="mt-2 error" />
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <Form.Text className="text-muted">
                            <InputError message={errors.password} className="mt-2 error" />
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword_confirmation">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <Form.Text className="text-muted">
                            <InputError message={errors.password_confirmation} className="mt-2 error" />
                        </Form.Text>
                    </Form.Group>
                    <Link
                        className='already_registered'
                        href={route('login')}
                    >
                        Already registered?
                    </Link>
                    <Button variant="primary" type="submit" disabled={processing}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </GuestLayout>
    );
}
