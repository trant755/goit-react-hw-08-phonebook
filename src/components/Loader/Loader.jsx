import { Box } from 'components/Box';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      height={'100%'}
      bg={'rgb(0, 0, 0, 1%)'}
    >
      <Oval
        height={80}
        width={80}
        color="#2A8C82"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#000000f"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </Box>
  );
};
