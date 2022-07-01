import FavoriteIcon from '@mui/icons-material/Favorite';

import './BlogCard.css'
 
export const BlogCard = ({
  title, 
  description, 
  liked, 
  likePost
}) => {
  
  const heartFill = liked ? 'crimson' : 'black'

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button onClick={ likePost }>
          <FavoriteIcon style={{fill: heartFill}}/>
        </button>
      </div>
    </div>
  )
}