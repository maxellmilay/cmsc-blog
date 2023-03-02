import React from 'react'
import { ClipLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="flex h-screen top-0 left-0 w-screen fixed justify-center items-center">
      <ClipLoader
        color="#2E2E2E"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
