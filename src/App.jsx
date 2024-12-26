import { useState } from 'react'
import CVPage1 from './pages/CVPage1'  // Updated path
import CVPage2 from './pages/CVPage2'  // Updated path

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const handleNextPage = () => setCurrentPage(2)
  const handlePrevPage = () => setCurrentPage(1)

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {currentPage === 1 ? (
        <CVPage1 onNextPage={handleNextPage} />
      ) : (
        <CVPage2 onPrevPage={handlePrevPage} />
      )}
    </div>
  )
}

export default App
