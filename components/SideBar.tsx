import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { SxProps } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const SideBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const AppBarStyles: SxProps = {
        width: isOpen ? `calc("100%" - 240px)` : "unset",
        height: "70px",
        border: "red solid 1px",
        marginLeft: isOpen ? "240px" : "70px",
        transition: "margin-left 0.5s ease-in-out;",

    }
    const drawerStyles: SxProps = {
        border: "blue solid 1px",
        width: isOpen ? "240px" : "70px",
        height: "100vh",
        transition: "width 0.5s ease-in-out;",
        position: "absolute",
        top: "0",

    }
    const handleOpen = () => {
        setIsOpen((prev) => !prev)
    }
    const widthOfTheAppBar = 200
    return (
        <Box>
            <Box sx={{ ...AppBarStyles }}>
                <Button onClick={handleOpen} variant="contained">
                    {isOpen ? "Close" : "Open"}
                </Button>
            </Box>
            <Box sx={{
                ...drawerStyles,
            }}>
                <Box sx={{ height: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="body2">
                        Header
                    </Typography>
                </Box>
                <List sx={{
                    position: "relative",
                    border: "red solid 1px",
                    overflow: "scroll",
                    height: `calc(100vh - 70px)`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    "& .MuiTypography-body1": {
                        display: isOpen ? "block" : "none"
                    },
                    "& .MuiListItemButton-root": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    "& .MuiListItemIcon-root": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"

                    }


                }}>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>

                        <ListItemButton>
                            <ListItemIcon >

                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            {/* <Typography>

                                Home
                            </Typography> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <Button sx={{ position: "absolute", }} size='large' variant="contained">fixed</Button>
                </List>
            </Box >
            <Box sx={{ paddingLeft: isOpen ? " 240px" : "70px", transition: "padding-left 0.5s ease-in-out" }}>
                Content
            </Box>
        </Box >
    )
}

export default SideBar