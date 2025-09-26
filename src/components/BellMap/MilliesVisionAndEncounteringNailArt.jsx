/**
 * @file src/components/BellMap/MilliesVisionAndEncounteringNailArt.jsx
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
 * @typedef {object} MilliesVisionAndEncounteringNailArtProps
 *
 * @property {Function} setSelectedPost Function used to set selected post.
 * @property {string} locale Locale from `useState()`.
 */

/**
 * Non-regular store blocks that needs special operation.
 */
export default function MilliesVisionAndEncounteringNailArt(
  /** @type {MilliesVisionAndEncounteringNailArtProps} */
  { setSelectedPost, locale },
) {
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
          setSelectedPost({
            slug: xmumConfig.storeBlock.patches.milliesVision.slug,
            locale: locale,
          })
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
          setSelectedPost({
            slug: xmumConfig.storeBlock.patches.encounteringNailArt
              .slug,
            locale: locale,
          })
        }
        showIcon={false}
      />
    </>
  );
}
