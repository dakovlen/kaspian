import React, {useContext} from 'react'

import Link from 'next/link'

const categories = [
  {name: "React", slug: "react"},
  {name: "Web dev", slug: "web-dev"},
]

const Header = () => {
  return (
    <header className='container mx-auto mb-8'>
      <div className='border-b w-full flex items-center justify-between border-blue-400 py-5'>
        <div className='md:flex'>
          <Link href="./">
            <span className='cursor-pointer font-bold text-4xl text-white'>Logo</span>
          </Link>
        </div>

        <div className=''>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
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