type Props = {
  indicatorData: {
    loading: boolean;
    error: string | null;
  };
};

export const FetchArticlesIndicator = (props: Props) => {
  const { loading, error } = props.indicatorData;
  if (!loading && !error) {
    return null;
  }

  const className =
    "relative border rounded-[2%_6%_5%_4%_/_1%_1%_2%_4%] border-gray-500 text-center p-4 font-sans-alt " +
    "before:content-[''] before:w-full before:h-full before:absolute before:border-l-24 before:left-0 before:top-0 before:border-gray-200 " +
    "after:content-[''] after:h-full after:absolute after:border after:border-gray-200 after:block after:left-1/2 after:top-1/2 after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[1.015] after:rotate-[.5deg] after:rounded-[1%_1%_2%_4%_/_2%_6%_5%_4%]";
  const errorClass = error ? "text-red-500" : "";

  return (
    <div className={`${className} ${errorClass}`}>
      {loading ? "Ładowanie..." : error}
    </div>
  );
};
