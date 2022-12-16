
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from '@/styles/modules/Post.module.scss';
import Post from "../shared/Post";

const AlgorithmsContentSection = () => {
    return (
        <div className={classNames(styles['post'], 'bg-white dark:bg-gray-700')}>
        <Link href={"href"}>
          <a className={styles['post-image']}>
          </a>
        </Link>
        <div className="p-6">
          <Link href={"href"}>
            // TODO 
            <a className="block text-xl font-semibold hover:text-primary-500 hover:underline">Knuth-Morris-Pratt Algorithm</a>
          </Link>
          <time className="mt-2 inline-block text-gray-500">Today</time>
        </div>
      </div>
    );
}

export default AlgorithmsContentSection;