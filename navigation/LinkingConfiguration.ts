import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Workout: {
            screens: {
              Workout: 'workout',
            },
          },
          Meals: {
            screens: {
              Meals: 'meals',
            },
          },
          Explore: {
            screens: {
              Explore: 'explore',
            },
          },
          Me: {
            screens: {
              Me: 'profile',
            },
          }
        },
      },
      NotFound: '*',
    },
  },
};
