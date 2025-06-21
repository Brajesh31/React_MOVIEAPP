export default function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger my-2 text-center" role="alert">
      {message}
    </div>
  );
}
