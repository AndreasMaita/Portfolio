import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AdminLayout';
import BlogContentSection from '@/components/partials/BlogContentSection';
import Menu from '@/components/partials/Menu';

const Blog = () => {
  return (
    <AppLayout title='Blog'>
      <Menu></Menu>
      <div className='mt-16'></div>
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Content', path: '/content' },
          { label: 'Blog', path: '' }
        ]}
      >Blog</PageTitle>
      <div className='container py-10'>
        <BlogContentSection numberOfPosts={10}></BlogContentSection>
      </div>
    </AppLayout>
  );
};

export default Blog;