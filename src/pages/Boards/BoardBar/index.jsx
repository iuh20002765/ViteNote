import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import theme from '~/theme'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '3px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: '#fce4ec'
  }
}
function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.note.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderBottom: (theme) => `1px solid ${theme.palette.primary.dark}`,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? '#2d3436'
            : `${theme.palette.primary.light}`
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip
          icon={<SpaceDashboardIcon />}
          label='My Dashboard'
          clickable
          onClick={() => {}}
          sx={MENU_STYLE}
        />
        <Chip
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
          clickable
          onClick={() => {}}
          sx={MENU_STYLE}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label='Add to Google Drive'
          clickable
          onClick={() => {}}
          sx={MENU_STYLE}
        />
        <Chip
          icon={<FilterListIcon />}
          label='Filter'
          clickable
          onClick={() => {}}
          sx={MENU_STYLE}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: 16,
              border: '1px solid #fff'
            }
          }}
        >
          <Tooltip title='Kein Vu'>
            <Avatar
              alt='Kein Vu'
              src='https://i.pinimg.com/736x/1c/f4/18/1cf418398ac356a9e64ad4dc228c34d3.jpg'
            />
          </Tooltip>
          <Tooltip title='Someone else'>
            <Avatar alt='Someone else' src='/static/images/avatar/2.jpg' />
          </Tooltip>
          <Tooltip title='Someone else'>
            <Avatar alt='Someone else' src='/static/images/avatar/2.jpg' />
          </Tooltip>
          <Tooltip title='Someone else'>
            <Avatar alt='Someone else' src='/static/images/avatar/2.jpg' />
          </Tooltip>
          <Tooltip title='Someone else'>
            <Avatar alt='Someone else' src='/static/images/avatar/2.jpg' />
          </Tooltip>
          <Tooltip title='Someone else'>
            <Avatar alt='Someone else' src='/static/images/avatar/2.jpg' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
