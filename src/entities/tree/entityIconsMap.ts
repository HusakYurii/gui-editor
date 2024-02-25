import {
  ContainerIcon,
  GraphicsIcon,
  NineSliceSpriteIcon,
  SpriteIcon,
  TextIcon,
} from "../../shared/icons/tree";
import { TEntityType, ENTITY_TYPES } from "../../types/entities/store/entity";

export const ENTITY_ICONS_MAP: Record<TEntityType, () => JSX.Element> = {
  [ENTITY_TYPES.SPRITE]: SpriteIcon,
  [ENTITY_TYPES.NINE_SLICE_SPRITE]: NineSliceSpriteIcon,
  [ENTITY_TYPES.TEXT]: TextIcon,
  [ENTITY_TYPES.CONTAINER]: ContainerIcon,
  [ENTITY_TYPES.GRAPHICS]: GraphicsIcon,
};
