

export default function Dailyquote({ quote }) {
  return (
    <div>
      <h1>Daily Quote 💫</h1>

      <p>
        Discover inspiring words, meaningful thoughts, and powerful quotes
        that can brighten your day.
      </p>

      {quote && (
        <>
          <h2>{quote.quote}</h2>
          <p>— {quote.author}</p>
        </>
      )}
    </div>
  );
}