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

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    count_orders: number;
    orders: Array<Order>
    ziggy: Config & { location: string };
};
