import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <Box component="section" sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 500,
            mx: 'auto',
            mt: 4,
            px: 2,
          }}>
            <Typography variant="h1">Edward Lin Blog</Typography>
        </Box>
    );
}

export default Home