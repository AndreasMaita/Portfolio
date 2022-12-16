import AlgorithmsContentSection from '@/components/partials/AlgorithmsContentSection';
import BlogContentSection from '@/components/partials/BlogContentSection';
import KMP from '@/components/shared/KMP';
import PageTitle from '@/components/shared/PageTitle';
import Pagination from '@/components/shared/Pagination';
import AppLayout from '@/layouts/AppLayout';
import classNames from 'classnames';
import Link from 'next/link';


const Content = () => {
  return (
    <AppLayout title="Content">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Content', path: '' },
        ]}
      >
        Content
      </PageTitle>
      <div className="container py-10">
        <Link href="/content/blog">
          <div>
            <a
              className={classNames(
                'mb-4 text-4xl font-bold group flex items-center px-2 py-2 text-base font-medium cursor-pointer transition-colors duration-150 hover:text-primary-600'
              )}
            >
              Blog Posts
            </a>
          </div>
        </Link>
        <BlogContentSection numberOfPosts={3}></BlogContentSection>
        <h1 className="mb-4 text-4xl font-bold mt-8">Algorithms</h1>
        <AlgorithmsContentSection></AlgorithmsContentSection>
        <div className="mt-12">
          <Pagination />
        </div>
      </div>
    </AppLayout>
  );
};

export default Content;
