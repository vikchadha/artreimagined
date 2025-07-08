export const dynamic = 'force-dynamic';

type Params = { params: { style: string } };

export default function PromptStylePage({ params }: Params) {
  const style = params.style || 'Unknown';

  return (
    <main style={{ padding: '3rem 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>
        {style.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Prompts
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#666', margin: '1.5rem 0' }}>
        This page will soon feature curated prompts for the <strong>{style.replace(/-/g, ' ')}</strong> style.
      </p>
      <p style={{ color: '#999' }}>
        (Dynamic prompt style pages coming soon!)
      </p>
    </main>
  );
} 