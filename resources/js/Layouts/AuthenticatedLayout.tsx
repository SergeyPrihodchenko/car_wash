import { PropsWithChildren, ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import DropLink from '@/Components/DropLink';
import Footer from '@/Components/Footer';

export default function Authenticated({ user, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {

    return (
        <>
          <Navbar key={'sm'} expand={'sm'} className="mb-3 navbar">
            <Container fluid>
              <Link href="/">
                <Navbar.Brand className='brand'>Car wash</Navbar.Brand>
              </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`}/>
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
                  <Nav.Link><Link href={route('dashboard')}>Главная</Link></Nav.Link>
                  <Nav.Link><Link href="#action1">Услуги</Link></Nav.Link>
                  <Nav.Link><Link href="#action1">О нас</Link></Nav.Link>
                  {user ? <DropLink name={user.name}/> : ''}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <main>
          {children}
        </main>
        </>
    );
}
