import Form from './components/form'
import Header from './components/Header'
import { MainPage } from './components/mainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop'
import bgImageUrl from "./images/my-offer-bg.webp"
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          {/* Background Image Layer */}
          <div
            className="fixed inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage: `url(${bgImageUrl})`,
              zIndex: -1,
              //backgroundAttachment: "scroll", // Ensures smooth scrolling
            }}
          ></div>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </ BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
