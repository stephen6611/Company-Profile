import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import blogImage1 from 'assets/blog-1-1.png';
import blogImage2 from 'assets/blog-1-2.png';
import blogImage3 from 'assets/blog-1-3.png';
import blogImage4 from 'assets/blog-1-4.png';

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'Mesin Offset',
    description:
      'Dokumentasi Aktivitas perbaikan mesin offset yang pernah ditangani oleh CV. Grafika Teknik Mandiri ',
    path: '/',
    linkLabel: 'Learn More',
  },
  {
    image: null,
    title:
      'Kami memberikan pelayanan perbaikan yang terbaik.',
    description: null,
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage3,
    title: '',
    description: null,
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage2,
    title: 'Kondisi Lapangan',
    description:
      'Gambaran kondisi mesin offset yang diservis ',
    path: '/',
    linkLabel: 'Learn More',
  },
  {
    image: blogImage4,
    title:
      '',
    description: null,
    path: '/',
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Galeri"
          text="Dokumentasi CV. Grafika Teknik Mandiri"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
    mt: '90px'
  },
  blogWrapper: {
    mx: '-15px',
  },
};
