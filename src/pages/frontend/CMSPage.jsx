import React, { useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';

export default function CMSPage() {
  const { slug } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">CMS Route</h1>
      <p>This is the content for route: <strong>{slug}</strong></p>
    </div>
  );
}
