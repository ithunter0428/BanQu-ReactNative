import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry, Animated, Easing, Modal } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider} from 'react-redux'
import { createStore } from 'redux';
import userProfileReducer from './src/Redux/Reducers/reducer';
import Dashboard from './src/Pages/MainPage';
import DashboardTransition from './src/Pages/MainPageTransition';
import PostForm from './src/Pages/Post';
import BroadCast from './src/Pages/Broadcast';
import PostEditor from './src/Pages/PostEditor';
import LocationForm from './src/Pages/Location/LocationForm';
import Profile from './src/Pages/MainPage/profile';


const Stack = createNativeStackNavigator();
// Create Store for Redux
const Store = createStore(userProfileReducer)

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={
                {
                  headerShown: false,
                  // header: () => <Profile />,
                }
              }
          />
          <Stack.Screen
            name="editor"
            component={PostEditor}
            options={
              headerStyle
            }
          /> 
          <Stack.Screen
            name="post"
            component={PostForm}
            options={
              headerStyle
            }             
          />
          <Stack.Screen
            name="broadcast"
            component={BroadCast}
            options={
              headerStyle
            }
          />
          <Stack.Screen
            name="location"
            component={LocationForm}
            options={
              headerStyle
            }
          />
          <Stack.Screen
              name="DashboardTrans"
              component={DashboardTransition}
              options={
                {
                  headerShown: false,
                }
              }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const headerStyle = {
  title: '',
  headerStyle: {
    backgroundColor: '#0D0C13',
    borderBottomWidth: 0,
  },
  headerTintColor: '#fff',
}

AppRegistry.registerComponent('MyApp', () => App);