import { Box, Paper, Tab, Tabs } from '@mui/material';
import { AppToolbar } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';


export const Home = () => {
  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Box>
        <Box sx={{  bgcolor: 'background.paper' }}>
          <Tabs
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </Box>
      </Box>
    </LayoutBase>
  );
};
