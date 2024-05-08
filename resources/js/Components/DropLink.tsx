import { Link } from "@inertiajs/react";
import { NavDropdown } from "react-bootstrap";

export default function DropLink({name}: {name:string}) {
    return (
        <NavDropdown title={name} id="navbarScrollingDropdown">
            <NavDropdown.Item as='span'>
                <Link href="#action3">
                    Заказы
                </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item as='span'>
                <Link method="post" href={route('logout')}>
                    Logout
                </Link>
            </NavDropdown.Item>
        </NavDropdown>
    );
}   