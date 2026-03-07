'use client';

import dynamic from 'next/dynamic';
import type { FaqItem } from './Faq';

const FaqInner = dynamic(() => import('./Faq'), { ssr: false });

export type FaqClientProps = {
  items: FaqItem[];
  title?: string;
};

export default function FaqClient(props: FaqClientProps) {
  return <FaqInner {...props} />;
}
