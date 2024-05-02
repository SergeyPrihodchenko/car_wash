import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function AdminPanel({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
        <Head title="AdminPanel" />
        <div className="test"></div>
        </AuthenticatedLayout>
    );
}
