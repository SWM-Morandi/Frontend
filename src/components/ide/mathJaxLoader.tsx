import React, { useEffect } from 'react';

export default function MathJaxLoader() {
  useEffect(() => {
    // MathJax 초기화 스크립트
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
    document.head.appendChild(script);

    script.onload = () => {
      if ((window as any).MathJax) {
        (window as any).MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [
              ['$', '$'],
              ['\\(', '\\)'],
            ],
            processEscapes: true,
          },
          CommonHTML: { scale: 85 },
        });
        (window as any).MathJax.Hub.Queue([
          'Typeset',
          (window as any).MathJax.Hub,
        ]);
      }
    };
  }, [(window as any).MathJax]);

  return null;
}
