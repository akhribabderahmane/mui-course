import React from 'react';
import { createTheme,colors,ThemeProvider } from '@mui/material';
import './App.css';
import MuiTypography from './components/MuiTypography';  
import MuiButton from './components/MuiButton';
import MuiIcons from './components/MuiIcons';
import MuiBtnsGroup from './components/MuiBtnsGroup';
import TogglesButton from './components/TogglesButton';
import MuiTextField from './components/MuiTextField';
import MuiTextArea from './components/MuiTextArea';
import MuiSelect from './components/MuiSelect';
import MuiRadioButton from './components/MuiRadioButton';
import MuiCheckBox from './components/MuiCheckBox';
import MuiSwitch from './components/MuiSwitch';
import MuiRating from './components/MuiRating';
import MuiAutoComplete from './components/MuiAutoComplete';
import MuiBox from './components/MuiBox';
import MuiStack from './components/MuiStack';
import MuiGridLayout from './components/MuiGridLayout';
import MuiCard from './components/MuiCard';
import MuiAccordion from './components/MuiAccordion';
import MuiImageList from './components/MuiImageList';
import MuiNavbar from './components/MuiNavbar';
import MuiLink from './components/MuiLink';
import MuiBredcrambs from './components/MuiBredcrambs';
import MuiDrawer from './components/MuiDrawer';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiBottomNav from './components/MuiBottomNav';
import MuiAvatar from './components/MuiAvatar';
import MuiBadge from './components/MuiBadge';
import MuiList from './components/MuiList';
import MuiChip from './components/MuiChip';
import MuiTooltip from './components/MuiTooltip';
import MuiTable from './components/MuiTable';
import MuiAlerts from './components/MuiAlerts';
import MuiSnackBar from './components/MuiSnackBar';
import MuiDialog from './components/MuiDialog';
import MuiProgress from './components/MuiProgress';
import MuiSkeleton from './components/MuiSkeleton';
import { MuiLoadingBtn } from './components/MuiLoadingBtn';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import MuiDateTime from './components/MuiDateTime';
import MuiTabs from './components/MuiTabs';
import MuiTimeline from './components/MuiTimeline';
import MuiResponsivness from './components/MuiResponsivness';

const theme=createTheme({
  status:{
    danger:'#b71c1c'
  },
  palette:{
    secondary:{
       main:colors.orange[500],
    },
    neutral:{
      main:colors.grey[500],
      darker:colors.grey[800]
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className=" w-full flex flex-col px-12 gap-y-5 pb-10">
      <MuiNavbar />
      {/* <MuiTypography /> */}
      <MuiButton />
      <MuiIcons></MuiIcons>
      <MuiBtnsGroup />
      <TogglesButton />
      <MuiTextField />
      <MuiTextArea />
      <MuiSelect  />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete />
      {/* <MuiBox />
      <MuiStack /> */}
      {/* <MuiGridLayout /> */}
      <MuiCard />
      <MuiAccordion />
      <MuiImageList />
      <MuiLink />
      <MuiBredcrambs />
      <MuiDrawer />
      {/* <MuiSpeedDial /> */}
      {/* <MuiBottomNav /> */}
      <MuiAvatar />
      <MuiBadge />
      <MuiList />
      <MuiChip />
      <MuiTooltip />
      <MuiTable />
      <MuiAlerts />
      <MuiSnackBar />
      <MuiDialog />
      <MuiProgress />
      <MuiSkeleton />
      <MuiLoadingBtn />
      <MuiDateTime />
      <MuiTabs />
      <MuiTimeline />
      <MuiResponsivness />
    </div>
    </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
