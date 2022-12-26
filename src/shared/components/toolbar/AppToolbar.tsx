import {
  Box,
  Toolbar,
  IconButton,
  useMediaQuery,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { useTheme } from '@mui/material';
import { DarkMode, LightMode, WbSunny } from '@mui/icons-material';

export const AppToolbar: React.FC = () => {

  const { toggleDrawerOpen } = useDrawerContext();
  const { toggleTheme, themeName } = useAppThemeContext();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Box>
      <Toolbar disableGutters sx={{paddingX: theme.spacing(smDown ? 2 : 3)}}>

        <Box sx={{ mr: 1, flexGrow: 1 }}>
          <IconButton
            size='large'
            onClick={toggleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            size='large'
            onClick={toggleTheme}
          >
            {themeName === 'light' ? <DarkMode /> : <LightMode /> }
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
};
