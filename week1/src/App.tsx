import React from 'react';
// Import the newly created component
import { Profile } from './components/Profile';
export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
      {/* Use the component and pass it the required props */}
      <Profile name="Your Name" role="Junior Developer" />
    </div>
  );
}