import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("Normal items", () => {
    it("Normal items degrade in quality", () => {
      const inputItems = [new Item("Default", 5, 10)];
      const expectedItems = [new Item("Default", 4, 9)];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });

    it("Normal items degrade in quality twice as fast once the sell by date has passed", () => {
      const inputItems = [new Item("Default", 0, 10)];
      const expectedItems = [new Item("Default", -1, 8)];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });

    it("Normal items never degrade in quality below 0", () => {
      const inputItems = [new Item("Default", 10, 0)];
      const expectedItems = [new Item("Default", 9, 0)];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });
  });

  describe("Aged Brie", () => {
    it("Aged Brie should increase in quality the older it gets", () => {
      const inputItems = [new Item("Aged Brie", 12, 7)];
      const expectedItems = [new Item("Aged Brie", 11, 8)];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });

    it("Aged Brie should not increase above 50", () => {
      const inputItems = [new Item("Aged Brie", 12, 50)];
      const expectedItems = [new Item("Aged Brie", 11, 50)];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });
  });

  describe("Backstage passes", () => {
    it("Backstage passes should increase in quality the older it gets", () => {
      const inputItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 12, 7),
      ];
      const expectedItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 8),
      ];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });

    it("Backstage passes should not increase above 50", () => {
      const inputItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 12, 50),
      ];
      const expectedItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50),
      ];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });

    it("Backstage passes shoulde increase in quality by 2 when there are 10 days or less", () => {
      const inputItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),
      ];
      const expectedItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 9, 32),
      ];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });

    it("Backstage passes shoulde increase in quality by 3 when there are 10 days or less", () => {
      const inputItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40),
      ];
      const expectedItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 4, 43),
      ];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });
  });

  describe("Sulfuras", () => {
    it("Sulfuras should not decrease date or degrade quality", () => {
      const inputItems = [new Item("Sulfuras, Hand of Ragnaros", 10, 80)];
      const expectedItems = [new Item("Sulfuras, Hand of Ragnaros", 10, 80)];
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedItems);
    });
  });
});
