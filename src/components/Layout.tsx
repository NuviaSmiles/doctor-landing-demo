'use client';

import { Box, AppBar, Toolbar, Typography, IconButton, Avatar, Chip, Badge, Button } from '@mui/material';
import { Menu, Notifications, Search, AccountCircle, KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';
import Sidebar from './Sidebar';

const DRAWER_WIDTH = 280;
const COLLAPSED_WIDTH = 80;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Nuvia Smiles Provider Portal' }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const currentSidebarWidth = sidebarCollapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH;

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'white', overflow: 'hidden' }}>
      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${currentSidebarWidth}px)` },
          ml: { sm: 0 },
          backgroundColor: 'white',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: 'white',
            color: '#1f2937',
            borderBottom: '1px solid #e5e7eb',
            width: '100%',
            ml: 0,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            borderRadius: 0,
          }}
        >
          <Toolbar sx={{ px: 4, py: 2, minHeight: 72 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ 
                mr: 3, 
                display: { sm: 'none' },
                backgroundColor: '#f3f4f6',
                '&:hover': { backgroundColor: '#e5e7eb' },
                width: 40,
                height: 40,
                borderRadius: 0,
              }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu />
            </IconButton>
            
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" component="div" sx={{ 
                fontWeight: 700, 
                color: '#1f2937',
                letterSpacing: '-0.025em',
                fontSize: '1.5rem',
              }}>
                {title}
              </Typography>
            </Box>

            {/* Header Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Search */}
              <Box sx={{ position: 'relative' }}>
                <IconButton
                  color="inherit"
                  sx={{
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    '&:hover': { 
                      backgroundColor: '#f3f4f6',
                      border: '1px solid #d1d5db',
                    },
                    width: 44,
                    height: 44,
                    transition: 'all 0.2s ease-in-out',
                    borderRadius: 0,
                  }}
                >
                  <Search sx={{ fontSize: 20, color: '#6b7280' }} />
                </IconButton>
              </Box>
              
              {/* Notifications */}
              <Box sx={{ position: 'relative' }}>
                <Badge badgeContent={3} color="error" sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#ef4444',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    minWidth: 18,
                    height: 18,
                    border: '2px solid white',
                    borderRadius: 0,
                  }
                }}>
                  <IconButton
                    color="inherit"
                    sx={{
                      backgroundColor: '#f9fafb',
                      border: '1px solid #e5e7eb',
                      '&:hover': { 
                        backgroundColor: '#f3f4f6',
                        border: '1px solid #d1d5db',
                      },
                      width: 44,
                      height: 44,
                      transition: 'all 0.2s ease-in-out',
                      borderRadius: 0,
                    }}
                  >
                    <Notifications sx={{ fontSize: 20, color: '#6b7280' }} />
                  </IconButton>
                </Badge>
              </Box>
              
              {/* User Profile */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                ml: 2, 
                pl: 3, 
                borderLeft: '1px solid #e5e7eb',
                height: 44,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: '#3b82f6',
                      border: '2px solid #e5e7eb',
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: 0,
                    }}
                  >
                    SJ
                  </Avatar>
                  <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Typography variant="body2" sx={{ 
                      fontWeight: 600, 
                      fontSize: '0.875rem',
                      color: '#1f2937',
                      lineHeight: 1.2,
                    }}>
                      Dr. Sarah Johnson
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: '#6b7280', 
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}>
                      Lead Surgeon
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    sx={{
                      color: '#6b7280',
                      '&:hover': { color: '#374151' },
                      ml: 1,
                      borderRadius: 0,
                    }}
                  >
                    <KeyboardArrowDown />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        
        <Box sx={{ 
          p: 6, 
          width: '100%', 
          flex: 1,
          overflow: 'auto',
          height: '100%',
          backgroundColor: 'white',
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
