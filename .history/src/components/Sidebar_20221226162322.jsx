import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

const Sidebar = () => (
    <Stack
        direction="row"
        sx={{
            overflow: 'auto',
            height: { sx: 'auto', md: '92vh' },
        }}
    >
        Sidebar
    </Stack>
  )


export default Sidebar