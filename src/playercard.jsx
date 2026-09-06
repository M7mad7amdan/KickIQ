export default function PlayerCard(props) {
  return (
    <div
      className="
        bg-white
        border
        border-gray-200

        rounded-xl
        sm:rounded-2xl

        p-4
        sm:p-5
        lg:p-6

        hover:shadow-md
        hover:-translate-y-1

        transition-all
        duration-300

        cursor-pointer
      "
    >

      <div
        className="
          flex
          items-start
          justify-between

          gap-4
        "
      >

        <div className="min-w-0">

          <h2
            className="
              text-lg
              sm:text-xl

              font-bold

              text-gray-900

              truncate
            "
          >
            {props.name}
          </h2>

          <p
            className="
              text-sm
              sm:text-base

              text-gray-500

              mt-1

              truncate
            "
          >
            {props.country}
          </p>

        </div>


        {/* Rating */}
        {props.rating && (
          <div
            className="
              shrink-0

              bg-blue-600
              text-white

              px-2.5
              sm:px-3

              py-1

              rounded-lg

              text-sm
              sm:text-base

              font-semibold
            "
          >
            {props.rating}
          </div>
        )}

      </div>


      <div
        className="
          border-t
          border-gray-100

          mt-5
          sm:mt-6

          pt-4
          sm:pt-5
        "
      >

        <p
          className="
            text-xs
            sm:text-sm

            text-gray-400
          "
        >
          Position
        </p>

        <p
          className="
            text-sm
            sm:text-base

            text-gray-800

            font-medium

            mt-1
          "
        >
          {props.position || "Unknown"}
        </p>

      </div>

    </div>
  );
}