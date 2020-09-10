import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const ImageSVG = ({ src, ...imgAttr }) => {
  const data = useStaticQuery(graphql`
    query {
      svgs: allFile(filter: { sourceInstanceName: { eq: "svgs" } }) {
        edges {
          node {
            relativePath
            publicURL
          }
        }
      }
    }
  `);

  const findImage = useMemo(
    () => data.svgs.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  if (!findImage) return null;

  let { node: { publicURL } = {} } = findImage;

  return <img src={publicURL} {...imgAttr} alt="" />
};

ImageSVG.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageSVG;
