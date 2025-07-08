export default function PromptStyleIndexPage() {
  return (
    <main style={{ padding: '3rem 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>
        Browse by Style
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#666', margin: '1.5rem 0' }}>
        Please select a style to view related prompts.
      </p>
      <p style={{ color: '#999' }}>
        (Try Cyberpunk, Fantasy Art, or any other style!)
      </p>
    </main>
  );
} 