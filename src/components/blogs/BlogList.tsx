import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

interface Blog {
    id: string;
    title: string;
    summary: string;
    imageUrl: string;
}

const BlogList: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blogs');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleBlogClick = (id: string) => {
        router.push(`/blogs/${id}`);
    };

    return (
        <Grid container spacing={4}>
            {blogs.map((blog) => (
                <Grid item key={blog.id} xs={12} sm={6} md={4}>
                    <Card onClick={() => handleBlogClick(blog.id)}>
                        <CardActionArea>
                            <CardMedia component="img" alt={blog.title} height="140" image={blog.imageUrl} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {blog.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default BlogList;
