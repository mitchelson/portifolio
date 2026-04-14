import React from 'react';

// ─────────────────────────────────────────────
// Toggle this flag to enable / disable all keyword highlights.
// Set to false to render plain text with no markup.
// ─────────────────────────────────────────────
export const ENABLE_KEYWORD_HIGHLIGHTS = true;

const KEYWORDS = [
  // Languages & runtimes
  'React Native',
  'TypeScript',
  'JavaScript',
  'Swift',
  'Flutter',
  'Next.js',
  'Node.js',
  // Libraries & frameworks
  'Zustand',
  'React Query',
  'TanStack Query',
  'styled-components',
  'framer-motion',
  // Expo ecosystem
  'Expo',
  'Expo EAS',
  // Testing
  'Jest',
  // Infra & tools
  'Socket.IO',
  'Firebase',
  'Firebase Remote Config',
  'Firebase Cloud Storage',
  'Segment',
  'Sentry',
  'UXCam',
  'OneSignal',
  'GitHub Actions',
  'CI/CD',
  'Xcode',
  'Gradle',
  'n8n',
  // CMS & LMS
  'Joomla',
  'Moodle',
  // Stores
  'Apple App Store',
  'Google Play Store',
  // Payments
  'Stripe',
  'Apple Pay',
  'Google Pay',
  'PIX',
  // Concepts & patterns
  'Clean Architecture',
  'REST API',
  'RESTful',
  'Face ID',
  // Auth & analytics
  'i18n',
];

// Sort by length descending so longer phrases match before substrings
const SORTED_KEYWORDS = [...KEYWORDS].sort((a, b) => b.length - a.length);

function buildRegex(): RegExp {
  const escaped = SORTED_KEYWORDS.map((k) =>
    k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  return new RegExp(`(${escaped.join('|')})`, 'gi');
}

const keywordRegex = buildRegex();

interface HighlightedTextProps {
  text: string;
  className?: string;
}

export default function HighlightedText({ text, className }: HighlightedTextProps) {
  if (!ENABLE_KEYWORD_HIGHLIGHTS) {
    return <span className={className}>{text}</span>;
  }

  const parts = text.split(keywordRegex);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const isKeyword = SORTED_KEYWORDS.some(
          (k) => k.toLowerCase() === part.toLowerCase()
        );
        if (isKeyword) {
          return (
            <span
              key={i}
              className="text-white/90 font-medium border-b border-white/25 pb-px"
            >
              {part}
            </span>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </span>
  );
}
