export const types = {
   BRIE: "Aged Brie",
   BACKSTAGE_PASS: "Backstage passes to a TAFKAL80ETC concert",
   SULFURAS: "Sulfuras, Hand of Ragnaros",
   CONJURED: "Conjured",
};

// Quality
export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;

export const isLessThanMaxQuality = (quality: number) => quality < MAX_QUALITY;
export const isMoreThanMinQuality = (quality: number) => quality > MIN_QUALITY;

export const decreaseQuality = (quality: number, factor: number = 1) =>
   quality - factor;
export const increaseQuality = (quality: number, factor: number = 1) =>
   quality + factor;

// Expiration
export const MIN_DAYS = 0;

export const isExpired = (sellIn: number) => sellIn < MIN_DAYS;

export const decreaseSellIn = (sellIn: number) => sellIn - 1;
