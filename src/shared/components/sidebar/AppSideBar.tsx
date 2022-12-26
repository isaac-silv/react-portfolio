import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
  useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactNode } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext, useAppThemeContext } from '../../contexts';
import { GitHub, LinkedIn } from '@mui/icons-material';

interface IAppThemeProviderProps {
  children: ReactNode
}

interface IListItemLinkProps {
  label: string;
  to: string;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ label, to }) => {

  const theme = useTheme();

  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
  };
  return (
    <ListItemButton
      selected={!!match}
      onClick={handleClick}
      sx={{
        borderRadius: theme.spacing(1),
      }}>
      <ListItemText primary={label} sx={{display: 'flex', justifyContent: 'center'}} />
    </ListItemButton>
  );
};

export const SideBar: React.FC<IAppThemeProviderProps> = ({ children }) => {

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const { isDrawerOpen, setIsDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={lgDown ? !isDrawerOpen : isDrawerOpen}
        variant={lgDown ? 'temporary' : 'persistent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
          padding={theme.spacing(2)}
        >

          <Box
            width='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            pt={theme.spacing(4)}
            pb={theme.spacing(4)}
          >
            <Avatar src={'https://avatars.githubusercontent.com/u/99730793?v=4'} sx={{width: 100, height: 100}} />

            <Typography variant='h3' sx={{pt: '12px'}}>
                  Isaac Silva
            </Typography>
            <Typography variant='body2'>
                  Desenvolvedor FullStack
            </Typography>
            <Divider />
          </Box>

          <Divider />

          <Box flex={1}>
            <List
              component='nav'
              onClick={lgDown ? toggleDrawerOpen : undefined}
            >
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  key={drawerOption.path}
                  to={drawerOption.path}
                  label={drawerOption.label}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={lgDown ? 0 : isDrawerOpen ? theme.spacing(32) : 0}>
        {children}
      </Box>
    </>
  );
};
