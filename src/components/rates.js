const rates = [
  {
    pensionalGap: [
      {
        id: 1,
        age: 16,
        rate: 54,
      },
      {
        id: 2,
        age: 17,
        rate: 56,
      },
      {
        id: 3,
        age: 18,
        rate: 58,
      },
      {
        id: 4,
        age: 19,
        rate: 60,
      },
      {
        id: 5,
        age: 20,
        rate: 62,
      },
      {
        id: 6,
        age: 21,
        rate: 64,
      },
      {
        id: 7,
        age: 22,
        rate: 66,
      },
      {
        id: 9,
        age: 23,
        rate: 68,
      },
      {
        id: 10,
        age: 24,
        rate: 70,
      },
      {
        id: 11,
        age: 25,
        rate: 72,
      },
      {
        id: 12,
        age: 26,
        rate: 74,
      },
      {
        id: 13,
        age: 27,
        rate: 75,
      },
    ],

    healthInsurancePerAge: [
      {
        id: 1,
        minAge: 0,
        maxAge: 14,
        valuePerMonth: 288.527,
      },
      {
        id: 2,
        minAge: 15,
        maxAge: 40,
        valuePerMonth: 333.447,
      },
      {
        id: 3,
        minAge: 41,
        maxAge: 50,
        valuePerMonth: 466.292,
      },
      {
        id: 4,
        minAge: 51,
        maxAge: 59,
        valuePerMonth: 573.566,
      },
      {
        id: 5,
        minAge: 60,
        maxAge: 'n/a',
        valuePerMonth: 'no es posible',
      },
    ],

    prepaidMedicinePerAge: [
      {
        id: 1,
        minAge: 0,
        maxAge: 0,
        valuePerGender: [
          {
            male: {
              value: 319000,
            },
            female: {
              value: 320000,
            },
          },
        ],
      },
      {
        id: 2,
        minAge: 1,
        maxAge: 4,
        valuePerGender: [
          {
            male: {
              value: 260000,
            },
            female: {
              value: 262000,
            },
          },
        ],
      },

      {
        id: 3,
        minAge: 5,
        maxAge: 14,
        valuePerGender: [
          {
            male: {
              value: 166000,
            },
            female: {
              value: 166000,
            },
          },
        ],
      },

      {
        id: 4,
        minAge: 15,
        maxAge: 24,
        valuePerGender: [
          {
            male: {
              value: 189000,
            },
            female: {
              value: 249000,
            },
          },
        ],
      },

      {
        id: 5,
        minAge: 25,
        maxAge: 34,
        valuePerGender: [
          {
            male: {
              value: 211000,
            },
            female: {
              value: 351000,
            },
          },
        ],
      },

      {
        id: 6,
        minAge: 35,
        maxAge: 44,
        valuePerGender: [
          {
            male: {
              value: 268000,
            },
            female: {
              value: 374000,
            },
          },
        ],
      },

      {
        id: 7,
        minAge: 45,
        maxAge: 54,
        valuePerGender: [
          {
            male: {
              value: 361000,
            },
            female: {
              value: 429000,
            },
          },
        ],
      },

      {
        id: 8,
        minAge: 55,
        maxAge: 64,
        valuePerGender: [
          {
            male: {
              value: 610000,
            },
            female: {
              value: 612000,
            },
          },
        ],
      },

      {
        id: 9,
        minAge: 65,
        maxAge: 69,
        valuePerGender: [
          {
            male: {
              value: 871000,
            },
            female: {
              value: 875000,
            },
          },
        ],
      },

      {
        id: 10,
        minAge: 70,
        maxAge: 74,
        valuePerGender: [
          {
            male: {
              value: 1017000,
            },
            female: {
              value: 1021000,
            },
          },
        ],
      },

      {
        id: 11,
        minAge: 75,
        maxAge: 79,
        valuePerGender: [
          {
            male: {
              value: 1252000,
            },
            female: {
              value: 1258000,
            },
          },
        ],
      },

      {
        id: 12,
        minAge: 80,
        maxAge: 150,
        valuePerGender: [
          {
            male: {
              value: 1465000,
            },
            female: {
              value: 1472000,
            },
          },
        ],
      },
    ],

    complementaryHealthPlan: [
      {
        id: 1,
        minAge: 0,
        maxAge: 40,
        valuePerMonth: 288527,
      },
      {
        id: 2,
        minAge: 41,
        maxAge: 50,
        valuePerMonth: 468292,
      },
      {
        id: 3,
        minAge: 51,
        maxAge: 59,
        valuePerMonth: 573566,
      },
      {
        id: 4,
        minAge: 60,
        maxAge: 69,
        valuePerMonth: 269425,
      },
      {
        id: 5,
        minAge: 70,
        maxAge: 79,
        valuePerMonth: 310921,
      },
      {
        id: 6,
        minAge: 80,
        maxAge: 89,
        valuePerMonth: 404945,
      },
      {
        id: 7,
        minAge: 90,
        maxAge: 150,
        valuePerMonth: 514157,
      },
    ],
  },
];
