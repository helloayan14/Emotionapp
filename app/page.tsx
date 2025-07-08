'use client'

import { useState } from 'react';
import Head from 'next/head';

console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
type EmotionResponse = {
  emotion: string;
  confidence: number;
};

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<EmotionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || 'Something went wrong');
      }

      const data: EmotionResponse = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to analyze text');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Emotion Reflection Tool</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-tr from-[#1e1b4b] via-[#312e81] to-[#1e3a8a] text-white px-4 py-10 flex flex-col items-center justify-start transition-all duration-300">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Emotion Reflection Tool</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl space-y-4"
        >
          <textarea
            className="w-full p-3 rounded-md text-white min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write how you feel today..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all py-2 px-4 rounded text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex justify-center items-center space-x-2">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Analyzing...</span>
              </div>
            ) : (
              'Reflect Emotion'
            )}
          </button>
        </form>

        {error && (
          <div className="mt-6 text-red-400 bg-white/10 p-4 rounded max-w-md text-center animate-fade-in">
            {error}
          </div>
        )}

        {result && !loading && (
          <div className="mt-6 bg-white/10 p-6 rounded-lg shadow-lg max-w-md w-full text-center animate-fade-in backdrop-blur">
            <h2 className="text-xl font-semibold mb-2">Detected Emotion</h2>
            <p className="text-2xl text-yellow-300 font-bold">{result.emotion}</p>
            <p className="text-sm text-white/80 mt-1">
              Confidence: {(result.confidence * 100).toFixed(1)}%
            </p>
          </div>
        )}
      </main>
    </>
  );
}
