import { Link } from "@inertiajs/react";
import { NavDropdown } from "react-bootstrap";

export default function DropLink({name}: {name:string}) {
    return (
        <NavDropdown title={name} id="navbarScrollingDropdown" className="navbar_toggle_name">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link method="post" href={route('logout')}>
                    Logout
                </Link>
              </NavDropdown.Item>
        </NavDropdown>
    );
}   