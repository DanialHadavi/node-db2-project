exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("car-dealer")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("car-dealer").insert([
        {
          id: 1,
          VIN: "1234453432",
          make: "Honda",
          model: "Accord",
          mileage: "50000",
          transmission: "auto",
          title: "clean",
        },
        {
          id: 2,
          VIN: "1313125234",
          make: "Toyota",
          model: "Corolla",
          mileage: "120000",
          transmission: "auto",
          title: "clean",
        },
        {
          id: 3,
          VIN: "1232143511",
          make: "Dodge",
          model: "Charger",
          mileage: "75000",
          transmission: "auto",
          title: "clean",
        },
      ]);
    });
};
