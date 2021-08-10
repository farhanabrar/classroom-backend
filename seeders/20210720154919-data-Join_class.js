'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('join_class', [
      {
        id: '1',
        class_id: '88871070-f8e6-4390-a37c-5ae9a3e54b0c',
        user_id: '65eebd46-b789-4bef-9fb6-06c68dd7008f',
        role: 'student',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '2',
        class_id: 'a2570c4c-63fa-41aa-9126-40a327cd401c',
        user_id: '23ee0ca7-e3a3-422a-8c09-a615cccfba18',
        role: 'student',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '3',
        class_id: '88871070-f8e6-4390-a37c-5ae9a3e54b0c',
        user_id: '761c365d-e438-472d-b2e7-4d394939b71f',
        role: 'student',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '4',
        class_id: 'a2570c4c-63fa-41aa-9126-40a327cd401c',
        user_id: 'd73e5176-b7dd-4294-b543-901632d9bd9d',
        role: 'student',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '5',
        class_id: 'a2570c4c-63fa-41aa-9126-40a327cd401c',
        user_id: 'dcdf0b48-1bfd-47cb-9c1f-a21b38f743aa',
        role: 'student',
        created_at: new Date(),
        updated_at: new Date(), 
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
