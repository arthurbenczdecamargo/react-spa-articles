import Banner from '../Banner'
import { Outlet } from 'react-router-dom'

export default function DefaultPage() {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    );
}