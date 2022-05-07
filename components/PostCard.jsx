import React from 'react'
import moment from 'moment'
import Link from 'next/link'

import Image from 'next/image'

const PostCard = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-6 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image 
          src={post.featuredimage.url}
          alt={post.title}
          className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          layout='fill'
        />
        
      </div>
      <h1 className="transition duration-300 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`} passHref>
          {post.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto">
          <Image 
            alt={post.author.name}
            src={post.author.photo.url}
            height="50px"
            width="50px"
            className="align-middle rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default PostCard