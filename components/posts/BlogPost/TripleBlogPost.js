import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import * as Language from '../../../defaults/Language';

const TripleBlogPost = ({ post }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Language.Consumer>
      {({ location }) => (
        <Fragment>
          <Link prefetch href={`/${location}/blog/${post.fields.slug}`}>
            <div className="post" data-aos="fade-up">
              <div className="post__content">
                <span className="post__content__date">18/05/2019</span>
                <span className="post__content__title">{post.fields.title}</span>
                <div className="post__content__separator"></div>
                <span className="post__content__description">{post.fields.description}</span>
              </div>
              <div
                className="post__image"
                style={{
                  background: `url(${post.fields.heroImage.fields.file.url}?w=300&h=300&fit=thumb)`,
                  backgroundSize: 'cover',
                }}>
              </div>
              <div className="post__video">
                <div className="post__video__backdrop"></div>
                {
                  post.fields.video && post.fields.video.length &&
                  <iframe
                    className="post__video__content"
                    src={post.fields.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                }
              </div>
            </div>
          </Link>
          <style jsx>{`

            .post {
              display: flex;
              background: white;
              transform: scale(1);
              transition: .1s all ease;
              cursor: pointer;
            }

            .post:hover {
              transform: scale(1.05);
              z-index: 1;
              box-shadow: 3px 3px 10px rgba(0,0,0,.15);
            }

            .post > div {
              width: 240px;
              min-height: 240px;
              height: auto;
              padding: 30px;
            }

            .post__content {
              display: flex;
              flex-direction: column;
              background: white;
            }

            .post__content__date {
              font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
              color: #afafaf;
              font-size: 14px;
            }

            .post__content__title {
              font-family: stolzl, sans-serif;
              font-weight: 600;
              font-size: 26px;
              margin: 10px 0 0 0;
              text-transform: uppercase;
            }

            .post__content__separator {
              margin: 30px 0;
              border: 1px solid #e4e4e4;
              width: 50px;
            }

            .post__content__description {
              color: rgba(0,0,0,.84);
              font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
              font-weight: 100;
              font-size: 16px;
              line-height: 22px;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              word-break: break-word;
            }

            .post__image {
              background: #9ec6f1;
            }

            .post__video {
              padding: 0 !important;
            }

            .post__video__backdrop {
              position: absolute;
              width: 300px;
              height: 100%;
              background: #005f8854;
              pointer-events: none;
            }

            .post__video__content {
              width: calc(100% + 60px);
              height: 100%;
            }

            @media screen and (max-width: 970px) {

              .post {
                width: calc(100% - 30px);
                margin: 10px 15px;
                border-radius: 10px;
                box-shadow: 5px 5px 20px rgba(0,0,0,.3);
                overflow: hidden;
              }

              .post > div {
                padding: 10px;
                width: initial;
                height: initial;
              }

              .post.--is-even {
                align-self: initial;
              }

              .post__content{
                flex: 1;
              }

              .post__image {
                width: 20% !important;
                order: -1;
              }

              .post__content__separator {
                margin: 10px 0;
              }

              .post__content__title {
                font-size: 22px;
              }

              .post__video {
                display: none;
              }

            }

          `}</style>
        </Fragment>
      )}
    </Language.Consumer>
  );
};

export default TripleBlogPost;
