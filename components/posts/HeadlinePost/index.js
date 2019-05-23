import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';

const HeadlinePost = ({ description, imageUrl, tags, title }) => {

  AOS.init();

  return (
    <Fragment>
      <li className="headline-post" data-aos="fade-up">
        <div className="headline-post__info">
          <div className="headline-post__upper-info">
            <span className="headline-post__info__span">{ tags.join(' & ') }</span>
            <span className="headline-post__info__title">{ title }</span>
          </div>
          <div className="headline-post__description">{ description }</div>
        </div>
      </li>
      <style jsx>{`
        .headline-post {
          list-style-type: none;
          width: calc(30vw - 40px);
          height: calc(35vw - 40px);
          margin: 20px 20px 7vw 20px;
          overflow: hidden;
          padding: 20px;
          background: url(${imageUrl});
          font-family: stolzl, sans-serif;
          color: #ffffff;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          box-shadow: 5px 5px 20px rgba(0,0,0,.3);
          transition: .3s all ease;
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
        }
        .headline-post__info__span {
          text-transform: uppercase;
        }
        .headline-post__info__title {
          margin: 10px 0;
          font-size: 36px;
          line-height: 36px;
        }
      `}</style>
    </Fragment>
  );
};

HeadlinePost.propTypes = {
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default HeadlinePost;
