import { Route, Routes } from 'react-router-dom'
import { Path } from '../../enum/Path'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Login } from '../../pages/Login/Login'
import { MainPage } from '../../pages/main/MainPage'
import { Results } from '../../pages/results/Results'



export const RoutesComponent = () => {
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    return (
        isLoggedIn ?
            <Routes>
                <Route index element={<MainPage />} />
                <Route path={Path.Results} element={<Results />} />
            </Routes>
            :
            <Routes>
                <Route path={Path.Any} element={<Login />} />
            </Routes>

    )
}