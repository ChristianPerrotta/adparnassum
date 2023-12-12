import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/defaultLayout"
import NoteReading from "./pages/NoteReading/index"
import Intervals from "./pages/Intervals/index"
import FirstSpeciesMajor from "./pages/TwoVoices/FirstSpeciesMajor"

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<NoteReading />}/>
          <Route path="/intervalos" element={<Intervals />}/>
          <Route path="/duasvozes/primeiraespecie" element={<FirstSpeciesMajor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
