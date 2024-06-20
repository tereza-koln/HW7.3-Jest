const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const output = sorting.sortByName(input);

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    expect(output).toEqual(expected);
  });

  it("Books names should not be sorted", () => {
    const input = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    expect(output).toEqual(expected);
  });

  it("Sorting a single book name should return the same array", () => {
    const input = ["Властелин Колец"];
    const output = sorting.sortByName(input);

    const expected = ["Властелин Колец"];

    expect(output).toEqual(expected);
  });

  it("Sorting an empty array should return an empty array", () => {
    const input = [];
    const output = sorting.sortByName(input);

    const expected = [];

    expect(output).toEqual(expected);
  });
});
