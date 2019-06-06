import React, { Fragment } from 'react';
import Link from 'next/link';
import * as Language from '../../defaults/Language';

const BlogSearchHit = ({ hit }) => {
  return (
    <Fragment>
      <Language.Consumer>
        {({ locale }) => (
          hit.fields.slug &&
          <Link href={`${window.location.origin}/${locale}/blog/${hit.fields.slug[locale]}`}>
            <div className="blog-search-hit">
              <span className="blog-search-hit__title">{hit.fields.title[locale]}</span>
              <span className="blog-search-hit__description">{hit.fields.description[locale]}</span>
              <span className="blog-search-hit__tags">
                {
                  hit.fields.tags[locale] &&
                  hit.fields.tags[locale].map(tag => (
                    <div
                      key={tag}
                      className="blog-search-hit__tags__tag">
                      {tag}
                    </div>
                  ))
                }
              </span>
            </div>
          </Link>
        )}
      </Language.Consumer>
      <style jsx>{`

        .blog-search-hit {
          width: 300px;
          background: white;
          box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
          margin: 10px 5px;
          display: flex;
          flex-direction: column;
          padding: 10px;
          font-size: 12px;
          font-family: stolzl, sans-serif;
          font-weight: 200;
          border-radius: 10px;
          transition: .1s all ease;
          cursor: pointer;
        }

        .blog-search-hit:hover {
          transform: scale(1.05);
          box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.10);
        }

        .blog-search-hit__title {
          font-weight: 400;
          font-size: 14px;
          line-height: 14px;
          margin-bottom: 5px;
        }

        .blog-search-hit__description {
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .blog-search-hit__tags {
          margin-top: 3px;
          font-size: 10px;
          display: flex;
        }

        .blog-search-hit__tags__tag {
          color: #8e8e8e;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          padding: 2px 4px;
          margin: 5px 5px 0 0;
        }

        @media screen and (max-width: 650px) {

          .blog-search-hit {
            width: calc(100vw - 60px);
          }

        }

      `}</style>
    </Fragment>
  );
};

export default BlogSearchHit;
