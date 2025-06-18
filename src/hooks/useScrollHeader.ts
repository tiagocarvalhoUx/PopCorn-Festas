import { useEffect } from 'react';

export const useScrollHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        header.classList.toggle('rolagem', window.scrollY > 10);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

