import * as bootstrap from 'bootstrap'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';
import ShowFactura from '@/Components/Fcomponents/ShowFactura';
import ShowProduct from '@/Pages/Products/ShowProduct'
import "../../css/material-dashboard.min.css";




export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h6 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h6>}
        >
            <Head title="Dashboard" />

            <div className="row">
                <div className="col-12">
                    <div className="card">
                   <div className='card-body px-0 pb-2'>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
