import { Adb, ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { Fragment, MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { menus, settings } from './menu';

export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openShop, setOpenShop] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleClickShop = () => {
    setOpenShop(!openShop);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    if (event.currentTarget.textContent === 'Shop') {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="xl">
      <AppBar
        position="static"
        sx={{
          bgcolor: 'white',
          color: 'black',
          px: 2,
          boxShadow: 'none'
        }}
      >
        <Toolbar disableGutters>
          {/* QB-7: Responsive menu */}
          <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit'
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleDrawerOpen} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerClose}
              sx={{
                '& .MuiDrawer-paper': {
                  width: '35%'
                }
              }}
            >
              <List>
                {menus.map((menu) => (
                  <Fragment key={menu.title}>
                    <Link
                      to={menu.path}
                      key={menu.title}
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <ListItem
                        button
                        onClick={
                          menu.title === 'Shop'
                            ? handleClickShop
                            : handleDrawerClose
                        }
                      >
                        <ListItemText primary={menu.title} />
                        {menu.title === 'Shop' ? (
                          openShop ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )
                        ) : null}
                      </ListItem>
                    </Link>
                    {menu.title === 'Shop' && menu.submenu && (
                      <Collapse in={openShop} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {menu.submenu.map((item) => (
                            <Link
                              to={item.path}
                              key={item.title}
                              style={{
                                textDecoration: 'none',
                                color: 'black'
                              }}
                            >
                              <ListItem button onClick={handleDrawerClose}>
                                <ListItemText primary={item.title} />
                              </ListItem>
                            </Link>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </Fragment>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* QB-7: Full width menu */}
          <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit'
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'right',
              alignItems: 'center',
              pr: 5
            }}
          >
            {menus.map((menu) =>
              menu.title === 'Shop' ? (
                <MenuItem
                  key={menu.title}
                  onClick={handleOpenMenu}
                  sx={{
                    my: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  {menu.title}
                  <ExpandMore />
                </MenuItem>
              ) : (
                <Link
                  to={menu.path}
                  key={menu.title}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 500,
                    fontSize: '1rem'
                  }}
                >
                  <MenuItem
                    onClick={handleOpenMenu}
                    sx={{
                      my: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    {menu.title}
                  </MenuItem>
                </Link>
              )
            )}

            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {menus.map((menu) => {
                if (menu.title === 'Shop' && menu.submenu) {
                  return menu.submenu.map((submenu) => (
                    <Link
                      to={submenu.path}
                      key={submenu.title}
                      style={{
                        textDecoration: 'none',
                        color: 'black'
                      }}
                    >
                      <MenuItem onClick={handleCloseMenu}>
                        {submenu.title}
                      </MenuItem>
                    </Link>
                  ));
                }
                return null;
              })}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Quick Buy"
                  sx={{
                    bgcolor: 'orange'
                  }}
                >
                  Q
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  to={setting.path}
                  key={setting.title}
                  onClick={handleCloseUserMenu}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 500,
                    fontSize: '1rem',
                    padding: '10px 20px'
                  }}
                >
                  {setting.title}
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
