import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/defaultLayout"
import { HomePage } from "./pages/Home"
import { Intervalos } from "./pages/Intervalos"

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/intervalos" element={<Intervalos />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
