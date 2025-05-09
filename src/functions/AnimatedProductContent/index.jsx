import { useEffect, useRef } from 'react';

export function AnimatedProductContent({ id, className = '', children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (id !== 'produtos') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const products = section.querySelectorAll('.products-content');
          products.forEach((el) => {
            el.style.transitionDelay = `0ms`;
            el.classList.add('x-appear');
          });
        } else {
          const products = section.querySelectorAll('.products-content');
          products.forEach((el) => {
            el.classList.remove('x-appear');
            el.style.transitionDelay = '0ms';
          });
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [id]);

  return (
    <section id={id} ref={sectionRef} className={className}>
      {children}
    </section>
  );
}
