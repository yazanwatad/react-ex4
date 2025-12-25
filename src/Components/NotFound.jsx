export default function NotFound() {
  return (
    <div>
      <h3>404</h3>
      <p>Page not found :( </p>
              <button onClick={() => window.history.back()}>Back</button>

    </div>
  );
}