import styled from '@emotion/styled/macro';
import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

const drawerWidth = 510;

const openedMixin = theme => ({
  width: drawerWidth,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    position: 'relative',
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shortest,
  }),
  // overflowX: "hidden",
});

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `51px`,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    position: 'relative',
  },
});

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: isStyledPropsValid,
})(({ theme, open }) => ({
  // width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiPaper-root': {
    overflowY: 'unset',
    position: 'absolute',
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

StyledDrawer.displayName = 'StyledDrawer';

const StyledControlArea = styled('div', {
  shouldForwardProp: isStyledPropsValid,
})(({ theme, open }) => ({
  color: theme.customColors.grey[700],
  position: 'absolute',
  top: 0,
  left: '-21px',
  width: '21px',
  height: '42px',
  border: `1px solid ${theme.customColors.grey[400]}`,
  background: theme.customColors.white,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    top: 'unset',
    left: 'unset',
    bottom: '-21px',
    height: '21px',
    width: '42px',
    right: '0',
  },
}));

StyledControlArea.displayName = 'StyledControlArea';

const StyledTabs = styled(Tabs, {
  shouldForwardProp: isStyledPropsValid,
})(({ theme, open }) => ({
  width: '50px',
  padding: '10px',
  borderLeft: `1px solid ${theme.customColors.grey[400]}`,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    border: `1px solid ${theme.customColors.grey[400]}`,
  },
}));

StyledTabs.displayName = 'StyledTabs';

const StyledDrawerContainer = styled('div', {
  shouldForwardProp: isStyledPropsValid,
})(({ theme, open }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  height: '100%',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

StyledDrawerContainer.displayName = 'StyledDrawerContainer';

const StyledTab = styled(Tab, {
  shouldForwardProp: isStyledPropsValid,
})(({ theme, open }) => ({
  '&.MuiTab-root': {
    minWidth: 'unset',
    minHeight: 'unset',
    padding: 0,
    width: '30px',
    height: '30px',
    color: theme.customColors.grey[500],
    marginBottom: '7px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0',
      marginRight: '7px',
    },
    '&.Mui-selected': {
      color: theme.customColors.grey[800],
      backgroundColor: theme.customColors.blue[200],
    },
  },
}));
StyledTab.displayName = 'StyledTab';

const StyledTabPanel = styled(TabPanel, {
  shouldForwardProp: isStyledPropsValid,
})(({ theme, open }) => ({
  flex: 1,
}));
StyledTabPanel.displayName = 'StyledTabPanel';

export {
  StyledDrawer,
  StyledControlArea,
  StyledTabs,
  StyledDrawerContainer,
  StyledTab,
  StyledTabPanel,
};
