'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    
    // Ignore special hashes (like #lumi-chat for chatbot)
    if (hash && hash !== '#lumi-chat') {
      // Wait for content to be fully rendered
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}

