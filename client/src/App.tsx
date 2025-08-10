import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShortUrl("");
    setCopied(false);

    try {
      const response = await axios.post("http://localhost:5000/api/shorten", {
        original_url: longUrl,
      });
      setShortUrl(response.data.short_url);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "something went wrong"
        );
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!shortUrl) return;
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        setError("Failed to copy to clipboard");
      });
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter Url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
          style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          {loading ? "Shortening...." : "Shorten URL"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {shortUrl && (
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
          <button
            onClick={handleCopy}
            style={{ padding: "0.3rem 0.6rem", cursor: "pointer" }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
