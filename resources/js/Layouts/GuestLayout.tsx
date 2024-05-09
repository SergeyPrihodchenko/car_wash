import DropLink from '@/Components/DropLink';
import Footer from '@/Components/Footer';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

export default function Guest({ children, user }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    return (
        <>
            <Navbar key={'sm'} expand={'sm'} className="mb-3 navbar">
                <Container fluid>
                    <Link href="/">
                        <Navbar.Brand className='brand'>Car wash</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'sm'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
                        placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
                            Car wash
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link href={route('main')}><Nav.Link as='span'>Главная</Nav.Link></Link>
                            <Link href={route('services')}><Nav.Link as='span'>Услуги</Nav.Link></Link>
                            <Link href={route('about')}><Nav.Link as='span'>О нас</Nav.Link></Link>
                            {user ? <DropLink name={user.name}/> : ''}
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}
