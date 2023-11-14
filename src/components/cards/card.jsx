import React from 'react'
import styled from 'styled-components'

const StyledWorkoutCard = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  height: 480px;
  position: relative;
  width: 360px;

  & .overlap-group {
    height: 480px;
    position: relative;
    background-image: url("../../../public/img/workoutcard2.svg");
  }

  & .rectangle {
    height: 135px;
    left: 31px;
    position: absolute;
    top: 295px;
    width: 73px;
  }

  & .img {
    height: 216px;
    left: 126px;
    position: absolute;
    top: 139px;
    width: 153px;
  }

  & .rectangle-2 {
    height: 263px;
    left: 143px;
    position: absolute;
    top: 213px;
    width: 179px;
  }

  & .rectangle-3 {
    height: 120px;
    left: 251px;
    position: absolute;
    top: 360px;
    width: 73px;
  }

  & .subtract {
    height: 480px;
    left: 0;
    position: absolute;
    top: 0;
    width: 360px;
  }

  & .frame {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    left: 30px;
    position: absolute;
    top: 30px;
  }

  & .text-wrapper {
    color: #000000;
    font-family: 'Abhaya Libre ExtraBold-Regular', Helvetica;
    font-size: 36px;
    font-weight: 400;
    height: 120px;
    letter-spacing: -0.5px;
    line-height: 39.6px;
    margin-top: -1px;
    position: relative;
    width: 290px;
  }

  & .union {
    height: 280px;
    left: 30px;
    mix-blend-mode: multiply;
    position: absolute;
    top: 100px;
    width: 300px;
    mix-blend-mode: m
  }

  & .div-wrapper {
    align-items: center;
    background-color: #c7e957;
    border-radius: 80px;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 30px;
    padding: 10px 20px;
    position: absolute;
    top: 410px;
  }

  & .div {
    color: #000000;
    font-family: 'StratosSkyeng-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.05px;
    line-height: 23px;
    margin-top: -0.94px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
`

export const WorkoutCard = () => {
  return (
    <StyledWorkoutCard>
      <div className="overlap-group">
        <div className="rectangle">
          <svg
            width="73"
            height="135"
            viewBox="0 0 73 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 36.5C0 16.3416 16.3416 0 36.5 0C56.6584 0 73 16.3416 73 36.5V98.5C73 118.658 56.6584 135 36.5 135C16.3416 135 0 118.658 0 98.5V36.5Z"
              fill="#AD61FF"
            />
          </svg>
        </div>
        <div className="img">
          <svg
            width="154"
            height="217"
            viewBox="0 0 154 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M84.1575 19.76C94.1495 1.77096 116.833 -4.71189 134.822 5.28011C152.811 15.2721 159.293 37.9552 149.301 55.9442L70.8164 197.244C60.8244 215.233 38.1413 221.716 20.1523 211.724C2.16325 201.732 -4.3196 179.049 5.6724 161.06L84.1575 19.76Z"
              fill="#9A48F1"
            />
          </svg>
        </div>
        <div className="rectangle-2">
          <svg
            width="179"
            height="264"
            viewBox="0 0 179 264"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M109.907 19.7463C119.759 2.00671 142.127 -4.38697 159.866 5.46556C177.606 15.3181 184 37.6859 174.147 55.4254L69.0131 244.72C59.1606 262.46 36.7928 268.853 19.0532 259.001C1.31365 249.148 -5.08004 226.78 4.77249 209.041L109.907 19.7463Z"
              fill="#AD61FF"
            />
          </svg>
        </div>
        <div className="rectangle-3">
        <svg width="73" height="120" viewBox="0 0 73 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 36.5C0 16.3416 16.3416 0 36.5 0C56.6584 0 73 16.3416 73 36.5V120H0L0 36.5Z" fill="#AD61FF"/>
</svg>

        </div>
        <div className="subtract">
          <svg
            width="360"
            height="480"
            viewBox="0 0 360 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_26_1368)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30 0C13.4315 0 0 13.4315 0 30V450C0 466.569 13.4315 480 30 480H330C346.569 480 360 466.569 360 450V30C360 13.4315 346.569 0 330 0H30ZM250 130C250 113.431 263.431 100 280 100H300C316.569 100 330 113.431 330 130V380H250H170H90H30V280C30 263.431 43.4315 250 60 250C76.5685 250 90 263.431 90 280V230C90 213.431 103.431 200 120 200H140C156.569 200 170 213.431 170 230V190C170 173.431 183.431 160 200 160H220C236.569 160 250 173.431 250 190V130Z"
                fill="#CDCDCD"
                fillOpacity="0.1"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_26_1368"
                x="-29.0373"
                y="-29.0373"
                width="418.075"
                height="538.075"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="14.5187"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_26_1368"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_26_1368"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="frame">
          <div className="text-wrapper">Йога</div>
        </div>
        <div className="union">
          <svg
            width="300"
            height="280"
            viewBox="0 0 300 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
            //   style={{mixBlendMode: multiply}}
              opacity="0.36"
              filter="url(#filter0_i_26_1377)"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M250 0C233.431 0 220 13.4315 220 30V90C220 73.4315 206.569 60 190 60H170C153.431 60 140 73.4315 140 90V130C140 113.431 126.569 100 110 100H90C73.4315 100 60 113.431 60 130V180C60 163.431 46.5685 150 30 150C13.4315 150 0 163.431 0 180V280H60H140H220H300V30C300 13.4315 286.569 0 270 0H250Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_26_1377"
                x="0"
                y="0"
                width="312"
                height="292"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="12" dy="12" />
                <feGaussianBlur stdDeviation="6.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.678431 0 0 0 0 0.380392 0 0 0 0 1 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_26_1377"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="div-wrapper">
          <div className="div">Перейти →</div>
        </div>
      </div>
    </StyledWorkoutCard>
  )
}
