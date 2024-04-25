import { Adb, ExpandLess, ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
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
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { menuDropdown, menus, settings } from "./menu";

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
    if (event.currentTarget.textContent === "Shop") {
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
          bgcolor: "white",
          color: "black",
          px: 2,
          boxShadow: "none",
        }}
      >
        <Toolbar disableGutters>
          {/* QB-7: Responsive menu */}
          <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerClose}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "35%",
                },
              }}
            >
              <List>
                {menus.map((menu) => (
                  <div key={menu}>
                    <ListItem
                      button
                      onClick={
                        menu === "Shop" ? handleClickShop : handleDrawerClose
                      }
                    >
                      <ListItemText primary={menu} />
                      {menu === "Shop" ? (
                        openShop ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : null}
                    </ListItem>
                    {menu === "Shop" && (
                      <Collapse in={openShop} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {menuDropdown.map((item) => (
                            <ListItem
                              button
                              key={item}
                              onClick={handleDrawerClose}
                            >
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </div>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* QB-7: Full width menu */}
          <Adb sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {menus.map((menu) => (
              <MenuItem
                key={menu}
                onClick={handleOpenMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {menu}
                {menu === "Shop" && <ExpandMore />}
              </MenuItem>
            ))}

            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {menuDropdown.map((item) => (
                <MenuItem key={item} onClick={handleCloseMenu}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Quick Buy"
                  sx={{
                    bgcolor: "orange",
                  }}
                >
                  Q
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
