import './styles/style.css'

export const Loader = () => {
  return (
    <svg
      className="svg"
      viewBox="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <symbol id="s--circle">
        <circle r="10" cx="20" cy="20"></circle>
      </symbol>

      <g className="g-circles g-circles--v1">
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
        <g className="g--circle">
          <use xlinkHref="#s--circle" className="u--circle" />
        </g>
      </g>
    </svg>
  )
}
