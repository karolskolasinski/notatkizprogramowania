type Props = {
  indicatorData: {
    loading: boolean;
    error: string | null;
  };
};

export const FetchCategoriesIndicator = (props: Props) => {
  const { loading, error } = props.indicatorData;
  if (!loading && !error) {
    return null;
  }
  const errorClass = error ? "text-red-500" : "";

  return (
    <div
      className={`h-52 rounded-lg shadow duration-300 hover:shadow-md flex items-center justify-center uppercase text-center border border-gray-200 ${errorClass}`}
    >
      {loading ? "Ładowanie..." : error}
    </div>
  );
};
