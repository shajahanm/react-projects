import { Route, Routes } from 'react-router-dom';
import Components from '../pages/components/Components';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Components />} />
        </Routes>
    )
}

export default AppRoutes