'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('schedule', [
      {
      id: '1',
      class_id: "88871070-f8e6-4390-a37c-5ae9a3e54b0c",
      name: 'pertemuan pertama',
      code: '001',
      start: "2021-03-02 23:40:09",
      end: "2021-02-27 00:49:00"
    },
    {
      id: '2',
      class_id: "a2570c4c-63fa-41aa-9126-40a327cd401c",
      name: 'pertemuan kesatu',
      code: '002',
      start: "2021-07-02 07:30:00",
      end: "2021-07-02 10:00:00"
    },
    {
      id: 'c973d63d-b747-4da1-bca7-b3aa85940416',
      class_id: "88871070-f8e6-4390-a37c-5ae9a3e54b0c",
      name: 'pertemuan kedua',
      code: '003',
      start: "2021-07-15 12:00:00",
      end: "2021-07-15 14:00:00"
    },
  ]);
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
