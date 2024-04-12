'use client';

import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetcallById';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';

const Meeting = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const { isLoaded, user } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!call)
    return (
      <p className='text-center text-3xl font-bold text-white'>
        Call Not Found
      </p>
    );
  if (!isLoaded || isCallLoading) return <Loader />;
  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
