import { useState } from 'react'
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
import AddIcon from '@mui/icons-material/Add'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
function AppBar() {
  const [searchValue, setSearchValue] = useState('')
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
        overflowX: 'auto',
        backgroundColor: 'primary.main'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <AppsIcon sx={{ color: 'white', cursor: 'pointer' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            cursor: 'pointer'
          }}
        >
          <CommentIcon sx={{ color: 'white' }} />
          <Typography
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
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
            <Button
              variant='outlined'
              startIcon={<AddIcon />}
              sx={{
                color: 'white',
                border: '1px solid white',
                '&:hover': { border: '1px solid white' }
              }}
            >
              Create
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-basic'
          label='Search...'
          type='text'
          variant='outlined'
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <CloseIcon
                  fontSize='small'
                  sx={{
                    color: searchValue ? 'white' : 'transparent',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSearchValue('')}
                />
              </InputAdornment>
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }
            }
          }}
        />
        <ModeSelect />
        <Tooltip title='Notifications' placement='bottom' disableFocusListener>
          <Badge color='warning' variant='dot' sx={{ cursor: 'pointer' }}>
            <MailIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title='Help' placement='bottom' disableFocusListener>
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
