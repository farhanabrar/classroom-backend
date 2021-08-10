'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('classes', [
      {
        id: '88871070-f8e6-4390-a37c-5ae9a3e54b0c',
        code: '5',
        name: 'Kecerdasan Buatan',
        description: 'dasar-dasar dan algoritma kecerdasan buatan',
        date_start: '2019-05-11',
        date_end: '2019-11-11',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'a2570c4c-63fa-41aa-9126-40a327cd401c',
        code: '4',
        name: 'Pemrograman Berorientasi Objek',
        description: 'mempelajari konsep dasar PBO dengan bahasa pemrograman C++',
        date_start: '2019-05-14',
        date_end: '2019-11-14',
        created_at: new Date(),
        updated_at: new Date(),
      }
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
