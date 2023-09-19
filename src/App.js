import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes'
import DefaultLayout from './component/Layout/DefaultLayout/DefaultLayout';
import { Fragment, useCallback } from 'react';
import SnackbarProvider, { useSnackbar } from 'react-simple-snackbar'
import SnackBarOption from './component/Notifications/Snackbar';
import { createContext } from 'react';
import color_constants from './color';

export const SnackBarContext = createContext(() => { });

function SnackbarWrapper({ children }) {
  const [openSnackbar_Success, closeSnackbarSucess] = useSnackbar(SnackBarOption(color_constants.green_color));
  const [openSnackbar_Failure, closeSnackbarFailure] = useSnackbar(SnackBarOption(color_constants.red_color));
  const [openSnackbar_Info, closeSnackbarInfo] = useSnackbar(SnackBarOption(color_constants.yellow_color));

  function handleOpenSnackbar(color, message, duration = 3000) {
    switch (color) {
      case color_constants.green_color:
        openSnackbar_Success(message, duration);
        break;
      case color_constants.red_color:
        openSnackbar_Failure(message, duration);
        break;
      case color_constants.yellow_color:
        openSnackbar_Info(message, duration);
        break;
      default:
        openSnackbar_Failure('Hệ thống đang được cập nhật', 3000);
        break;
    }
  }

  return <SnackBarContext.Provider value={handleOpenSnackbar}>
    {children}
  </SnackBarContext.Provider>
}

function App() {
  return (
    <SnackbarProvider>
      <SnackbarWrapper>
        <Router>
          <div>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.layout === null ? Fragment : DefaultLayout;
                const Page = route.component
                return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
              })}
            </Routes>
          </div>
        </Router>
      </SnackbarWrapper>
    </SnackbarProvider >
  );
}

export default App;
