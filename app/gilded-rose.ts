import { Item } from "@/item";

import {
   increaseQuality,
   decreaseQuality,
   isExpired,
   isLessThanMaxQuality,
   isMoreThanMinQuality,
   types,
   decreaseSellIn,
} from "@/utils/items";

export class GildedRose {
   items: Array<Item>;

   constructor(items = [] as Array<Item>) {
      this.items = items;
   }

   private updateBackstagePass(item: Item) {
      if (isLessThanMaxQuality(item.quality)) {
         item.quality = increaseQuality(item.quality);

         if (item.sellIn < 11 && isLessThanMaxQuality(item.quality)) {
            item.quality = increaseQuality(item.quality);
         }
         if (item.sellIn < 6 && isLessThanMaxQuality(item.quality)) {
            item.quality = increaseQuality(item.quality);
         }
      }

      item.sellIn = decreaseSellIn(item.sellIn);

      if (isExpired(item.sellIn)) {
         item.quality = item.quality - item.quality;
      }
   }

   private updateBrie(item: Item) {
      if (isLessThanMaxQuality(item.quality)) {
         item.quality = increaseQuality(item.quality);
      }

      item.sellIn = decreaseSellIn(item.sellIn);

      if (isExpired(item.sellIn)) {
         if (isLessThanMaxQuality(item.quality)) {
            item.quality = increaseQuality(item.quality);
         }
      }
   }

   updateDefault(item: Item) {
      if (isMoreThanMinQuality(item.quality)) {
         item.quality = decreaseQuality(item.quality);
      }

      item.sellIn = decreaseSellIn(item.sellIn);

      if (isExpired(item.sellIn) && isMoreThanMinQuality(item.quality)) {
         item.quality = decreaseQuality(item.quality);
      }
   }

   private updateSulfuras(item: Item) {}

   updateQuality() {
      this.items.forEach((item) => {
         switch (item.name) {
            case types.BACKSTAGE_PASS:
               this.updateBackstagePass(item);
               break;
            case types.BRIE:
               this.updateBrie(item);
               break;
            case types.SULFURAS:
               this.updateSulfuras(item);
               break;
            default:
               this.updateDefault(item);
         }
      });

      return this.items;
   }
}
