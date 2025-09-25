import xmumConfig from "../../config";
import StoreBlock, {
  getFillColor,
  getStoreIcon,
} from "../StoreBlock/StoreBlock";

export default function Ly3GFloor({ locale, setSelectedPost }) {
  const storeInformation = xmumConfig.map.ly3.gStoreInformation;

  return (
    <div>
      <img src="maps/LY3_GF.svg" width={10000} height={10000} />

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <svg
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <StoreBlock
            x={4400}
            y={4200}
            fill={getFillColor(storeInformation.Category)}
            icon={getStoreIcon(storeInformation)}
            width={1300}
            height={850}
            text={storeInformation.Name}
            stroke={xmumConfig.storeBlock.style.stroke}
            strokeWidth={xmumConfig.storeBlock.style.strokeWidth}
            fontSize="8rem"
            handleClick={() =>
              setSelectedPost({
                slug: storeInformation.Slug,
                locale: locale,
              })
            }
          />
        </svg>
      </div>
    </div>
  );
}
