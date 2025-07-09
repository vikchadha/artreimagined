export const dynamic = 'force-dynamic';

// Define the type for the params prop
// In Next.js 15+, params may be a Promise and must be awaited

type Params = { params: Promise<{ style: string }> };

export default async function PromptStylePage({ params }: Params) {
  const resolvedParams = await params;
  const style = resolvedParams.style || 'Unknown';

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