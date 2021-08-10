'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
        {
        id: '23ee0ca7-e3a3-422a-8c09-a615cccfba18',
        name: 'farhan',
        phone: '0812192345',
        address: 'Cinere',
        birthdate: '2000-07-25',
        place_birth: 'Jakarta',
        email: 'farhan@gmail.com',
        password: 'password',
        last_study: 'S1',
        institution: 'Tel-U',
        current_job: 'student',
        sosmed: 'muntazharr',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '65eebd46-b789-4bef-9fb6-06c68dd7008f',
        name: 'udin',
        phone: '081234567892',
        address: 'Jakarta Timur',
        birthdate: '2000-1-05',
        place_birth: 'Depok',
        email: 'udin@gmail.com',
        password: 'udin123',
        last_study: 'S1',
        institution: 'Unjani',
        current_job: 'student',
        sosmed: 'udinsedunia',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'dcdf0b48-1bfd-47cb-9c1f-a21b38f743aa',
        name: 'ali',
        phone: '082236732',
        address: 'Buah Batu',
        birthdate: '2002-05-05',
        place_birth: 'Bandung',
        email: 'ali@gmail.com',
        password: 'ali123',
        last_study: 'S1',
        institution: 'ABTT',
        current_job: 'student',
        sosmed: 'alibear',
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
