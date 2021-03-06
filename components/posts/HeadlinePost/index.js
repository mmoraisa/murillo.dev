import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as Language from '../../../defaults/Language';

const HeadlinePost = ({ description, imageUrl, slug, tags, title }) => {
  return (
    <Language.Consumer>
      {({ locale }) => (
        <Fragment>
          <Link href={`${window.location.origin}/${locale}/blog/${slug}`}>
            <li className="headline-post" data-aos="fade-up">
              <div className="headline-post__info">
                <div className="headline-post__upper-info">
                  <span className="headline-post__info__span">{ tags.join(' & ') }</span>
                  <span className="headline-post__info__title">{ title }</span>
                </div>
                <div className="headline-post__description">{ description }</div>
              </div>
            </li>
          </Link>
          <style jsx>{`
            .headline-post {
              list-style-type: none;
              width: calc(25vw - 40px);
              height: calc(30vw - 40px);
              margin: 20px 20px 7vw 20px;
              overflow: hidden;
              padding: 20px;
              background: url(${imageUrl}?w=500&h=600&fit=thumb);
              background-size: cover;
              background-position: center;
              font-family: stolzl, sans-serif;
              color: #ffffff;
              text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
              border-radius: 10px;
              box-shadow: 5px 5px 20px rgba(0,0,0,.3);
              transition: .3s all ease;
              cursor: pointer;
            }

            .headline-post:hover {
              transform: scale(1.15);
              box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.3);
            }

            .headline-post:nth-child(even) {
              margin-top: -120px;
            }

            .headline-post__upper-info {
              display: flex;
              flex-direction: column;
            }

            .headline-post__info {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-between;
              height: 100%;
              pointer-events: none;
            }

            .headline-post__info__span {
              font-size: 1.3vw;
              line-height: 1.3vw;
              text-transform: uppercase;
            }

            .headline-post__description {
              font-size: 1.3vw;
              line-height: 1.3vw;
            }

            .headline-post__info__title {
              margin: 10px 0;
              font-size: 2vw;
              line-height: 2vw;
            }

            @media screen and (max-width: 900px) {

              .headline-post {
                width: 100%;
                height: calc(90vw - 40px);
                margin: 40px 0;
                order: 0;
              }

              .headline-post:hover {
                transform: none;
                box-shadow: 5px 5px 20px rgba(0,0,0,.3);
              }

              .headline-post:nth-child(even) {
                margin-top: initial;
              }

              .headline-post__description {
                font-size: 4vw;
                line-height: 4vw;
              }

              .headline-post__info__span {
                font-size: 5vw;
                line-height: 5vw;
              }

              .headline-post__info__title {
                font-size: 8vw;
                line-height: 8vw;
              }

            }
          `}</style>
        </Fragment>
      )}
    </Language.Consumer>
  );
};

HeadlinePost.propTypes = {
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default HeadlinePost;
