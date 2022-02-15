import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Content } from './components/content/content'
import { Contact } from './components/pages/contact'
import { Join } from './components/pages/join'
import { News } from './components/pages/news/news'
import { People } from './components/pages/people/people'
import { Research } from './components/pages/research'
import { Splash } from './components/splash/splash'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='content' element={<Content />}>
          <Route path='people' element={<People />} />
          <Route path='news' element={<News />} />
          <Route path='research' element={<Research />} />
          <Route path='contact' element={<Contact />} />
          <Route path='join' element={<Join />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
