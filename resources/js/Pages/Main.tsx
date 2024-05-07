import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Main({ auth,  appName}: PageProps<{ appName: string}>) {

    return (
        <>
            <Head title="Main" />
            <GuestLayout>

            </GuestLayout>
        </>
    );
}
