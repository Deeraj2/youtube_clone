import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

const Sidebar = () => (
    <Stack
        direction="row"
        sx={{
            overflow: 'auto',
            height: { sx: 'auto', md: '95%' },
        }}
    >
        Sidebar
    </Stack>
  )


export default Sidebar