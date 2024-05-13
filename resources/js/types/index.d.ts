import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Order {
    id: number,
    name: string,
    phone: string,
    created_at: string
}

export interface Service {
    id: number,
    title: string,
    category_id: number,
    price: number
}

export interface Category {
    id: number,
    title: string
}

export interface IAdminPanel {
    category: string,
    category_id: number,
    service: string,
    price: string
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    count_orders: number;
    orders: Array<Order>;
    categories: Array<Category>;
    services: Array<Service>;
    ziggy: Config & { location: string };
};
