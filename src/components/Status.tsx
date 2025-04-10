type StatusProps = {
  loading: boolean;
  error: string | null;
  className: string;
};

export function Status({ loading, error, className }: StatusProps) {
  if (!loading && !error) {
    return null;
  }

  const textColor = error ? "text-red-500" : "text-gray-500";

  return (
    <div className={`${className} ${textColor}`}>
      {loading ? "Ładowanie..." : error}
    </div>
  );
}
