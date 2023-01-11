import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: {videoId }, snippet } }) => {


  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : `/video/${videoId}` }>
        <CardMedia image={snippet?.thumbnails?.high.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
         />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : `/video/${videoId}` }>
          <Typography variant="subtitle1">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        
      </CardContent> 
    </Card>
  )
}

export default VideoCard