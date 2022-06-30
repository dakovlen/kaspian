export const BlogCard = ({title, description, likeCount, likePost}) => {
  
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button onClick={ likePost }>Like</button>
        { likeCount }
      </div>
    </div>
  )
}