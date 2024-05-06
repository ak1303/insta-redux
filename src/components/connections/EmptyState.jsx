import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const EmptyState = ({ message }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    style={{ height: '100%' }}
  >
    <SentimentDissatisfiedIcon style={{ fontSize: 50, marginBottom: 10 }} />
    <Typography variant="h6">{message}</Typography>
  </Box>
);

export default EmptyState;
