import { Item } from "@/item";

export class GildedRose {
   items: Array<Item>;

   constructor(items = [] as Array<Item>) {
      this.items = items;
   }

   updateBrie(item: Item) {
      if (item.quality < 50) {
         item.quality = item.quality + 1;
      }

      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0) {
         if (item.quality < 50) {
            item.quality = item.quality + 1;
         }
      }
   }

   updateDefault(item: Item) {
      if (item.quality > 0) {
         item.quality = item.quality - 1;
      }

      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0 && item.quality > 0) {
         item.quality = item.quality - 1;
      }
   }

   updateSulfuras(item: Item) {}

   updatePass(item: Item) {
      if (item.quality < 50) {
         item.quality = item.quality + 1;
         if (item.sellIn < 11) {
            if (item.quality < 50) {
               item.quality = item.quality + 1;
            }
         }
         if (item.sellIn < 6) {
            if (item.quality < 50) {
               item.quality = item.quality + 1;
            }
         }
      }

      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0) {
         item.quality = item.quality - item.quality;
      }
   }

   updateQuality() {
      this.items.forEach((item, index) => {
         switch (item.name) {
            case "Aged Brie":
               this.updateBrie(item);
               break;
            case "Backstage passes to a TAFKAL80ETC concert":
               this.updatePass(item);
               break;
            case "Sulfuras, Hand of Ragnaros":
               this.updateSulfuras(item);
               break;
            default:
               this.updateDefault(item);
         }
      });

      return this.items;
   }
}
