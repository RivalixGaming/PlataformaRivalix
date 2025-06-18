import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProfileProvider } from './contexts/ProfileContext';
import 'remixicon/fonts/remixicon.css';
import { SavedArtesProvider } from './contexts/SavedArtesContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
       <ProfileProvider>
        <SavedArtesProvider>
          <RouterProvider router={router} />
        </SavedArtesProvider>
      </ProfileProvider>
    </ThemeProvider>
  </StrictMode>
);