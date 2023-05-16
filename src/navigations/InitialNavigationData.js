/* eslint-disable prettier/prettier */
import Biometrics from '../screens/authentication/Biometrics';
import CloudBackUp from '../screens/authentication/CloudBackUp';
import Control from '../screens/authentication/Control';
import PhoneStorage from '../screens/authentication/PhoneStorage';
import HomeScreen from '../screens/home/HomeScreen';
import Notification from '../screens/NotificationScreen/Notification';
import CloudRecovery from '../screens/recoverWallet/CloudRecovery';
import SourceSelection from '../screens/recoverWallet/SourceSelection';
import OnBoards from '../screens/OnBoards';
import Menu from '../screens/Menubar/Menu';

export const navigationData = [
  {id: 1, name: 'Menu', component: Menu},
  {id: 2, name: 'HomeScreen', component: HomeScreen},
  {id: 3, name: 'Notification', component: Notification},
  {id: 4, name: 'Control', component: Control},
  {id: 5, name: 'PhoneStorage', component: PhoneStorage},
  {id: 6, name: 'Biometrics', component: Biometrics},
  {id: 7, name: 'CloudBackUp', component: CloudBackUp},
  {id: 8, name: 'OnBoards', component: OnBoards},
  {id: 9, name: 'SourceSelection', component: SourceSelection},
  {id: 10, name: 'CloudRecovery', component: CloudRecovery},
];
