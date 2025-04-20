// import React from "react";
// import Login from "./pages/Login";
//
// function App() {
//   return (
//       <div>
//         <Login />
//       </div>
//   );
// }
//
// export default App;

// import React from 'react';
// import Team from './pages/Team';  // Team sayfasını import ettik
//
// function App() {
//     return (
//         <div className="App">
//             <h1>Hoşgeldiniz!</h1>
//             <Team />  {/* Team sayfasını burada render ediyoruz */}
//         </div>
//     );
// }
//
// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrentProgramPage from './pages/CurrentProgramPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/mevcut-program" element={<CurrentProgramPage />} />
            </Routes>
        </Router>
    );
};

export default App;
