import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

const FacebookIconShare = () => {
  const handleFacebookShare = () => {
    const pageUrl = encodeURIComponent(window.location.href);
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    window.open(fbShareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <FaFacebookSquare
      className="text-blue-600 text-3xl cursor-pointer hover:scale-110 transition-transform"
      onClick={handleFacebookShare}
      title="Share on Facebook"
    />
  );
};

export default FacebookIconShare;
