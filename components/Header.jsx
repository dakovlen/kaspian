import React, {useContext} from 'react'

import Link from 'next/link'

const categories = [
  {name: "React", slug: "react"},
  {name: "Web dev", slug: "web-dev"},
]

const Header = () => {
  return (
    <header className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-5'>
        <div className='md:float-left block'>
          <Link href="#" passHref>
            <span className='cursor-pointer font-bold text-4xl text-white'>Logo</span>
          </Link>
        </div>

        <div className='hidden md:float-right md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} passHref>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header