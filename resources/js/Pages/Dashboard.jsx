import * as bootstrap from 'bootstrap'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from '@inertiajs/react';
import ShowFactura from '@/Components/Fcomponents/ShowFactura';
import ShowProduct from '@/Pages/Products/ShowProduct'




export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="row">
                <div className="col-12">
                    <div className="card my-4 p-3">
                    <div id="content">
                        <ShowProduct />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
