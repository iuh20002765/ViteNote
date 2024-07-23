import { Box } from '@mui/material'

function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) =>
          `calc(100vh - ${theme.note.appBarHeight} - ${theme.note.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.main'
      }}
    >
      Board Content
    </Box>
  )
}

export default BoardContent
