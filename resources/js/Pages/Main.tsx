import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Main({ auth,  appName}: PageProps<{ appName: string}>) {

    return (
        <>
            <Head title="Main" />
            <GuestLayout>
               <div className='test2'>

               </div>
            </GuestLayout>
        </>
    );
}
