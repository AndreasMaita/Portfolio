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
          <a
            className={classNames(
              'group mb-4 mt-8 flex cursor-pointer items-center px-2 py-2 text-4xl font-bold font-medium transition-colors duration-150 hover:text-primary-600'
            )}
          ></a>
        </Link>
        <BlogContentSection numberOfPosts={3}></BlogContentSection>
      </div>
    </AppLayout>
  );
};

export default Content;
