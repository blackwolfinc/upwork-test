import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'

export const RoutesList = () => {
  return (
    <BrowserRouter>
    {/* Router */}
      <Routes>
        {/* Page Setting */}
        <Route path='' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}
