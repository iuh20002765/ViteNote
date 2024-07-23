import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import CommentIcon from '@mui/icons-material/Comment'
import Workspace from './Menus/workspace'
import Schedule from './Menus/schedule'
import Note from './Menus/note'
import Profile from './Menus/profile'
import Report from './Menus/report'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.note.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <AppsIcon sx={{ color: 'primary.main', cursor: 'pointer' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            cursor: 'pointer'
          }}
        >
          <CommentIcon sx={{ color: 'primary.main' }} />
          <Typography
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Note
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex', gap: 1 } }}>
          <Workspace />
          <Schedule />
          <Note />
          <Report />
          <Tooltip title='Add note' placement='bottom' disableFocusListener>
            <IconButton aria-label='add' color='primary'>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-basic'
          label='Search...'
          variant='outlined'
          size='small'
          sx={{ minWidth: '120px' }}
        />
        <ModeSelect />
        <Tooltip title='Notifications' placement='bottom' disableFocusListener>
          <Badge color='primary' variant='dot' sx={{ cursor: 'pointer' }}>
            <MailIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>
        <Tooltip title='Help' placement='bottom' disableFocusListener>
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
