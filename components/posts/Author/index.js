import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';

const Author = ({ author, smallScreenStyles, styles }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <div className="author" data-aos="fade-up">
        <h2>About the author</h2>
        <div>
          <img className="author__image" src={`${author.fields.image.fields.file.url}?w=100&h=100&fit=thumb`} />
          <div className="author__info">
            <span className="author__info__name">{author.fields.name}</span>
            <span className="author__info__title">{author.fields.title}</span>
            <span className="author__info__company">{author.fields.company}</span>
            <span className="author__info__short-bio">{author.fields.shortBio}</span>
            <div className="author__info__contacts">

            </div>
          </div>
        </div>
        {/*JSON.stringify(author.fields)*/}
      </div>
      <style jsx>{`

        .author {
          width: 500px;
          background: #fff;
          box-shadow: 5px 5px 20px rgba(0,0,0,.2);
          border-radius: 10px;
          padding: 60px;
          ${styles}
        }

        .author h2 {
          margin: 0 0 30px 0;
          font-size: 26px;
          line-height: 26px;
          background-image: linear-gradient(to bottom,#4CB8C4,#3CD3AD);
          color: transparent;
          -webkit-background-clip: text;
          font-family: stolzl,sans-serif;
        }

        .author > div {
          display: flex;
        }

        .author__image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        .author__info {
          padding: 0 0 0 25px;
          display: flex;
          flex-direction: column;
          color: rgba(0,0,0,.84);
        }

        .author__info__name,
        .author__info__title,
        .author__info__company {
          font-family: stolzl,sans-serif;
        }

        .author__info__name {
          font-size: 20px;
        }

        .author__info__title,
        .author__info__company {
          font-size: 14px;
        }

        .author__info__short-bio {
          margin-top: 15px;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          word-break: break-word;
          font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
        }

        @media screen and (max-width: 900px) {

          .author {
            padding: 20px;
            width: calc(100% - 70px);
            ${smallScreenStyles}
          }

          .author > div {
            flex-direction: column;
            align-items: center;
          }

          .author__image {
            margin-bottom: 10px;
          }

          .author__info {
            padding: 0;
            align-items: center;
          }

        }

      `}</style>
    </Fragment>
  );
};

export default Author;
