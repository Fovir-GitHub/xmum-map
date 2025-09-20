/**
 * @file MilliesVisionAndEncounteringNailArt.jsx
 * @description Draw milles vision and encountering nail art.
 * @author Fovir
 * @since 2025-09-20
 */

import xmumConfig from "../../config";
import StoreBlock, {
  getFillColor,
  getStoreIcon,
} from "../StoreBlock/StoreBlock";

/**
 * Non-regular store blocks that needs special operation.
 *
 * @param handleBlockClick Function to call when a store block is clicked.
 * @param locale Locale from `useState()`.
 */
export default function MilliesVisionAndEncounteringNailArt({
  handleBlockClick,
  locale,
}) {
  const xPosition =
    xmumConfig.storeBlock.patches.position.x *
    xmumConfig.storeBlock.size.width;
  const height = xmumConfig.storeBlock.size.height / 2;

  return (
    <>
      <StoreBlock
        x={xPosition}
        y={xmumConfig.storeBlock.position.firstRowY}
        width={xmumConfig.storeBlock.size.width}
        height={height}
        fill={getFillColor(
          xmumConfig.storeBlock.patches.milliesVision.category,
        )}
        stroke={xmumConfig.storeBlock.style.stroke}
        strokeWidth={xmumConfig.storeBlock.style.strokeWidth}
        text={xmumConfig.storeBlock.patches.milliesVision.name}
        showIcon={false}
        handleClick={() =>
          handleBlockClick(
            xmumConfig.storeBlock.patches.milliesVision.slug,
            locale,
          )
        }
      />

      <StoreBlock
        x={xPosition}
        y={xmumConfig.storeBlock.position.firstRowY + height}
        width={xmumConfig.storeBlock.size.width}
        height={height}
        fill={getFillColor(
          xmumConfig.storeBlock.patches.encounteringNailArt.category,
        )}
        stroke={xmumConfig.storeBlock.style.stroke}
        strokeWidth={xmumConfig.storeBlock.style.strokeWidth}
        text={xmumConfig.storeBlock.patches.encounteringNailArt.name}
        icon={getStoreIcon(
          xmumConfig.storeBlock.patches.encounteringNailArt.category,
        )}
        handleClick={() =>
          handleBlockClick(
            xmumConfig.storeBlock.patches.encounteringNailArt.slug,
            locale,
          )
        }
        showIcon={false}
      />
    </>
  );
}
