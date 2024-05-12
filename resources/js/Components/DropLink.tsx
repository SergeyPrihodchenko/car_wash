import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { NavDropdown } from "react-bootstrap";

export default function DropLink({name, count_orders}: {name:string, count_orders?: number}) {
    
    const [style, setStyle] = useState<string>('block');
    const [counter, setCounter] = useState<number | undefined>(count_orders);

    window.Echo.private('count_orders')
    .listen('.count_orders', (res: any) => {
        setCounter(res.count_orders);
    });

    const switchStyle = () => {
        if(counter) {
            setStyle(style == 'block' ? 'none' : 'block');
        }
    }

    useEffect(() => {
        if(!counter) {
            setStyle('none');
        } else {
            setStyle('block');
        }
    }, [counter]);
    
    return (    
            <>
                <span className="nav_counter_orders" style={{display: style}}>{counter}</span>
                <NavDropdown onClick={switchStyle} title={name} id="navbarScrollingDropdown dropdown_menu">
                <NavDropdown.Item as='span'>
                    <span className="count_orders" style={{display: counter ? 'block' : 'none'}}>{counter}</span>
                    <Link href={route('orders')}>Заказы</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item as='span'>
                    <Link method="post" href={route('logout')}>
                        Logout
                    </Link>
                </NavDropdown.Item>
                </NavDropdown>
            </>
    );
}   