import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: {videoId }, snippet } }) => {


  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia image={snippet?.thumbnails?.high.url || demoThumbnailUrl}  />
      </Link>
    </Card>
  )
}

export default VideoCard