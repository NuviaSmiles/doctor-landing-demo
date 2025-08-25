'use client';

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Avatar,
  Chip,
  Badge,
  IconButton,
} from '@mui/material';
import {
  Dashboard,
  People,
  Assignment,
  Settings,
  Notifications,
  Person,
  ChevronRight,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const DRAWER_WIDTH = 280;
const COLLAPSED_WIDTH = 80;

const menuItems = [
  {
    text: 'Dashboard',
    icon: <Dashboard />,
    path: '/',
    badge: null,
  },
  {
    text: 'My Patients',
    icon: <People />,
    path: '/patients',
    badge: null,
  },
  {
    text: 'All Patients',
    icon: <Assignment />,
    path: '/all-patients',
    badge: null,
  },
  {
    text: 'Settings',
    icon: <Settings />,
    path: '/settings',
    badge: null,
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ open, onClose, collapsed, onToggleCollapse }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNavigation = (path: string) => {
    router.push(path);
    if (isMobile) {
      onClose();
    }
  };

  const currentWidth = collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH;

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
      sx={{
        width: currentWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: currentWidth,
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          color: '#374151',
          borderRight: '1px solid #e5e7eb',
          position: 'fixed',
          height: '100vh',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Header */}
      <Box sx={{ 
        p: collapsed ? 2 : 3, 
        pb: collapsed ? 2 : 2,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: collapsed ? 'auto' : 'auto',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        }
      }}>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: collapsed ? 0 : 3, 
          position: 'relative', 
          zIndex: 1,
          justifyContent: collapsed ? 'center' : 'flex-start',
          mt: collapsed ? 1 : 0,
        }}>
          <Box sx={{
            width: collapsed ? 32 : 120,
            height: collapsed ? 32 : 40,
            borderRadius: 0,
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: collapsed ? 0 : 2,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            <Image
              src="/logo.svg"
              alt="Nuvia Smiles Logo"
              width={collapsed ? 24 : 100}
              height={collapsed ? 24 : 32}
              style={{
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Box>
        </Box>
        
        {/* Doctor Info - Only show when not collapsed */}
        {!collapsed && (
          <Box sx={{ 
            backgroundColor: 'rgba(255,255,255,0.15)', 
            borderRadius: 0, 
            p: 2.5,
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 1,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <Avatar sx={{ 
                width: 36, 
                height: 36, 
                mr: 2, 
                bgcolor: 'rgba(255,255,255,0.25)',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: 0,
              }}>
                <Person sx={{ fontSize: 20 }} />
              </Avatar>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="body2" sx={{ 
                  fontWeight: 600, 
                  fontSize: '0.9rem', 
                  color: 'white',
                  mb: 0.5,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  Dr. Sarah Johnson
                </Typography>
                <Typography variant="caption" sx={{ 
                  opacity: 0.9, 
                  fontSize: '0.8rem', 
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  Lead Surgeon
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Chip
                label="Online"
                size="small"
                sx={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  fontSize: '0.75rem',
                  height: 24,
                  fontWeight: 600,
                  '& .MuiChip-label': { px: 1.5 },
                  boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3)',
                  borderRadius: 0,
                }}
              />
              <Box sx={{
                width: 8,
                height: 8,
                backgroundColor: '#10b981',
                boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.3)',
              }} />
            </Box>
          </Box>
        )}
      </Box>
      
      {/* Navigation */}
      <Box sx={{ 
        p: collapsed ? 1 : 2, 
        pt: collapsed ? 2 : 3, 
        flex: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {!collapsed && (
          <Typography variant="overline" sx={{ 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            color: '#6b7280',
            letterSpacing: '0.1em',
            mb: 2,
            display: 'block',
          }}>
            NAVIGATION
          </Typography>
        )}
        <List sx={{ p: 0, flex: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: collapsed ? 1 : 1 }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: 0,
                  backgroundColor: pathname === item.path ? '#f3f4f6' : 'transparent',
                  border: pathname === item.path ? '1px solid #d1d5db' : '1px solid transparent',
                  '&:hover': {
                    backgroundColor: pathname === item.path ? '#f3f4f6' : '#f9fafb',
                    border: pathname === item.path ? '1px solid #d1d5db' : '1px solid #e5e7eb',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  },
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  py: collapsed ? 1.5 : 1.5,
                  px: collapsed ? 1 : 2,
                  minHeight: collapsed ? 48 : 'auto',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                }}
                title={collapsed ? item.text : undefined}
              >
                <ListItemIcon sx={{ 
                  color: pathname === item.path ? '#3b82f6' : '#6b7280', 
                  minWidth: collapsed ? 'auto' : 40,
                  transition: 'color 0.2s ease-in-out',
                }}>
                  {item.icon}
                </ListItemIcon>
                {!collapsed && (
                  <>
                    <ListItemText 
                      primary={item.text}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: pathname === item.path ? 600 : 500,
                          fontSize: '0.9rem',
                          color: pathname === item.path ? '#1f2937' : '#374151',
                          transition: 'all 0.2s ease-in-out',
                        },
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {item.badge && (
                        <Chip
                          label={item.badge}
                          size="small"
                          sx={{
                            backgroundColor: pathname === item.path ? '#3b82f6' : '#e5e7eb',
                            color: pathname === item.path ? 'white' : '#374151',
                            fontSize: '0.7rem',
                            height: 20,
                            minWidth: 20,
                            fontWeight: 600,
                            '& .MuiChip-label': { px: 0.5 },
                            borderRadius: 0,
                          }}
                        />
                      )}
                      {pathname === item.path && (
                        <ChevronRight sx={{ 
                          fontSize: 16, 
                          color: '#3b82f6',
                          ml: 0.5,
                        }} />
                      )}
                    </Box>
                  </>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ p: collapsed ? 1 : 2 }}>
        {/* Collapse/Expand Icon - Bottom */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: collapsed ? 'center' : 'flex-end', 
          mb: 2 
        }}>
          <IconButton
            onClick={onToggleCollapse}
            sx={{
              backgroundColor: '#f3f4f6',
              color: '#6b7280',
              '&:hover': {
                backgroundColor: '#e5e7eb',
                color: '#374151',
              },
              width: collapsed ? 32 : 36,
              height: collapsed ? 32 : 36,
              transition: 'all 0.2s ease-in-out',
              borderRadius: 0,
              border: '1px solid #d1d5db',
            }}
          >
            {collapsed ? <ChevronRightIcon sx={{ fontSize: 16 }} /> : <ChevronLeft sx={{ fontSize: 20 }} />}
          </IconButton>
        </Box>

        <Divider sx={{ 
          backgroundColor: '#e5e7eb', 
          mb: 2,
          '&::before': { borderTop: '1px solid #e5e7eb' },
          '&::after': { borderTop: '1px solid #e5e7eb' },
        }} />

        {/* Notifications - Only show when not collapsed */}
        {!collapsed && (
          <Box sx={{ 
            backgroundColor: '#f8fafc', 
            borderRadius: 0, 
            p: 2.5,
            border: '1px solid #e2e8f0',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#f1f5f9',
              border: '1px solid #cbd5e1',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Notifications sx={{ 
                  fontSize: 20, 
                  mr: 1.5, 
                  color: '#6b7280',
                }} />
                <Box>
                  <Typography variant="body2" sx={{ 
                    fontSize: '0.875rem', 
                    fontWeight: 600, 
                    color: '#1f2937',
                    mb: 0.5,
                  }}>
                    Notifications
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    fontSize: '0.75rem', 
                    color: '#6b7280',
                    fontWeight: 500,
                  }}>
                    New messages
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
