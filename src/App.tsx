import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { SideBar } from './shared/components';
import { AppThemeProvider, DrawerProvider, SnackBarProvider } from './shared/contexts';


export const App = () => {
  return (
    <SnackBarProvider>

      <AppThemeProvider>

        <DrawerProvider>
          <BrowserRouter>

            <SideBar>
              <AppRoutes />
            </SideBar>

          </BrowserRouter>
        </DrawerProvider>


      </AppThemeProvider>

    </SnackBarProvider>
  );
};
