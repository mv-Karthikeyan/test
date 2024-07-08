import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Container, Card, CardMedia, CardContent } from '@mui/material';

interface Blog {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
}

const BlogDetail: React.FC = () => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchBlogDetails = async () => {
                try {
                    const response = await fetch(`/api/blogs/${id}`);
                    const data = await response.json();
                    setBlog(data);
                } catch (error) {
                    console.error('Error fetching blog details:', error);
                }
            };

            fetchBlogDetails();
        }
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <Container maxWidth="md">
            <Card>
                <CardMedia component="img" alt={blog.title} height="400" image={blog.imageUrl} />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        {blog.title}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {blog.content}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default BlogDetail;
