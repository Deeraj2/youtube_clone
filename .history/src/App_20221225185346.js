import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';


const App = () => (
  
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000'}}>
            NAVBAR
             <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                
            </Routes>      
        </Box>
    </BrowserRouter>
  
);

export default App