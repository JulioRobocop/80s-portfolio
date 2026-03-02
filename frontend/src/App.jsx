import './styles/global.css'
import NeonButton from './views/components/NeonButton.jsx'
import MainLayout from './views/layouts/MainLayout.jsx'
import ProjectsController from './controllers/ProjectsController.jsx'
import { Route, Routes } from 'react-router-dom'
import AboutController from './controllers/AboutController.jsx'
import HomePage from './controllers/HomePage.jsx'

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsController />} />
          <Route path="/about" element={<AboutController />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
