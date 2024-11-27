import { FC } from 'react';
import "../styles/app.scss";
import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from './WelcomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '../constants/theme';
import { TabsRoutes } from './TabsRoutes';

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className={"App"}>
        <Routes>
          <Route path={"/"} Component={WelcomePage}/>
          <Route path={"/*"} Component={TabsRoutes}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
