const { Box } = require('components/Box');

const NotFound = () => {
  return (
    <Box p={3}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={'xl'}
        fontWeight={'midle'}
      >
        <p>404 Page not found</p>
      </Box>
    </Box>
  );
};

export default NotFound;
