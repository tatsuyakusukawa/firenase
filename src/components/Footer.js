import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Box } from '@mui/material';

export default function IconTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
        sx={{
            bgcolor: 'background.paper',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            }}
            TabIndicatorProps={{
            style: {
                display: 'none',
            },
            }}
        >
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
            >
            <Tab sx={{ flexGrow: 1 }} icon={<AccountCircleSharpIcon />} aria-label="phone" />
            <Tab sx={{ flexGrow: 1 }} icon={<ListSharpIcon />} aria-label="favorite" />
            <Tab sx={{ flexGrow: 1 }}icon={<ForumIcon />} aria-label="person" />
            </Box>
            </Tabs>
        );
        }