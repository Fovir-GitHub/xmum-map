/**
 * @file src/components/BellMap/XmumMap.jsx
 * @description Map of xmum campus.
 * @author Fovir
 * @since 2025-09-20
 */

import utilsStyle from "../../styles/utils.module.css";

/**
 * XMUM map displayed above bell.
 *
 * @returns A SVG map image of XMUM.
 */
export default function XmumMap() {
  return <XmumSvg />;
}

/**
 * SVG converted by https://www.svgviewer.dev/svg-to-react-jsx
 */
const XmumSvg = (props) => (
  <svg
    id="_\u56FE\u5C42_1"
    data-name="\u56FE\u5C42 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1633.2 1070"
    {...props}
  >
    <defs>
      <style>
        {
          "\n      .cls-1 {\n        font-size: 2.6px;\n      }\n\n      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12 {\n        fill: #000;\n      }\n\n      .cls-1, .cls-2, .cls-13, .cls-4, .cls-14, .cls-15, .cls-5, .cls-16, .cls-17, .cls-6, .cls-18, .cls-7, .cls-19, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-20 {\n        isolation: isolate;\n      }\n\n      .cls-1, .cls-2, .cls-13, .cls-4, .cls-15, .cls-6, .cls-18, .cls-7, .cls-19, .cls-8, .cls-11, .cls-12, .cls-20 {\n        font-family: ArialMT, Arial;\n      }\n\n      .cls-21 {\n        fill: #cff;\n        stroke: #cff;\n      }\n\n      .cls-21, .cls-22, .cls-23, .cls-17, .cls-24, .cls-25, .cls-26, .cls-20, .cls-27 {\n        stroke-miterlimit: 10;\n      }\n\n      .cls-2, .cls-10 {\n        font-size: 5px;\n      }\n\n      .cls-28 {\n        clip-path: url(#clippath-20);\n      }\n\n      .cls-29 {\n        clip-path: url(#clippath-11);\n      }\n\n      .cls-30 {\n        clip-path: url(#clippath-16);\n      }\n\n      .cls-22, .cls-31, .cls-32, .cls-33, .cls-34, .cls-24, .cls-35, .cls-36, .cls-37 {\n        fill: #545454;\n      }\n\n      .cls-22, .cls-32, .cls-33, .cls-34, .cls-35, .cls-36, .cls-37 {\n        stroke: #545454;\n      }\n\n      .cls-31, .cls-3, .cls-38, .cls-39 {\n        stroke-width: 0px;\n      }\n\n      .cls-13, .cls-4 {\n        font-size: 17px;\n      }\n\n      .cls-13, .cls-15, .cls-16, .cls-18, .cls-19, .cls-27 {\n        fill: #fff;\n      }\n\n      .cls-23, .cls-17, .cls-24, .cls-40, .cls-25, .cls-26, .cls-20, .cls-27, .cls-41 {\n        stroke: #fff;\n      }\n\n      .cls-23, .cls-40, .cls-41 {\n        fill: #dc8a78;\n      }\n\n      .cls-42 {\n        stroke-dasharray: 0 0 0 0 0 0 15 15;\n      }\n\n      .cls-42, .cls-43, .cls-44, .cls-45, .cls-39, .cls-26, .cls-46 {\n        fill: none;\n      }\n\n      .cls-42, .cls-43, .cls-44, .cls-45, .cls-46 {\n        stroke: #a0a1a6;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 4px;\n      }\n\n      .cls-32 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-33 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-34 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-47 {\n        clip-path: url(#clippath-2);\n      }\n\n      .cls-43 {\n        stroke-dasharray: 0 0 0 0 0 0 14.9 14.9;\n      }\n\n      .cls-48 {\n        clip-path: url(#clippath-13);\n      }\n\n      .cls-38 {\n        fill: #a0a1a6;\n      }\n\n      .cls-15, .cls-16 {\n        font-size: 11px;\n      }\n\n      .cls-49 {\n        clip-path: url(#clippath-15);\n      }\n\n      .cls-50 {\n        clip-path: url(#clippath-6);\n      }\n\n      .cls-5, .cls-16, .cls-17, .cls-9, .cls-10 {\n        font-family: AdobeSongStd-Light-GBpc-EUC-H, 'Adobe Song Std';\n        font-weight: 300;\n      }\n\n      .cls-5, .cls-7 {\n        font-size: 29px;\n      }\n\n      .cls-45 {\n        stroke-dasharray: 0 0 0 0 0 0 15.1 15.1;\n      }\n\n      .cls-51 {\n        clip-path: url(#clippath-7);\n      }\n\n      .cls-52 {\n        clip-path: url(#clippath-21);\n      }\n\n      .cls-17, .cls-20 {\n        fill: #000200;\n        font-size: 9px;\n      }\n\n      .cls-53 {\n        clip-path: url(#clippath-1);\n      }\n\n      .cls-54 {\n        clip-path: url(#clippath-4);\n      }\n\n      .cls-40 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-35 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-55 {\n        clip-path: url(#clippath-12);\n      }\n\n      .cls-25 {\n        fill: #f60006;\n      }\n\n      .cls-25, .cls-27 {\n        stroke-width: .2px;\n      }\n\n      .cls-56 {\n        clip-path: url(#clippath-22);\n      }\n\n      .cls-6, .cls-12 {\n        font-size: 33.8px;\n      }\n\n      .cls-18 {\n        letter-spacing: 0em;\n      }\n\n      .cls-18, .cls-19 {\n        font-size: 22px;\n      }\n\n      .cls-57 {\n        clip-path: url(#clippath-9);\n      }\n\n      .cls-58 {\n        clip-path: url(#clippath);\n      }\n\n      .cls-26 {\n        stroke-width: .5px;\n      }\n\n      .cls-59 {\n        clip-path: url(#clippath-19);\n      }\n\n      .cls-8, .cls-9 {\n        font-size: 9px;\n      }\n\n      .cls-60 {\n        clip-path: url(#clippath-3);\n      }\n\n      .cls-46 {\n        stroke-dasharray: 0 0 0 0 0 0 16.5 16.5;\n      }\n\n      .cls-11 {\n        font-size: 98.6px;\n      }\n\n      .cls-61 {\n        clip-path: url(#clippath-8);\n      }\n\n      .cls-36 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-12 {\n        letter-spacing: 0em;\n      }\n\n      .cls-37 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-62 {\n        clip-path: url(#clippath-18);\n      }\n\n      .cls-63 {\n        clip-path: url(#clippath-14);\n      }\n\n      .cls-64 {\n        clip-path: url(#clippath-17);\n      }\n\n      .cls-65 {\n        clip-path: url(#clippath-5);\n      }\n\n      .cls-66 {\n        clip-path: url(#clippath-10);\n      }\n\n      .cls-67 {\n        clip-path: url(#clippath-23);\n      }\n\n      .cls-41 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n    "
        }
      </style>
      <symbol id="AED" viewBox="0 0 10.5 10.8">
        <g>
          <g>
            <path
              className="cls-25"
              d="M10.4,7.9c0-.8-.3-1.5-.8-2h0L5.3.2,1,5.9c-.5.5-.9,1.2-.9,2,0,1.5,1.3,2.8,2.8,2.8s1.8-.5,2.3-1.3c.5.8,1.4,1.3,2.3,1.3,1.5,0,2.8-1.2,2.8-2.8h0Z"
            />
            <polyline
              className="cls-26"
              points="5.3 8.9 4.4 6.2 6.6 7.3 5.4 2.1"
            />
            <polygon
              className="cls-27"
              points="5.2 1.4 5.1 2.4 6 2.2 5.2 1.4"
            />
          </g>
          <g className="cls-14">
            <text
              className="cls-1"
              transform="translate(2.6 5.7) scale(1 -1)"
            >
              <tspan x={0} y={0}>
                {"AED"}
              </tspan>
            </text>
          </g>
        </g>
      </symbol>
      <clipPath id="clippath">
        <rect
          className="cls-39"
          x={493.1}
          y={757.9}
          width={10.5}
          height={10.8}
        />
      </clipPath>
      <clipPath id="clippath-1">
        <rect
          className="cls-39"
          x={936.1}
          y={262.9}
          width={10.5}
          height={10.8}
        />
      </clipPath>
      <clipPath id="clippath-2">
        <rect
          className="cls-39"
          x={1155.1}
          y={316.9}
          width={10.5}
          height={10.8}
        />
      </clipPath>
      <clipPath id="clippath-3">
        <rect
          className="cls-39"
          x={751.1}
          y={758.9}
          width={10.5}
          height={10.8}
        />
      </clipPath>
      <clipPath id="clippath-4">
        <rect
          className="cls-39"
          x={883.1}
          y={812.9}
          width={10.5}
          height={10.8}
        />
      </clipPath>
      <clipPath id="clippath-5">
        <rect
          className="cls-39"
          x={539.1}
          y={768.9}
          width={31.1}
          height={32.2}
        />
      </clipPath>
      <clipPath id="clippath-6">
        <rect
          className="cls-39"
          x={305.1}
          y={877}
          width={15.5}
          height={16}
        />
      </clipPath>
      <clipPath id="clippath-7">
        <rect
          className="cls-39"
          x={1436.1}
          y={810}
          width={21.3}
          height={22}
        />
      </clipPath>
      <clipPath id="clippath-8">
        <rect
          className="cls-39"
          x={121.1}
          y={795.9}
          width={31.1}
          height={32.2}
        />
      </clipPath>
      <clipPath id="clippath-9">
        <rect
          className="cls-39"
          x={1062.1}
          y={540.9}
          width={31.1}
          height={32.2}
        />
      </clipPath>
      <clipPath id="clippath-10">
        <rect
          className="cls-39"
          x={1019.1}
          y={201.9}
          width={31.1}
          height={32.2}
        />
      </clipPath>
      <clipPath id="clippath-11">
        <rect
          className="cls-39"
          x={547.1}
          y={247.9}
          width={39.8}
          height={41.2}
        />
      </clipPath>
      <clipPath id="clippath-12">
        <rect
          className="cls-39"
          x={357.2}
          y={812}
          width={10}
          height={11}
        />
      </clipPath>
      <clipPath id="clippath-13">
        <rect
          className="cls-39"
          x={1349.2}
          y={243}
          width={10}
          height={11}
        />
      </clipPath>
      <clipPath id="clippath-14">
        <rect
          className="cls-39"
          x={1217.2}
          y={70}
          width={10}
          height={11}
        />
      </clipPath>
      <clipPath id="clippath-15">
        <rect
          className="cls-39"
          x={1097.2}
          y={39}
          width={11}
          height={11}
        />
      </clipPath>
      <clipPath id="clippath-16">
        <rect
          className="cls-39"
          x={814.2}
          y={241}
          width={11}
          height={10}
        />
      </clipPath>
      <clipPath id="clippath-17">
        <rect
          className="cls-39"
          x={823.2}
          y={131}
          width={10}
          height={11}
        />
      </clipPath>
      <clipPath id="clippath-18">
        <rect
          className="cls-39"
          x={712.2}
          y={133}
          width={11}
          height={10}
        />
      </clipPath>
      <clipPath id="clippath-19">
        <rect
          className="cls-39"
          x={715.2}
          y={247}
          width={11}
          height={11}
        />
      </clipPath>
      <clipPath id="clippath-20">
        <rect
          className="cls-39"
          x={446.2}
          y={250}
          width={11}
          height={11}
        />
      </clipPath>
      <clipPath id="clippath-21">
        <rect
          className="cls-39"
          x={455.2}
          y={136}
          width={10}
          height={10}
        />
      </clipPath>
      <clipPath id="clippath-22">
        <rect
          className="cls-39"
          x={341.2}
          y={130}
          width={11}
          height={11}
        />
      </clipPath>
      <clipPath id="clippath-23">
        <rect
          className="cls-39"
          x={347.2}
          y={249}
          width={10}
          height={11}
        />
      </clipPath>
    </defs>
    <g>
      <path
        className="cls-22"
        d="M634.9,932.5l-4.6,13c-.2,1.2-.3,2.3-.5,3.3,0,.2,0,.5-.2.7-.8,3.7-2,6-3.3,6s-2.5-2.3-3.3-6c0-.2,0-.5-.2-.7-.2-1.2-.5-2.5-.6-3.9l-4.4-12.4,5.2-7c.1-.6.3-1.2.5-1.8-1.6-1.8-2.6-4.8-2.6-8.2s.1-2.3.4-3.4l-2.8-6.2c2.9-1.6,6.3-2.4,9.7-2,2.2.2,4.3.9,6.2,2l-2.2,4.7c.5,1.5.8,3.2.8,5,0,4-1.4,7.4-3.4,9,.1.5.3,1.1.4,1.7v-.7l5.2,7h0Z"
      />
      <path
        className="cls-22"
        d="M629.7,948.8v33.7h-7v-33.7c0,.2,0,.5.2.7.8,3.7,2,6,3.3,6s2.5-2.3,3.3-6c0-.2.1-.5.2-.7Z"
      />
      <rect
        className="cls-22"
        x={617.7}
        y={984.5}
        width={17}
        height={4}
        rx={1.5}
        ry={1.5}
      />
      <rect
        className="cls-22"
        x={612.7}
        y={990.5}
        width={27}
        height={4}
        rx={1.5}
        ry={1.5}
      />
      <g>
        <path className="cls-31" d="M627.3,923.4c.3,1.2.6,2.5,1,3.6" />
        <path
          className="cls-31"
          d="M625.8,923.8c.3,1.2.6,2.5,1,3.6.1.4.3.7.7.9.3.2.8.3,1.2.2s.7-.3.9-.7.3-.8.2-1.2c-.4-1.2-.7-2.4-1-3.6,0-.3-.4-.7-.7-.9-.3-.2-.8-.3-1.2-.2s-.7.3-.9.7c-.2.4-.2.7-.2,1.2h0Z"
        />
      </g>
      <g>
        <path
          className="cls-31"
          d="M627.3,924.2c.2,0,.3.3.3.5.2.8.4,1.6.7,2.3"
        />
        <path
          className="cls-31"
          d="M626.9,925.6s0,0,0,0l-.4-.2s0,0,0,0l-.3-.2h0c0,0-.2-.2-.2-.2,0,0,0,0,0,.2l-.2-.4c.2.4.2.8.3,1.2.1.4.2.9.4,1.3,0,.4.4.7.7.9s.8.3,1.2.2.7-.3.9-.7.3-.8.2-1.2c-.2-.6-.3-1.2-.5-1.7,0-.3-.1-.5-.2-.8-.1-.3-.2-.6-.5-.8-.2-.2-.5-.4-.8-.5-.4,0-.8,0-1.2.2-.3.2-.6.5-.7.9,0,.4,0,.8.2,1.2s.5.6.9.7h0Z"
        />
      </g>
      <g>
        <path className="cls-31" d="M627.8,923.9c.4,1.7.7,3.4.8,5.2" />
        <path
          className="cls-31"
          d="M626.4,924.3c.3,1.1.5,2.3.7,3.5v-.4c0,.6,0,1.1.1,1.7,0,.4.1.8.4,1.1s.7.5,1.1.4c.8,0,1.6-.7,1.5-1.5-.2-1.9-.5-3.7-.9-5.6-.2-.8-1.1-1.3-1.8-1-.8.3-1.2,1-1,1.8h0Z"
        />
      </g>
    </g>
    <g>
      <rect
        className="cls-22"
        x={563.7}
        y={1025.5}
        width={7}
        height={44}
      />
      <rect
        className="cls-22"
        x={682.7}
        y={1025.5}
        width={7}
        height={44}
      />
      <rect
        className="cls-22"
        x={582.7}
        y={1039.5}
        width={88}
        height={15}
      />
    </g>
    <g>
      <rect
        className="cls-22"
        x={1588.7}
        y={342.5}
        width={44}
        height={7}
      />
      <rect
        className="cls-22"
        x={1588.7}
        y={461.5}
        width={44}
        height={7}
      />
      <rect
        className="cls-22"
        x={1603.7}
        y={361.5}
        width={15}
        height={88}
      />
    </g>
    <g>
      <rect
        className="cls-22"
        x={65.7}
        y={469.5}
        width={82}
        height={8}
      />
      <rect
        className="cls-22"
        x={58.7}
        y={473.5}
        width={96}
        height={8}
      />
      <rect
        className="cls-22"
        x={69.7}
        y={427.5}
        width={1}
        height={44}
      />
      <rect
        className="cls-22"
        x={85.7}
        y={427.5}
        width={1}
        height={44}
      />
      <rect
        className="cls-22"
        x={74.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={71.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={77.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={80.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={83.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={131.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={128.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={134.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={137.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={140.7}
        y={457.5}
        width={1.5}
        height={13}
      />
      <rect
        className="cls-22"
        x={126.7}
        y={427.5}
        width={1}
        height={44}
      />
      <rect
        className="cls-22"
        x={142.7}
        y={427.5}
        width={1}
        height={44}
      />
      <rect
        className="cls-22"
        x={69.7}
        y={418.5}
        width={74}
        height={9}
      />
      <polygon
        className="cls-22"
        points="152.7 419.5 60.7 419.5 106.7 393.5 152.7 419.5"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={401.7}
        y={109.5}
        width={80}
        height={26}
        transform="translate(27.9 319.6) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={428.7}
        y={82.5}
        width={26}
        height={80}
        transform="translate(27.9 319.6) rotate(-41)"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={291.7}
        y={106.5}
        width={80}
        height={26}
        transform="translate(2.9 246.8) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={318.7}
        y={79.5}
        width={26}
        height={80}
        transform="translate(2.9 246.8) rotate(-41)"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={394.7}
        y={224.5}
        width={80}
        height={26}
        transform="translate(-49.2 343.2) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={421.7}
        y={197.5}
        width={26}
        height={80}
        transform="translate(-49.2 343.2) rotate(-41)"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={296.7}
        y={224.5}
        width={80}
        height={26}
        transform="translate(-73.2 279) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={323.7}
        y={197.5}
        width={26}
        height={80}
        transform="translate(-73.2 279) rotate(-41)"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={770.7}
        y={104.5}
        width={80}
        height={26}
        transform="translate(121.5 560.3) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={797.7}
        y={77.5}
        width={26}
        height={80}
        transform="translate(121.5 560.3) rotate(-41)"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={661.7}
        y={109.5}
        width={80}
        height={26}
        transform="translate(91.6 490.1) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={688.7}
        y={82.5}
        width={26}
        height={80}
        transform="translate(91.6 490.1) rotate(-41)"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={940.4}
        y={91}
        width={194.3}
        height={26}
        transform="translate(186 705.8) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={1067.7}
        y={26.5}
        width={26}
        height={80}
        transform="translate(221.1 724.9) rotate(-41)"
      />
    </g>
    <g>
      <rect
        className="cls-35"
        x={991.1}
        y={161.5}
        width={26}
        height={194.3}
        transform="translate(464.5 1144.1) rotate(-73.1)"
      />
      <rect
        className="cls-35"
        x={909.4}
        y={229.1}
        width={80}
        height={26}
        transform="translate(441.6 1080) rotate(-73.1)"
      />
    </g>
    <g>
      <rect
        className="cls-36"
        x={1120.6}
        y={279.6}
        width={194.3}
        height={26}
        transform="translate(-15.1 71.9) rotate(-3.4)"
      />
      <rect
        className="cls-36"
        x={1147.7}
        y={255.9}
        width={26}
        height={80}
        transform="translate(-15.3 68.5) rotate(-3.4)"
      />
    </g>
    <g>
      <rect
        className="cls-34"
        x={1282.5}
        y={128.2}
        width={26}
        height={194.3}
        transform="translate(1042.1 1515.7) rotate(-88.8)"
      />
      <rect
        className="cls-32"
        x={1312.7}
        y={213.7}
        width={80}
        height={26}
        transform="translate(1096.8 1574.2) rotate(-88.8)"
      />
    </g>
    <g>
      <rect
        className="cls-37"
        x={1282.4}
        y={25.9}
        width={26}
        height={194.3}
        transform="translate(516.2 1165.1) rotate(-58.6)"
      />
      <rect
        className="cls-37"
        x={1206.5}
        y={80.2}
        width={80}
        height={26}
        transform="translate(518.2 1109.2) rotate(-58.6)"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={763.7}
        y={219.5}
        width={80}
        height={26}
        transform="translate(44.4 583.9) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={790.7}
        y={192.5}
        width={26}
        height={80}
        transform="translate(44.4 583.9) rotate(-41)"
      />
    </g>
    <g>
      <rect
        className="cls-33"
        x={665.7}
        y={219.5}
        width={80}
        height={26}
        transform="translate(20.4 519.7) rotate(-41)"
      />
      <rect
        className="cls-33"
        x={692.7}
        y={192.5}
        width={26}
        height={80}
        transform="translate(20.4 519.7) rotate(-41)"
      />
    </g>
    <path
      className="cls-21"
      d="M730.6,626.3c7.6-1.8-17.5-20.5-8.8-33.7,10.9-16.5,67.6-13.2,110.2-5.1,8.5,1.6,44.9,9.1,67.3,26.8,32.1,25.3,9.9,51.2,17.9,53.8,14.7,4.9,145.1-65.1,66.1-142.3-42.9-41.9-150.7-36-195-77-41.8-38.7,50.6-69.4,17.8-94.8-31.7-24.5-140.4-18.7-198.1-9.1-39.7,6.6-111.2,18.5-116.4,54.4-3.6,25,27,45.6,9.5,55.7-20.5,11.8-70.1-12.1-100.4-2.1-35.1,11.6-26.3,62.7,24,91.7,29.2,16.8,65.5,22.2,88.2,25.6,60.3,9,69.2-4.9,110.8,4.7,59,13.6,96.2,54,106.9,51.4h0Z"
    />
    <g className="cls-14">
      <text className="cls-15" transform="translate(581.7 1022.7)">
        <tspan x={0} y={0}>
          {"Southern Entrance"}
        </tspan>
      </text>
      <text className="cls-16" transform="translate(616.6 1035.9)">
        <tspan x={0} y={0}>
          {"\u5357\u95E8"}
        </tspan>
      </text>
    </g>
    <g className="cls-14">
      <text
        className="cls-20"
        transform="translate(1524.1 403.9) scale(1.2 1)"
      >
        <tspan x={0} y={0}>
          {"Main Entrance"}
        </tspan>
      </text>
      <text
        className="cls-17"
        transform="translate(1548.6 414.7) scale(1.2 1)"
      >
        <tspan x={0} y={0}>
          {"\u4E3B\u95E8"}
        </tspan>
      </text>
    </g>
    <g id="_\u56FE\u5C42_4" data-name=" \u56FE\u5C42 4">
      <g>
        <line
          className="cls-44"
          x1={571.2}
          y1={992}
          x2={563.7}
          y2={992}
        />
        <path
          className="cls-45"
          d="M548.6,992H246.8c-5.9-.1-10.6-4.9-10.6-10.7v-155.9c0-5.7-4.6-10.3-10.3-10.3h-46"
        />
        <line
          className="cls-44"
          x1={172.3}
          y1={815}
          x2={164.8}
          y2={815}
        />
      </g>
      <g>
        <line
          className="cls-44"
          x1={236.2}
          y1={791}
          x2={236.2}
          y2={783.5}
        />
        <path
          className="cls-43"
          d="M236.2,768.6v-60.5c0-5.6,4.5-10.1,10.1-10.1h770.1c10.4,0,18.8,8.4,18.8,18.8l-.4,262.8c0,6-4.9,10.9-10.9,11l-326.2,1.3"
        />
        <line
          className="cls-44"
          x1={690.2}
          y1={991.8}
          x2={682.7}
          y2={991.9}
        />
        <path
          className="cls-38"
          d="M241.5,791c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.4-5.3-5.3,2.4-5.3,5.3-5.3,5.3,2.4,5.3,5.3Z"
        />
      </g>
      <g>
        <path
          className="cls-42"
          d="M1062.4,991h474.4c6.8-3.1,11.4-7.8,11.4-13.6v-501.1"
        />
        <path
          className="cls-38"
          d="M1062.4,996.3c-2.9,0-5.3-2.4-5.3-5.3s2.4-5.3,5.3-5.3,5.3,2.4,5.3,5.3-2.4,5.3-5.3,5.3Z"
        />
      </g>
      <g>
        <path
          className="cls-42"
          d="M1035.2,668.2l2.3-340.4c0-5.7-4.6-10.4-10.3-10.4H246.5c-5.7,0-10.3-4.6-10.3-10.3V12.6c0-5.7,4.6-10.3,10.3-10.3l962.7-.4h328.7c5.7,0,10.3,4.6,10.3,10.3v348.3c0,5.7-4.6,10.3-10.2,10.3l-466.8,1.2"
        />
        <path
          className="cls-38"
          d="M1040.4,668.3c0,2.9-2.4,5.2-5.3,5.2s-5.2-2.4-5.2-5.3,2.4-5.2,5.3-5.2,5.2,2.4,5.2,5.3Z"
        />
        <path
          className="cls-38"
          d="M1071.2,366.7c-2.9,0-5.3,2.4-5.2,5.3,0,2.9,2.4,5.3,5.3,5.2,2.9,0,5.3-2.4,5.2-5.3,0-2.9-2.4-5.3-5.3-5.2Z"
        />
      </g>
      <g>
        <line
          className="cls-42"
          x1={236.2}
          y1={335.1}
          x2={236.2}
          y2={683.3}
        />
        <path
          className="cls-38"
          d="M230.9,335.1c0-2.9,2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3-2.4,5.3-5.3,5.3-5.3-2.4-5.3-5.3Z"
        />
        <path
          className="cls-38"
          d="M230.9,683.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3-2.4-5.3-5.3-5.3-5.3,2.4-5.3,5.3Z"
        />
      </g>
      <g>
        <path
          className="cls-42"
          d="M437.7,335.1s-230.5,146.9-9.5,265.9"
        />
        <path
          className="cls-38"
          d="M434.9,330.7c2.5-1.6,5.7-.8,7.3,1.6,1.6,2.5.8,5.7-1.6,7.3-2.5,1.6-5.7.8-7.3-1.6-1.6-2.5-.8-5.7,1.6-7.3Z"
        />
        <path
          className="cls-38"
          d="M425.7,605.6c2.6,1.4,5.8.4,7.1-2.1s.4-5.8-2.1-7.1c-2.6-1.4-5.8-.4-7.1,2.1s-.4,5.8,2.1,7.1Z"
        />
      </g>
      <g>
        <line
          className="cls-42"
          x1={593.6}
          y1={624.3}
          x2={849.7}
          y2={338.9}
        />
        <path
          className="cls-38"
          d="M597.7,627.6c-1.9,2.2-5.3,2.3-7.4.4s-2.3-5.3-.4-7.4,5.3-2.3,7.4-.4,2.3,5.3.4,7.4Z"
        />
        <circle className="cls-38" cx={849.5} cy={339} r={5.3} />
      </g>
      <g>
        <path
          className="cls-42"
          d="M217.2,557.2c-21.6.6-105.7-1.2-103.5-68.7"
        />
        <path
          className="cls-38"
          d="M216.7,552c2.9-.1,5.4,2.1,5.5,5s-2.1,5.4-5,5.5c-2.9.1-5.4-2.1-5.5-5s2.1-5.4,5-5.5Z"
        />
      </g>
      <g>
        <path
          className="cls-42"
          d="M446.5,612.8l122,20.5c5,.8,8.7,5.2,8.7,10.3v44.4"
        />
        <path
          className="cls-38"
          d="M572,687.7c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3-2.4-5.3-5.3-5.3-5.3,2.4-5.3,5.3Z"
        />
      </g>
      <g>
        <line
          className="cls-44"
          x1={259}
          y1={673.5}
          x2={266}
          y2={670.7}
        />
        <line
          className="cls-46"
          x1={281.3}
          y1={664.6}
          x2={396.1}
          y2={618.7}
        />
        <line
          className="cls-44"
          x1={403.7}
          y1={615.6}
          x2={410.7}
          y2={612.8}
        />
      </g>
    </g>
    <g id="_\u56FE\u5C42_1-2" data-name=" \u56FE\u5C42 1">
      <path
        className="cls-23"
        d="M694.2,747.7l-31.3,60.1c-8.5-4.3-17.9-7.2-28-8.2-15.7-1.7-30.9,1.4-44,7.9l-31.2-60.4c24.5-12.2,52.8-17.8,82.2-14.8,18.8,2,36.4,7.3,52.2,15.3h0Z"
      />
      <path
        className="cls-23"
        d="M185.8,653.1l9.6,108.5c-15.2,1.5-30.4,5.7-44.9,13-22.7,11.3-40.6,28.5-52.6,48.7L3.5,768.2c22.6-37.7,55.9-69.7,98.3-90.9,27.1-13.5,55.5-21.5,83.9-24.3h0Z"
      />
      <path
        className="cls-24"
        d="M831.7,774.7l-28.3,36c-5-3.9-10.8-7-17.2-9-10.1-3.1-20.4-3-29.8-.2l-12.6-44c17.6-5,36.9-5.2,55.7.5,12,3.7,22.9,9.4,32.2,16.7h0Z"
      />
      <path
        className="cls-24"
        d="M962.1,839.1l-33.4,31.4c-4.4-4.6-9.6-8.5-15.7-11.4-9.5-4.5-19.7-6-29.5-4.7l-5.9-45.4c18.2-2.3,37.2.3,55,8.8,11.4,5.4,21.2,12.7,29.4,21.4h0Z"
      />
      <path
        className="cls-24"
        d="M420.1,773.7l28.3,36c5-3.9,10.8-7,17.2-9,10.1-3.1,20.4-3,29.8-.2l12.6-44c-17.6-5-36.9-5.2-55.7.5-12,3.7-22.9,9.4-32.2,16.7h0Z"
      />
      <path
        className="cls-24"
        d="M289.7,838.1l33.4,31.4c4.4-4.6,9.6-8.5,15.7-11.4,9.5-4.5,19.7-6,29.5-4.7l5.9-45.4c-18.2-2.3-37.2.3-55,8.8-11.4,5.4-21.2,12.7-29.4,21.4h0Z"
      />
      <rect
        className="cls-41"
        x={270.7}
        y={852.5}
        width={38}
        height={34}
        transform="translate(-546.3 493.9) rotate(-47.4)"
      />
      <rect
        className="cls-23"
        x={1100.7}
        y={722.5}
        width={305}
        height={234}
      />
      <a href="/ly3" className={utilsStyle.highlightOnHover}>
        <rect
          className="cls-23"
          x={493.7}
          y={126.5}
          width={148}
          height={111}
        />
      </a>
      <a href="/b1" className={utilsStyle.highlightOnHover}>
        <rect
          className="cls-23"
          x={1099.7}
          y={438.5}
          width={402}
          height={234}
        />
      </a>
      <rect
        className="cls-23"
        x={1420.7}
        y={838.5}
        width={47}
        height={113}
      />
      <circle className="cls-23" cx={434.7} cy={488.5} r={27} />
      <ellipse
        className="cls-40"
        cx={1132.2}
        cy={173.5}
        rx={91}
        ry={64.5}
        transform="translate(208.9 851.4) rotate(-45)"
      />
    </g>
    <g id="_\u56FE\u5C42_5" data-name=" \u56FE\u5C42 5">
      <g>
        <path className="cls-3" d="M36.7,744.4v-5h.7v5h-.7Z" />
        <path
          className="cls-3"
          d="M38.4,744.4v-3.6h.5v.5c.3-.4.7-.6,1.2-.6s.4,0,.6.1.3.2.4.3.2.3.2.5c0,.1,0,.3,0,.6v2.2h-.6v-2.2c0-.2,0-.4,0-.6s-.1-.2-.2-.3c-.1,0-.3-.1-.4-.1-.3,0-.5,0-.7.2s-.3.5-.3,1v2h-.6,0Z"
        />
        <path
          className="cls-3"
          d="M43.6,743.9v.5c0,0-.2,0-.4,0-.2,0-.4,0-.5-.1s-.2-.2-.3-.3,0-.4,0-.7v-2.1h-.5v-.5h.5v-.9l.6-.4v1.3h.6v.5h-.6v2.1c0,.2,0,.3,0,.3,0,0,0,0,.1.1,0,0,.1,0,.2,0s.2,0,.3,0h0Z"
        />
        <path
          className="cls-3"
          d="M46.7,743.3h.6c0,.5-.3.7-.6.9s-.6.3-1,.3-1-.2-1.3-.5c-.3-.3-.5-.8-.5-1.4s.2-1.1.5-1.4.7-.5,1.2-.5.9.2,1.2.5c.3.3.5.8.5,1.4v.2h-2.7c0,.4.1.7.3.9.2.2.5.3.8.3s.4,0,.6-.2.3-.3.4-.6h0ZM44.7,742.3h2c0-.3,0-.5-.2-.7-.2-.2-.5-.4-.8-.4s-.5,0-.7.3-.3.4-.3.8h0Z"
        />
        <path
          className="cls-3"
          d="M48.1,744.4v-3.6h.5v.5c.1-.3.3-.4.4-.5s.2-.1.4-.1.4,0,.6.2l-.2.6c-.2,0-.3-.1-.5-.1s-.3,0-.4.1-.2.2-.2.3c0,.2,0,.5,0,.7v1.9h-.6Z"
        />
        <path
          className="cls-3"
          d="M50.5,744.4v-3.6h.5v.5c.3-.4.7-.6,1.2-.6s.4,0,.6.1.3.2.4.3.2.3.2.5c0,.1,0,.3,0,.6v2.2h-.6v-2.2c0-.2,0-.4,0-.6s-.1-.2-.2-.3c-.1,0-.3-.1-.4-.1-.3,0-.5,0-.7.2s-.3.5-.3,1v2h-.6,0Z"
        />
        <path
          className="cls-3"
          d="M56.7,744c-.2.2-.5.3-.7.4-.2,0-.4.1-.7.1-.4,0-.7,0-.9-.3-.2-.2-.3-.4-.3-.8s0-.3.1-.5c0-.2.2-.3.3-.3.1,0,.3-.2.4-.2.1,0,.3,0,.5,0,.5,0,.9-.1,1.1-.2v-.2c0-.2,0-.4-.2-.5-.2-.1-.4-.2-.7-.2s-.5,0-.6.2c-.1,0-.2.3-.3.5h-.6c0-.3.1-.5.3-.7s.3-.3.5-.4c.2,0,.5-.1.8-.1s.6,0,.8.1.3.2.4.3.2.2.2.4c0,0,0,.3,0,.6v.8c0,.6,0,.9,0,1.1,0,.2,0,.3.2.4h-.6c0-.1,0-.3-.1-.5h0ZM56.7,742.6c-.2,0-.6.2-1,.2-.2,0-.4,0-.5.1,0,0-.2.1-.2.2s0,.2,0,.3c0,.2,0,.3.2.4.1.1.3.2.5.2s.5,0,.6-.2.3-.2.4-.4c0-.1,0-.3,0-.6v-.2h0Z"
        />
        <path
          className="cls-3"
          d="M59.6,743.9v.5c0,0-.2,0-.4,0-.2,0-.4,0-.5-.1s-.2-.2-.3-.3,0-.4,0-.7v-2.1h-.5v-.5h.5v-.9l.6-.4v1.3h.6v.5h-.6v2.1c0,.2,0,.3,0,.3,0,0,0,0,.1.1,0,0,.1,0,.2,0s.2,0,.3,0h0Z"
        />
        <path
          className="cls-3"
          d="M60.2,740.1v-.7h.6v.7h-.6ZM60.2,744.4v-3.6h.6v3.6h-.6Z"
        />
        <path
          className="cls-3"
          d="M61.5,742.6c0-.7.2-1.2.6-1.5.3-.3.7-.4,1.1-.4s.9.2,1.2.5.5.8.5,1.4,0,.8-.2,1.1c-.1.3-.3.5-.6.6-.3.2-.6.2-.9.2-.5,0-.9-.2-1.2-.5s-.5-.8-.5-1.4h0ZM62.2,742.6c0,.5,0,.8.3,1s.5.3.8.3.6-.1.8-.3.3-.6.3-1.1,0-.8-.3-1c-.2-.2-.5-.3-.8-.3s-.6.1-.8.3-.3.6-.3,1h0Z"
        />
        <path
          className="cls-3"
          d="M65.7,744.4v-3.6h.6v.5c.3-.4.7-.6,1.2-.6s.4,0,.6.1.3.2.4.3c0,.1.2.3.2.5,0,.1,0,.3,0,.6v2.2h-.6v-2.2c0-.2,0-.4,0-.6s-.1-.2-.2-.3c-.1,0-.3-.1-.4-.1-.3,0-.5,0-.7.2s-.3.5-.3,1v2h-.6,0Z"
        />
        <path
          className="cls-3"
          d="M71.9,744c-.2.2-.4.3-.7.4-.2,0-.4.1-.7.1-.4,0-.7,0-.9-.3-.2-.2-.3-.4-.3-.8s0-.3.1-.5c0-.2.2-.3.3-.3.1,0,.3-.2.4-.2s.3,0,.6,0c.5,0,.9-.1,1.1-.2v-.2c0-.2,0-.4-.2-.5-.2-.1-.4-.2-.7-.2s-.5,0-.6.2c-.1,0-.2.3-.3.5h-.6c0-.3.1-.5.3-.7s.3-.3.5-.4c.2,0,.5-.1.8-.1s.6,0,.8.1.3.2.4.3.2.2.2.4c0,0,0,.3,0,.6v.8c0,.6,0,.9,0,1.1,0,.2,0,.3.2.4h-.6c0-.1,0-.3-.1-.5h0ZM71.9,742.6c-.2,0-.6.2-1,.2-.2,0-.4,0-.5.1,0,0-.2.1-.2.2s0,.2,0,.3c0,.2,0,.3.2.4.1.1.3.2.5.2s.4,0,.6-.2.3-.2.4-.4c0-.1,0-.3,0-.6v-.2h0Z"
        />
        <path className="cls-3" d="M73.4,744.4v-5h.6v5h-.6Z" />
        <path
          className="cls-3"
          d="M76.1,744.4l1.9-5h.7l2.1,5h-.8l-.6-1.5h-2.1l-.6,1.5h-.7,0ZM77.5,742.4h1.7l-.5-1.4c-.2-.4-.3-.8-.4-1,0,.3-.2.6-.3,1l-.6,1.5Z"
        />
        <path
          className="cls-3"
          d="M83.6,743.1h.6c0,.5-.2.8-.5,1.1-.3.2-.6.3-1,.3s-.9-.2-1.2-.5c-.3-.3-.4-.8-.4-1.4s0-.7.2-1,.3-.5.6-.7c.3-.2.6-.2.9-.2s.7,0,1,.3.4.5.5.8h-.6c0-.1-.2-.3-.3-.5-.2-.1-.3-.2-.5-.2-.3,0-.6.1-.8.3-.2.2-.3.6-.3,1s0,.8.3,1.1.4.3.7.3.4,0,.6-.2c.2-.2.3-.4.3-.7h0Z"
        />
        <path
          className="cls-3"
          d="M87.1,744c-.2.2-.4.3-.7.4-.2,0-.4.1-.7.1-.4,0-.7,0-.9-.3-.2-.2-.3-.4-.3-.8s0-.3.1-.5c0-.2.2-.3.3-.3.1,0,.3-.2.4-.2s.3,0,.6,0c.5,0,.9-.1,1.1-.2v-.2c0-.2,0-.4-.2-.5-.2-.1-.4-.2-.7-.2s-.5,0-.6.2c-.1,0-.2.3-.3.5h-.6c0-.3.1-.5.3-.7s.3-.3.5-.4c.2,0,.5-.1.8-.1s.6,0,.8.1.3.2.4.3.2.2.2.4c0,0,0,.3,0,.6v.8c0,.6,0,.9,0,1.1,0,.2,0,.3.2.4h-.6c0-.1,0-.3-.1-.5h0ZM87,742.6c-.2,0-.6.2-1,.2-.2,0-.4,0-.5.1,0,0-.2.1-.2.2s0,.2,0,.3c0,.2,0,.3.2.4.1.1.3.2.5.2s.4,0,.6-.2.3-.2.4-.4c0-.1,0-.3,0-.6v-.2h0Z"
        />
        <path
          className="cls-3"
          d="M91,744.4v-.5c-.2.4-.6.5-1,.5s-.6,0-.8-.2c-.2-.2-.4-.4-.6-.7s-.2-.6-.2-1,0-.7.2-1,.3-.5.5-.7.5-.2.8-.2.4,0,.6.1.3.2.4.4v-1.8h.6v5h-.6,0ZM89,742.6c0,.5,0,.8.3,1,.2.2.4.3.7.3s.5-.1.7-.3c.2-.2.3-.5.3-1s0-.9-.3-1.1-.4-.3-.7-.3-.5.1-.7.3c-.2.2-.3.6-.3,1.1h0Z"
        />
        <path
          className="cls-3"
          d="M95,743.3h.6c0,.5-.3.7-.6.9s-.6.3-1,.3-.9-.2-1.3-.5c-.3-.3-.5-.8-.5-1.4s.2-1.1.5-1.4.7-.5,1.2-.5.9.2,1.2.5c.3.3.5.8.5,1.4v.2h-2.7c0,.4.1.7.3.9.2.2.5.3.8.3s.4,0,.6-.2.3-.3.4-.6h0ZM93,742.3h2c0-.3,0-.5-.2-.7-.2-.2-.4-.4-.8-.4s-.5,0-.7.3-.3.4-.3.8h0Z"
        />
        <path
          className="cls-3"
          d="M96.4,744.4v-3.6h.6v.5c.1-.2.3-.3.4-.4s.4-.2.7-.2.5,0,.7.2c.2.1.3.3.4.5.3-.4.7-.6,1.1-.6s.6,0,.8.3.3.5.3.9v2.5h-.6v-2.3c0-.2,0-.4,0-.5,0-.1-.1-.2-.2-.3,0,0-.2,0-.4,0-.3,0-.5,0-.6.2s-.2.4-.2.8v2.1h-.6v-2.4c0-.3,0-.5-.2-.6s-.3-.2-.5-.2-.3,0-.5.1-.2.2-.3.4c0,.2,0,.4,0,.8v1.9h-.6,0Z"
        />
        <path
          className="cls-3"
          d="M102.2,740.1v-.7h.6v.7h-.6ZM102.2,744.4v-3.6h.6v3.6h-.6Z"
        />
        <path
          className="cls-3"
          d="M106.2,743.1h.6c0,.5-.2.8-.5,1.1-.3.2-.6.3-1,.3s-.9-.2-1.2-.5c-.3-.3-.4-.8-.4-1.4s0-.7.2-1,.3-.5.6-.7c.3-.2.6-.2.9-.2s.7,0,1,.3.4.5.5.8h-.6c0-.1-.2-.3-.3-.5-.2-.1-.3-.2-.5-.2-.3,0-.6.1-.8.3-.2.2-.3.6-.3,1s0,.8.3,1.1.4.3.7.3.4,0,.6-.2c.2-.2.3-.4.3-.7h0Z"
        />
        <path
          className="cls-3"
          d="M109.3,744.4v-5h3.6v.6h-3v1.5h2.8v.6h-2.8v1.7h3.1v.6h-3.7Z"
        />
        <path
          className="cls-3"
          d="M113.5,744.4l1.3-1.9-1.2-1.7h.8l.6.8c0,.2.2.3.2.4,0-.2.2-.3.3-.4l.6-.9h.7l-1.2,1.7,1.3,1.9h-.8l-.8-1.1-.2-.3-.9,1.4h-.8,0Z"
        />
        <path
          className="cls-3"
          d="M119.8,743.1h.6c0,.5-.2.8-.5,1.1-.3.2-.6.3-1,.3s-.9-.2-1.2-.5c-.3-.3-.4-.8-.4-1.4s0-.7.2-1,.3-.5.6-.7c.3-.2.6-.2.9-.2s.7,0,1,.3.4.5.5.8h-.6c0-.1-.2-.3-.3-.5-.2-.1-.3-.2-.5-.2-.3,0-.6.1-.8.3-.2.2-.3.6-.3,1s0,.8.3,1.1.4.3.7.3.4,0,.6-.2c.2-.2.3-.4.3-.7h0Z"
        />
        <path
          className="cls-3"
          d="M120.9,744.4v-5h.6v1.8c.3-.3.7-.5,1.1-.5s.5,0,.7.2.3.2.4.4c0,.2.1.5.1.8v2.3h-.6v-2.3c0-.3,0-.5-.2-.7-.1-.1-.3-.2-.6-.2s-.3,0-.5.1-.3.2-.3.4c0,.2,0,.4,0,.7v2h-.6Z"
        />
        <path
          className="cls-3"
          d="M127.2,744c-.2.2-.4.3-.7.4-.2,0-.4.1-.7.1-.4,0-.7,0-.9-.3-.2-.2-.3-.4-.3-.8s0-.3.1-.5c0-.2.2-.3.3-.3.1,0,.3-.2.4-.2s.3,0,.6,0c.5,0,.9-.1,1.1-.2v-.2c0-.2,0-.4-.2-.5-.2-.1-.4-.2-.7-.2s-.5,0-.6.2c-.1,0-.2.3-.3.5h-.6c0-.3.1-.5.3-.7s.3-.3.5-.4c.2,0,.5-.1.8-.1s.6,0,.8.1.3.2.4.3.2.2.2.4c0,0,0,.3,0,.6v.8c0,.6,0,.9,0,1.1,0,.2,0,.3.2.4h-.6c0-.1,0-.3-.1-.5h0ZM127.1,742.6c-.2,0-.6.2-1,.2-.2,0-.4,0-.5.1,0,0-.2.1-.2.2s0,.2,0,.3c0,.2,0,.3.2.4.1.1.3.2.5.2s.4,0,.6-.2.3-.2.4-.4c0-.1,0-.3,0-.6v-.2h0Z"
        />
        <path
          className="cls-3"
          d="M128.7,744.4v-3.6h.6v.5c.3-.4.6-.6,1.2-.6s.4,0,.6.1c.2,0,.3.2.4.3s.1.3.2.5c0,.1,0,.3,0,.6v2.2h-.6v-2.2c0-.2,0-.4,0-.6s-.1-.2-.2-.3c-.1,0-.3-.1-.4-.1-.3,0-.5,0-.7.2-.2.2-.3.5-.3,1v2h-.6,0Z"
        />
        <path
          className="cls-3"
          d="M132.5,744.7h.6c0,.3,0,.4.2.5.1.1.4.2.6.2s.5,0,.7-.2.3-.3.3-.5c0-.1,0-.4,0-.8-.3.3-.6.5-1,.5s-.9-.2-1.2-.5-.4-.8-.4-1.3,0-.7.2-1,.3-.5.6-.7.5-.2.8-.2.8.2,1.1.5v-.4h.6v3.1c0,.6,0,1-.2,1.2-.1.2-.3.4-.6.6s-.6.2-.9.2-.8,0-1.1-.3-.4-.5-.4-.9h0ZM133,742.5c0,.5,0,.8.3,1s.4.3.7.3.5-.1.7-.3.3-.6.3-1-.1-.8-.3-1c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3c-.2.2-.3.5-.3,1h0Z"
        />
        <path
          className="cls-3"
          d="M138.9,743.3h.6c-.1.5-.3.7-.6.9s-.6.3-1,.3-.9-.2-1.3-.5-.5-.8-.5-1.4.2-1.1.5-1.4.7-.5,1.2-.5.9.2,1.2.5.5.8.5,1.4v.2h-2.7c0,.4.1.7.3.9.2.2.5.3.8.3s.4,0,.6-.2.3-.3.4-.6h0ZM136.9,742.3h2c0-.3-.1-.5-.2-.7-.2-.2-.4-.4-.8-.4s-.5,0-.7.3-.3.4-.3.8h0Z"
        />
        <path
          className="cls-3"
          d="M146,742.7l.7.2c-.1.5-.4,1-.8,1.2s-.8.4-1.3.4-1-.1-1.3-.3c-.3-.2-.6-.5-.8-1-.2-.4-.3-.9-.3-1.3s.1-1,.3-1.4.5-.7.9-.9c.4-.2.8-.3,1.2-.3s.9.1,1.3.4.6.6.7,1.1l-.6.2c-.1-.4-.3-.6-.5-.8s-.5-.2-.8-.2-.7,0-1,.3c-.3.2-.4.4-.5.7-.1.3-.2.6-.2,1s0,.8.2,1.1c.1.3.3.6.6.7s.6.2.9.2.7-.1.9-.3c.3-.2.4-.5.5-1h0Z"
        />
        <path
          className="cls-3"
          d="M149.9,743.3h.6c-.1.5-.3.7-.6.9s-.6.3-1,.3-.9-.2-1.3-.5-.5-.8-.5-1.4.2-1.1.5-1.4.7-.5,1.2-.5.9.2,1.2.5.5.8.5,1.4v.2h-2.7c0,.4.1.7.3.9.2.2.5.3.8.3s.4,0,.6-.2.3-.3.4-.6h0ZM147.8,742.3h2c0-.3-.1-.5-.2-.7-.2-.2-.4-.4-.8-.4s-.5,0-.7.3-.3.4-.3.8h0Z"
        />
        <path
          className="cls-3"
          d="M151.2,744.4v-3.6h.6v.5c.3-.4.6-.6,1.2-.6s.4,0,.6.1c.2,0,.3.2.4.3s.1.3.2.5c0,.1,0,.3,0,.6v2.2h-.6v-2.2c0-.2,0-.4,0-.6s-.1-.2-.2-.3c-.1,0-.3-.1-.4-.1-.3,0-.5,0-.7.2-.2.2-.3.5-.3,1v2h-.6,0Z"
        />
        <path
          className="cls-3"
          d="M156.5,743.9v.5c0,0-.2,0-.4,0-.2,0-.4,0-.5-.1-.1,0-.2-.2-.3-.3s0-.4,0-.7v-2.1h-.4v-.5h.4v-.9l.6-.4v1.3h.6v.5h-.6v2.1c0,.2,0,.3,0,.3,0,0,0,0,.1.1,0,0,.1,0,.2,0s.2,0,.3,0h0Z"
        />
        <path
          className="cls-3"
          d="M157.1,744.4v-3.6h.6v.5c.1-.3.3-.4.4-.5s.2-.1.4-.1.4,0,.6.2l-.2.6c-.1,0-.3-.1-.4-.1s-.3,0-.4.1-.2.2-.2.3c0,.2-.1.5-.1.7v1.9h-.6Z"
        />
        <path
          className="cls-3"
          d="M161.9,743.3h.6c-.1.5-.3.7-.6.9s-.6.3-1,.3-.9-.2-1.3-.5-.5-.8-.5-1.4.2-1.1.5-1.4.7-.5,1.2-.5.9.2,1.2.5.5.8.5,1.4v.2h-2.7c0,.4.1.7.3.9.2.2.5.3.8.3s.4,0,.6-.2.3-.3.4-.6h0ZM159.9,742.3h2c0-.3-.1-.5-.2-.7-.2-.2-.4-.4-.8-.4s-.5,0-.7.3-.3.4-.3.8h0Z"
        />
        <path
          className="cls-3"
          d="M166.4,745.9c-.3-.4-.6-.9-.9-1.5s-.4-1.2-.4-1.8,0-1.1.3-1.6c.2-.6.5-1.2.9-1.7h.4c-.3.5-.5.8-.6,1-.1.3-.2.6-.3,1-.1.4-.1.8-.1,1.3,0,1.1.3,2.2,1,3.3h-.4,0Z"
        />
        <path className="cls-3" d="M167.8,744.4v-5h.7v5h-.7Z" />
        <path
          className="cls-3"
          d="M169.1,744.4l1.9-5h.7l2.1,5h-.8l-.6-1.5h-2.1l-.6,1.5h-.7,0ZM170.5,742.4h1.7l-.5-1.4c-.2-.4-.3-.8-.4-1,0,.3-.1.6-.3,1l-.6,1.5h0Z"
        />
        <path
          className="cls-3"
          d="M174.3,744.4v-5h3.6v.6h-3v1.5h2.8v.6h-2.8v1.7h3.1v.6h-3.7,0Z"
        />
        <path
          className="cls-3"
          d="M182.5,742.7l.7.2c-.1.5-.4,1-.8,1.2s-.8.4-1.3.4-1-.1-1.3-.3c-.3-.2-.6-.5-.8-1-.2-.4-.3-.9-.3-1.3s.1-1,.3-1.4.5-.7.9-.9c.4-.2.8-.3,1.2-.3s.9.1,1.3.4.6.6.7,1.1l-.6.2c-.1-.4-.3-.6-.5-.8s-.5-.2-.8-.2-.7,0-1,.3c-.3.2-.4.4-.5.7-.1.3-.2.6-.2,1s0,.8.2,1.1c.1.3.3.6.6.7s.6.2.9.2.7-.1.9-.3c.3-.2.4-.5.5-1h0Z"
        />
        <path
          className="cls-3"
          d="M184.3,745.9h-.4c.7-1.1,1-2.2,1-3.3s0-.8-.1-1.3c0-.3-.2-.7-.3-1,0-.2-.3-.5-.6-1h.4c.4.6.8,1.2.9,1.7.2.5.3,1,.3,1.6s-.1,1.2-.4,1.8c-.2.6-.5,1.1-.9,1.5h0Z"
        />
        <path
          className="cls-3"
          d="M71.2,747.4s0,0,0,0,0,0,0,0l-.2.2v4.1c0,.5,0,1,0,1.3h0c0,.1,0,.2-.2.3,0,0,0,0-.1,0s0,0,0-.1v-.5h-4.5v.3c0,.1-.2.2-.3.2s0,0,0-.1h0c0-.5,0-.9,0-1.4v-3.8c0-.4,0-.9,0-1.1l.5.5h4.2l.2-.3.4.4h0ZM70.6,752.6v-5h-4.5v5h4.5ZM70.4,751.5s0,0,0,.1,0,0,0,0h-3.4c-.2,0-.3,0-.5,0l-.2-.3c.2,0,.3,0,.5,0h1.4v-1.6h-.8c-.1,0-.3,0-.4,0l-.2-.2c.2,0,.3,0,.5,0h.9v-1.2h-1.1c-.2,0-.3,0-.5,0l-.2-.3c.2,0,.3,0,.5,0h2.6l.2-.4.4.4s0,0,0,0c0,0,0,0,0,0h-1.7v1.2h.9l.2-.3.4.3s0,0,0,0,0,0,0,0h-1.5v1.6h1.2l.3-.3.3.3h0ZM69.1,750.2c.5.2.7.4.7.5,0,0,0,0,0,0,0,.1,0,.3-.2.3s-.1,0-.2-.2c0-.2-.2-.4-.4-.7h0c0,0,0,0,0,0Z"
        />
        <path
          className="cls-3"
          d="M74.7,747.5s0,0,0,0,0,0,0,0c-.2,0-.4.2-.5.5l-.5,1.1c.7.7.9,1.2.9,1.6,0,.6-.8,1-.8,1,0,0,0,0,0,0,0-.2-.2-.3-.6-.4h0c.2,0,.4,0,.6,0,.4,0,.5-.2.5-.5,0-.5-.4-1.1-.7-1.5l.6-1.7h-1.1v4.5c0,.3,0,.7,0,1h0c0,.2,0,.2-.2.2,0,0-.1,0-.2,0s0,0,0-.1h0c0-.5,0-.8,0-1.2v-3.9c0-.6,0-.8,0-1.1l.4.3h.9l.2-.3.4.4h0ZM75.7,750.3c0,0,0,0,0,0s0,0,0,0c0,0-.2.1-.2.2-.5.8-1,1.6-1.5,2.2h0c.6-.9,1.2-1.8,1.4-2.8l.4.3h0ZM78.5,749.3s0,0,0,0,0,0-.1,0h-1.9v3.1c0,.5,0,.6-.4.8,0,0,0,0-.1,0s0,0,0-.1c0-.2-.2-.4-.8-.6h0c.4,0,.7,0,.9,0,.2,0,.2-.1.2-.3v-3h-1.4c-.2,0-.3,0-.5,0l-.2-.2c.2,0,.4,0,.5,0h3.1l.3-.4.4.5h0ZM78.2,747.6s0,0,0,0c0,0,0,0,0,0h-2.6c-.2,0-.3,0-.4,0l-.3-.2c.2,0,.4,0,.5,0h2l.2-.4.5.5h0ZM77.1,750.2c.7.7,1.2,1.4,1.2,1.8s-.2.5-.3.5,0,0-.2-.4c0-.5-.3-1.2-.8-1.8h0c0,0,0,0,0,0Z"
        />
        <path
          className="cls-3"
          d="M85.4,751.2c0,0,.1.1.1.2s0,0-.1,0h-2.8v1.3c0,.4-.1.6-.6.8h0s0,0,0,0c0-.2-.2-.4-.8-.5h0c.4,0,.7,0,.8,0,.2,0,.3,0,.3-.3v-1.2h-2.4c-.2,0-.3,0-.5,0l-.2-.3c.2,0,.3,0,.5,0h2.5c0-.4,0-.6,0-.7l.4.2.8-.8h-2.5c-.2,0-.3,0-.5,0l-.2-.3c.2,0,.3,0,.5,0h2.7l.3-.2.3.3c0,0,0,0,0,.1,0,0,0,0-.1,0-.2,0-.5.2-1.4.8,0,0,0,0,0,0,0,0,0,0-.2.1v.3h2.1l.3-.4.4.4h0ZM85.5,748.8s0,0,0,0,0,0,0,0c-.3,0-.4.2-.9.8h0s.4-.8.4-.8h-4.8c0,.7-.3.9-.6.9s-.2,0-.2-.2,0-.2.2-.3c.2-.2.4-.5.4-1h0c0,.1,0,.2,0,.3h3.1c.5-.7.8-1.2,1-1.7l.4.2c0,0,0,0,0,0,0,0,0,0,0,0-.2,0-.2,0-.4.3l-.9,1h1.5l.2-.3.5.4h0ZM80.4,747.2c.6.3.9.6.9.8,0,0,0,0,0,.1,0,.2-.1.4-.2.4s-.1,0-.2-.3c0-.3-.3-.7-.6-1,0,0,0,0,0,0ZM81.9,746.9c.4.4.7.7.7.9,0,0,0,0,0,0,0,.2-.2.4-.3.4s0,0,0-.2c0-.3-.2-.8-.4-1.1h0Z"
        />
        <path
          className="cls-3"
          d="M92.7,751.9c-.3,0-.5,0-.6.3,0,0,0,0,0,0s0,0,0,0c-1.1-.7-1.9-1.9-2.3-3.2h0v2.8c0,.6,0,1.1,0,1.4h0c0,.2,0,.2-.2.2,0,0-.1,0-.2,0s0,0,0-.1h0c0-.5,0-1.1,0-1.5v-2.6c-.6,1.1-1.4,2.4-3,3.5h0c1.5-1.4,2.2-2.5,2.8-3.7h-1.9c-.2,0-.3,0-.5,0l-.2-.3c.2,0,.3,0,.5,0h2.4v-1c0-.3,0-.8,0-1l.6.2s0,0,0,0,0,0,0,0l-.2.2v1.5h2l.3-.5.5.5s0,0,0,0,0,0,0,0h-2.6c.7,1.7,1.6,2.5,3,2.9h0c0,0,0,0,0,0ZM90.2,747.3c.9.2,1.2.5,1.2.8s0,.2-.1.2-.2,0-.3-.2c-.1-.2-.3-.5-.8-.8h0c0,0,0,0,0,0Z"
        />
        <path
          className="cls-3"
          d="M99.5,748.2s0,0,0,0,0,0,0,0h-5.7c-.2,0-.3,0-.5,0l-.2-.3c.2,0,.3,0,.5,0h5.1l.3-.4.5.5h0ZM97.7,749.9s0,0,0,0,0,0,0,0c-.2,0-.2,0-.3.2-.2.6-.5,1.1-.8,1.5.8.8,1.8,1.1,3,1.1h0c-.4,0-.6.2-.8.4,0,0,0,0,0,0s0,0,0,0c-.9-.3-1.7-.7-2.3-1.4-.7.7-1.5,1.1-2.9,1.6h0c1.3-.7,2.2-1.2,2.8-1.9-.4-.5-.8-1.2-1-2h.1c.3.7.6,1.3,1,1.8.4-.5.7-1.1.8-1.9,0,0,.5.3.5.3ZM95.8,749s0,0,0,0c0,0,0,0,0,0-.2,0-.3,0-.3,0-1,.7-1.6,1.1-1.9,1.2h0c.8-.7,1.5-1.3,1.9-1.7l.4.3h0ZM95.8,746.8c.2.1.9.4.9.9s-.1.3-.2.3,0,0-.1-.2c0-.3-.2-.6-.6-1h0c0,0,0,0,0,0ZM97.2,748.8c1.4.6,1.7.8,1.7,1.2s0,.3-.2.3,0,0-.2-.2c-.2-.3-.7-.8-1.4-1.2h0c0,0,0,0,0,0Z"
        />
        <path
          className="cls-3"
          d="M102.3,748.3l-.8,2.4c-.2.5-.2.7-.2,1.1s0,.5,0,.8c0,0,0,.1,0,.2,0,.3-.1.4-.3.4s-.2-.1-.2-.4,0-.1,0-.2c0-.4.1-.7.1-.9s0-.2,0-.2c0,0-.3-.1-.8-.2h0c.8,0,.9-.2,1.1-.6l1-2.5h.1s0,0,0,0ZM100.2,748.8c.4.1,1,.5,1,.8s-.1.4-.3.4,0,0-.1-.2c0-.2-.2-.5-.7-.8h0c0,0,0,0,0,0ZM100.6,747.2c.6.2,1.1.4,1.1.6,0,0,0,0,0,.2,0,.2-.1.3-.2.3s-.1,0-.2-.2c0-.2-.2-.5-.8-.8h0c0,0,0,0,0,0ZM103.2,750.3s0,0,0,0,0,0,0,0h-.2c0,2-.2,2.4-1.6,3.1h0c1.2-1,1.3-1.3,1.2-3.4l.5.2h0ZM106.5,747.9s0,0,0,0,0,0,0,0h-2.5l.3.3s0,0,0,0,0,0,0,0h-.2s-1.2,1-1.2,1h2.6c-.2-.2-.4-.5-.7-.8h0c.8.3,1.3.8,1.3,1h0c0,.3,0,.5-.2.5s-.2,0-.2-.3c0,0,0-.2-.1-.3-2.5,0-2.8.2-2.9.2,0,0,0,0,0,0s0,0,0,0l-.3-.4c.4,0,.6-.1.8-.3.4-.4.6-.7.9-1.1h-1.2c-.1,0-.3,0-.4,0l-.2-.2c.2,0,.3,0,.5,0h3.2l.3-.4.5.4h0ZM103.5,746.9c.2,0,1,.3,1,.7s0,.3-.2.3-.2,0-.2-.2c0-.2-.2-.5-.6-.7h0ZM104.3,750.3c0,0,0,0,0,0s0,0,0,0h-.2v1.8c0,.3,0,.8,0,.9h0c0,.1,0,.1-.2.2,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0-.8,0-1v-1.3c0-.3,0-.6,0-.8l.5.3h0ZM106.4,751.7c0,.9,0,1,.3,1.1,0,0,0,0,0,0s0,0,0,0c-.1.4-.3.4-1,.4s-.7,0-.7-.5v-1.9c0-.2,0-.5,0-.8l.6.3s0,0,0,0,0,0,0,0h-.2v2.2c0,.2,0,.2.4.2.5,0,.5,0,.6-1.2h.1,0Z"
        />
        <path
          className="cls-3"
          d="M113.1,748.4s0,0,0,0,0,0,0,0l-.2.2v1c0,.4,0,.7,0,1h0c0,.1,0,.2-.2.2,0,0-.1,0-.1,0s0,0,0,0v-.3h-2v1.2c0,.5,0,1.1,0,1.4h0c0,.1,0,.2-.2.2,0,0-.1,0-.2,0,0,0,0,0,0-.2h0c0-.5,0-1.1,0-1.5v-1.2h-2v.3c0,0,0,.1-.2.2,0,0-.1,0-.2,0s0,0,0-.1h0c0-.3,0-.7,0-1v-1.2c0-.2,0-.5,0-.7l.5.3h1.9v-.6c0-.3,0-.8,0-1l.6.3c0,0,0,0,0,0s0,0,0,0l-.2.2v1h1.9l.2-.4.5.3h0ZM110.2,750.4v-1.8h-2v1.8h2,0ZM112.6,750.4v-1.8h-2v1.8h2Z"
        />
        <path
          className="cls-3"
          d="M115.3,749.3c0,.2,0,.4,0,.6,0,1-.2,1.5-.5,1.8,0,0-.2,0-.3,0s-.2,0-.2-.2,0-.1.1-.2c.5-.5.7-.8.8-2.1h0ZM119,751.2c0,.9,0,1,.3,1.1,0,0,0,0,0,0s0,0,0,0c-.2.5-.4.5-1.7.5s-1.5,0-1.5-.5v-3.4c0-.3,0-.5,0-.8l.5.2s0,0,0,0,0,0-.2.2v3.6c0,.3,0,.4,1.3.4s.5,0,.6,0c.4,0,.4,0,.5-1.4h.1,0ZM117,747.2c.5.3,1.1.8,1.1,1.2s-.2.4-.3.4-.1,0-.2-.2c0-.3-.3-.9-.7-1.4h0c0,0,0,0,0,0ZM119.1,749.2c.7.5,1.3,1.3,1.4,1.6,0,0,0,.1,0,.2,0,.2-.1.5-.3.5s-.1,0-.2-.3c0-.3-.5-1.3-1.1-2h0c0,0,0,0,0,0Z"
        />
      </g>
      <g className="cls-14">
        <text className="cls-13" transform="translate(327.2 839.6)">
          <tspan x={0} y={0}>
            {"A1"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text className="cls-13" transform="translate(455.2 782.6)">
          <tspan x={0} y={0}>
            {"A2"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text className="cls-4" transform="translate(615.2 772.6)">
          <tspan x={0} y={0}>
            {"A3"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text className="cls-8" transform="translate(419.9 481.6)">
          <tspan x={0} y={0}>
            {"Musical "}
          </tspan>
        </text>
        <text className="cls-8" transform="translate(424 492.4)">
          <tspan x={0} y={0}>
            {"Island"}
          </tspan>
        </text>
        <text className="cls-9" transform="translate(421.1 503.2)">
          <tspan x={0} y={0}>
            {"\u97F3\u4E50\u5C9B"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text className="cls-13" transform="translate(777.2 784.6)">
          <tspan x={0} y={0}>
            {"A4"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-6"
          transform="translate(1107.2 189.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"D6"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <a href="/ly3">
          <text
            className="cls-12"
            transform="translate(538.5 192.4) scale(.9 1)"
          >
            <tspan x={0} y={0}>
              {"LY3"}
            </tspan>
          </text>
        </a>
      </g>
      <g className="cls-14">
        <text
          className="cls-18"
          transform="translate(314.9 126.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"L"}
          </tspan>
        </text>
        <text
          className="cls-19"
          transform="translate(324.7 126.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"Y6"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-18"
          transform="translate(318.9 243.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"L"}
          </tspan>
        </text>
        <text
          className="cls-19"
          transform="translate(328.7 243.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"Y1"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-18"
          transform="translate(418.9 243.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"L"}
          </tspan>
        </text>
        <text
          className="cls-19"
          transform="translate(428.7 243.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"Y2"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-18"
          transform="translate(423.9 126.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"L"}
          </tspan>
        </text>
        <text
          className="cls-19"
          transform="translate(433.7 126.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"Y7"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-18"
          transform="translate(686.9 126.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"L"}
          </tspan>
        </text>
        <text
          className="cls-19"
          transform="translate(696.7 126.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"Y8"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-18"
          transform="translate(689.9 241.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"L"}
          </tspan>
        </text>
        <text
          className="cls-19"
          transform="translate(699.7 241.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"Y4"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-18"
          transform="translate(785.9 237.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"L"}
          </tspan>
        </text>
        <text
          className="cls-19"
          transform="translate(795.7 237.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"Y5"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-18"
          transform="translate(792.9 126.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"L"}
          </tspan>
        </text>
        <text
          className="cls-19"
          transform="translate(802.7 126.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"Y9"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-19"
          transform="translate(1067.2 76.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"D5"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-19"
          transform="translate(936.2 246.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"D4"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-19"
          transform="translate(1147.2 302.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"D3"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-19"
          transform="translate(1343.2 232.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"D1"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text
          className="cls-19"
          transform="translate(1233.2 98.4) scale(.9 1)"
        >
          <tspan x={0} y={0}>
            {"D2"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text className="cls-13" transform="translate(909.2 841.6)">
          <tspan x={0} y={0}>
            {"A5"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text className="cls-4" transform="translate(1434.2 898.6)">
          <tspan x={0} y={0}>
            {"B2"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <text className="cls-7" transform="translate(1119.1 838.7)">
          <tspan x={0} y={0}>
            {"Outdoor Sports Field"}
          </tspan>
        </text>
        <text className="cls-5" transform="translate(1180.4 873.5)">
          <tspan x={0} y={0}>
            {"\u5BA4\u5916\u8FD0\u52A8\u573A"}
          </tspan>
        </text>
      </g>
      <g className="cls-14">
        <a href="/b1">
          <text
            className="cls-11"
            transform="translate(1230.2 591) scale(1.2 1)"
          >
            <tspan x={0} y={0}>
              {"B1"}
            </tspan>
          </text>
        </a>
      </g>
      <g className="cls-14">
        <text className="cls-2" transform="translate(273.7 869.7)">
          <tspan x={0} y={0}>
            {"Auditorium Hall"}
          </tspan>
        </text>
        <text className="cls-10" transform="translate(285.7 875.7)">
          <tspan x={0} y={0}>
            {"\u793C\u5802"}
          </tspan>
        </text>
      </g>
    </g>
    <g id="_\u56FE\u5C42_6" data-name=" \u56FE\u5C42 6">
      <g className="cls-58">
        <use
          width={10.5}
          height={10.8}
          transform="translate(493.1 768.7) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-53">
        <use
          width={10.5}
          height={10.8}
          transform="translate(936.1 273.7) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-47">
        <use
          width={10.5}
          height={10.8}
          transform="translate(1155.1 327.7) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-60">
        <use
          width={10.5}
          height={10.8}
          transform="translate(751.1 769.7) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-54">
        <use
          width={10.5}
          height={10.8}
          transform="translate(883.1 823.7) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-65">
        <use
          width={10.5}
          height={10.8}
          transform="translate(539.1 801.1) scale(3 -3)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-50">
        <use
          width={10.5}
          height={10.8}
          transform="translate(305.1 893) scale(1.5 -1.5)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-51">
        <use
          width={10.5}
          height={10.8}
          transform="translate(1436.1 832) scale(2 -2)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-61">
        <use
          width={10.5}
          height={10.8}
          transform="translate(121.1 828.1) scale(3 -3)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-57">
        <use
          width={10.5}
          height={10.8}
          transform="translate(1062.1 573.1) scale(3 -3)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-66">
        <use
          width={10.5}
          height={10.8}
          transform="translate(1019.1 234.1) scale(3 -3)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-29">
        <use
          width={10.5}
          height={10.8}
          transform="translate(547.1 289.1) scale(3.8 -3.8)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-55">
        <use
          width={10.5}
          height={10.8}
          transform="translate(357.2 823.1) scale(.9 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-48">
        <use
          width={10.5}
          height={10.8}
          transform="translate(1349.2 254.1) scale(.9 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-63">
        <use
          width={10.5}
          height={10.8}
          transform="translate(1217.2 81.1) scale(.9 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-49">
        <use
          width={10.5}
          height={10.8}
          transform="translate(1097.2 50.1) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-30">
        <use
          width={10.5}
          height={10.8}
          transform="translate(814.2 251) scale(1 -.9)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-64">
        <use
          width={10.5}
          height={10.8}
          transform="translate(823.2 142.1) scale(.9 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-62">
        <use
          width={10.5}
          height={10.8}
          transform="translate(712.2 143) scale(1 -.9)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-59">
        <use
          width={10.5}
          height={10.8}
          transform="translate(715.2 258.1) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-28">
        <use
          width={10.5}
          height={10.8}
          transform="translate(446.2 261.1) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-52">
        <use
          width={10.5}
          height={10.8}
          transform="translate(455.2 146) scale(.9 -.9)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-56">
        <use
          width={10.5}
          height={10.8}
          transform="translate(341.2 141.1) scale(1 -1)"
          xlinkHref="#AED"
        />
      </g>
      <g className="cls-67">
        <use
          width={10.5}
          height={10.8}
          transform="translate(347.2 260.1) scale(.9 -1)"
          xlinkHref="#AED"
        />
      </g>
    </g>
  </svg>
);
