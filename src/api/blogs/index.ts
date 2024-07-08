import { NextApiRequest, NextApiResponse } from 'next';

const blogs = [
    {
        id: '1',
        title: 'Blog 1',
        summary: 'This is the summary for blog 1',
        content: 'This is the content for blog 1',
        imageUrl: '/images/blog1.jpg', 
    },
    {
        id: '2',
        title: 'Blog 2',
        summary: 'This is the summary for blog 2',
        content: 'This is the content for blog 2',
        imageUrl: '/images/blog2.jpg',
    },
    // Add more blogs here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(blogs);
}
