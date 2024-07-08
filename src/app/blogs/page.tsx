import BlogByteAI from '@/components/blogs/BlogByteAI'
import BlogByteMain from '@/components/blogs/BlogByteMain'
// import BlogList from '@/components/blogs/BlogList'
import BlogTypesSectionOne from '@/components/blogs/BlogTypesSectionOne'
import BlogTypesSectionTwo from '@/components/blogs/BlogTypesSectionTwo'
import Carousel from '@/components/blogs/Carousel'
import GlobalLayout from '@/components/Layout/GlobalLayout'
import React from 'react'

const page = () => {
    return (
        <GlobalLayout>
            <BlogByteMain />
            <Carousel />
            {/* Blog list below */}
            {/* <BlogList /> */}

            <BlogTypesSectionOne />
            <BlogByteAI />
            <BlogTypesSectionTwo />
        </GlobalLayout>
    )
}

export default page