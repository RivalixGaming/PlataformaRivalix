import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProfileProvider } from './contexts/ProfileContext';
import 'remixicon/fonts/remixicon.css';
import { SavedArtesProvider } from './contexts/SavedArtesContext';
import './index.css';
import { NivelProvider } from './contexts/NivelContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
       <ProfileProvider>
        <SavedArtesProvider>
          <NivelProvider>
            <RouterProvider router={router} />
          </NivelProvider>
        </SavedArtesProvider>
      </ProfileProvider>
    </ThemeProvider>
  </StrictMode>
);