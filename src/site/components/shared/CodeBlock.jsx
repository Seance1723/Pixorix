import { useState } from 'react';

export function CodeBlock({ code, label = 'Code example' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="code-block" data-reveal>
      <div className="code-block__header">
        <span>{label}</span>
        <button className="px-button px-button--ghost px-button--sm" type="button" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
