import Guest from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Container } from "react-bootstrap";

export default function About({auth}: PageProps) {
    return (
        <>
            <Head title="О нас"/>
            <Guest user={auth.user}>
                <Container className="main_box">

                </Container>
            </Guest>
        </>
    );
}