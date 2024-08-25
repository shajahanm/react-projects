import { Route, Routes } from 'react-router-dom';
import Components from '../pages/components/Components';
import HexToRgba from '../pages/ColorConverter/HexToRgba';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Components />} />
            <Route path="/hex-to-rgba" element={<HexToRgba />} />
        </Routes>
    )
}

export default AppRoutes