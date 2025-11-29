// src/lib/regexEngine.ts

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function highlightText(
  text: string,
  pattern: string,
  flags: string
): { highlighted: string; count: number; error: string | null } {
  if (!pattern.trim()) {
    return {
      highlighted: escapeHtml(text),
      count: 0,
      error: null
    };
  }

  let regex: RegExp;
  try {
    // Force correct flag order and deduplication
    const normalizedFlags = [...new Set(flags.split(''))].sort().join('');
    regex = new RegExp(pattern, normalizedFlags);
  } catch (e) {
    const msg = (e as Error).message;

    // Human-readable error messages (FR07 compliance)
    const friendlyErrors: Record<string, string> = {
      'Unterminated group': 'Unterminated group (missing closing ")")',
      'unterminated parenthetical': 'Unterminated group (missing closing ")")',
      'Invalid group': 'Invalid grouping or character class',
      'Nothing to repeat': 'Quantifier applied to nothing (e.g. * or + at start)',
      'Invalid regular expression': 'Invalid regex syntax',
      '\\ at end of pattern': 'Trailing backslash (incomplete escape)',
      'Invalid escape': 'Invalid escape sequence',
    };

    let friendly = msg;
    for (const [key, value] of Object.entries(friendlyErrors)) {
      if (msg.includes(key)) {
        friendly = value;
        break;
      }
    }

    return {
      highlighted: escapeHtml(text),
      count: 0,
      error: friendly
    };
  }

  const parts: string[] = [];
  let lastIndex = 0;
  let count = 0;
  let match: RegExpExecArray | null;

  // Use a fresh copy of the regex to avoid state issues
  const execRegex = new RegExp(regex.source, regex.flags);

  while ((match = execRegex.exec(text)) !== null) {
    const start = match.index;
    const end = execRegex.lastIndex;

    parts.push(escapeHtml(text.slice(lastIndex, start)));
    parts.push('<span class="highlight">' + escapeHtml(match[0]) + '</span>');

    lastIndex = end;
    count++;

    if (!regex.global && !regex.sticky) break;

    // Prevent infinite loop on zero-length matches
    if (match[0].length === 0) {
      execRegex.lastIndex++;
    }
  }

  parts.push(escapeHtml(text.slice(lastIndex)));

  return {
    highlighted: parts.join(''),
    count,
    error: null
  };
}