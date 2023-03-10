import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

const Sidebar = () => (
    <Stack
        direction="row"
        sx={{
            overflow: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: {md: 'column' },
        }}
    >
        {categories.map((category) => (
            <button>
                <span>{category.icon}</span>
                <span>{category.icon}</span>
            </button>
        ))}
    </Stack>
  )


export default Sidebar