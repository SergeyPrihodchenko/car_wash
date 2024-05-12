import { IOrderUserData } from '@/types/formData';
import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export function ModalOrder({show, handleClose}: {show: boolean, handleClose: any}) {

    const formData = new FormData;

    const [error, setError] = useState<string>('');

    const [data, setData] = useState<IOrderUserData>
    (
        {
            name: '',
            phone: ''
        }
    );

    const onChangeInp = (e: Event | any) => {
        setData({...data, [e.target.id]: e.target.value});        
    }

    const storeOrder = async () => {
        formData.set('name', data.name);
        formData.set('phone', data.phone);

        axios.post(route('order.send'), formData)
        .then((res) => {
            setData({name: '', phone: ''});
            handleClose();
        })
        .catch((err) => {
            setError('Ошибка при отправке запроса')
        })  
        
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} className='animate__animated animate__bounceInDown order_modal'>
                <Modal.Header closeButton>
                <Modal.Title className='brand'>Car wash</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal_message'>
                    <p>{error.length ? error : 'Отправьте свои контакты, что бы мы с Вами связались.'}</p>
                    <Container>
                        <Form.Label htmlFor="name">Имя</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            aria-describedby="nameHelpBlock"
                            value={data.name}
                            onChange={onChangeInp}
                        />
                        <Form.Text id="nameHelpBlock" muted>
                            Ваше имя как к вам обращаться.
                        </Form.Text>
                    </Container>
                    <Container>
                        <Form.Label htmlFor="phone">Номер телефона</Form.Label>
                        <Form.Control
                            type="phone"
                            id="phone"
                            aria-describedby="phoneHelpBlock"
                            value={data.phone}
                            onChange={onChangeInp}
                        />
                        <Form.Text id="phoneHelpBlock" muted>
                            По этому номеру позвонит наш сотрудник.
                        </Form.Text>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={storeOrder}>
                    Запросить обратный звонок
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}