/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Container } from 'react-bootstrap';

const InstaPost=({postDetail})=> {
    
  return <Container style={{height:'30rem',width:'30rem', marginTop:'50px'}}>

    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: '-2px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
            },
          }}
        >
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1688637079192-8eb1d6e4a30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
          />
        </Box>
        <Typography fontWeight="lg">{postDetail.postedBy.name}</Typography>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
          <MoreHoriz />
        </IconButton>
      </CardContent>
      <CardOverflow>
        <AspectRatio>
          <img src={postDetail.photo} alt="" loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <FavoriteBorder />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: '50%',
                width: `max(${6 - index}px, 3px)`,
                height: `max(${6 - index}px, 3px)`,
                bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
        <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardContent>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        >
         {postDetail.likes.length} likes
        </Link>
        <Typography fontSize="sm">
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
            {postDetail.postedBy.name}
          </Link>{' '}
          {postDetail.body}
        </Typography>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          startDecorator="…"
          sx={{ color: 'text.tertiary' }}
        >
          more
        </Link>
        <Link
          component="button"
          underline="none"
          fontSize="10px"
          sx={{ color: 'text.tertiary', my: 0.5 }}
        >
          2 DAYS AGO
        </Link>
      </CardContent>
      <CardOverflow sx={{ pb: 'var(--Card-padding)', display: 'flex' }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment…"
          sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
        />
        <Link disabled underline="none" role="button">
          Post
        </Link>
      </CardOverflow>
    </Card>
    </Container>
}
export default InstaPost