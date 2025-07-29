"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import FinancialEventAnalyzer from '../../components/FinancialEventAnalyzer';
// Wrapper component to handle search params
function AnalyzerContent() {
  const searchParams = useSearchParams();
  const [initialEvent, setInitialEvent] = useState('');

  useEffect(() => {
    // Get the event from URL parameters
    const event = searchParams.get('event');
    const source = searchParams.get('source');
    
    if (event) {
      setInitialEvent(event);
      console.log('Event from landing page:', event);
      console.log('Source:', source);
    }
  }, [searchParams]);

  return <FinancialEventAnalyzer initialEvent={initialEvent} />;
}

export default function AnalyzerPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>}>
      <AnalyzerContent />
    </Suspense>
  );
}
