

export default function Dailyquote({ quote }) {
  return (
    <div>
      <h1>Daily Quote 💫</h1>

      <p>
        Discover inspiring words, meaningful thoughts, and powerful quotes
        that can brighten your day.
      </p>

      <h2>{quote.q}</h2>
      <p>— {quote.a}</p>
    </div>
  );
}

