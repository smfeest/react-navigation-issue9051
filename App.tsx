import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Pressable, Text} from 'react-native';

const ParentScreen = ({
  navigation: {navigate},
}: {
  navigation: NavigationProp<NavigationParams>;
}) => (
  <Pressable onPress={() => navigate('Child')}>
    <Text>Open modal</Text>
  </Pressable>
);

const ChildScreen = ({
  navigation: {goBack},
}: {
  navigation: NavigationProp<NavigationParams>;
}) => (
  <Pressable
    onPress={() =>
      requestAnimationFrame(() => {
        goBack();
      })
    }>
    <Text>Close</Text>
  </Pressable>
);

type NavigationParams = {
  Parent: undefined;
  Child: undefined;
};

const Stack = createStackNavigator<NavigationParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Parent" component={ParentScreen} />
        <Stack.Screen
          name="Child"
          component={ChildScreen}
          options={{
            gestureEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
