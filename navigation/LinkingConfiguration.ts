import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Workout: {
            screens: {
              Workout: 'one',
            },
          },
          Meals: {
            screens: {
              Meals: 'two',
            },
          },
          Explore: {
            screens: {
              Explore: 'three',
            },
          },
          Me: {
            screens: {
              Me: 'four',
            },
          }
        },
      },
      NotFound: '*',
    },
  },
};
