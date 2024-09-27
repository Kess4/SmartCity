import * as React from "react";
import { View, Text, setState} from "react-native";
import { NativeBaseProvider, Box, Center, Select, CheckIcon, Heading, VStack, FormControl, Link, Input, Button, HStack, Image, Icon, Pressable, Flex} from "native-base";
import { MaterialIcons } from "@expo/vector-icons"; 

import Map from '../screens/Map';
import axios from "axios";

const LoginScreen = ({navigation}) => {
  
  const [Email, setUserEmail] = React.useState('');
  const [Password, setUserPassword] = React.useState('');
    const handleLogin = (credentials) => {
      credentials.preventDefault();
      console.log(Email, Password);
  
      axios
        .post('http://172.20.10.2:3000/user')
        .then((response) => {
          console.log(response);
          if(response.status === 200) {
            console.log("login successful")
            }
        }).catch((error) => {
          console.error(error);
        })
    }
    return <NativeBaseProvider>
     <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading marginLeft={'auto'} marginRight={'auto'}>
            SAFE ROAD {'\n'} 
          </Heading>
          <Image marginLeft={'auto'} marginRight={'auto'} source={require('../assets/logo.png')} alt="Logo"/>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            {'\n'} Connectez-vous pour continuer!
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Nom d'utilisateur" onChangeText={(Email) =>
                  setUserEmail(Email)}
              />
              <Input mt="3" InputLeftElement={<Icon as={<MaterialIcons name="visibility-off" />} size={5} ml="2" color="muted.400" />}  type={"password"} placeholder="Mot de passe" onChangeText={(Password) => setUserPassword(Password)}></Input>
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Mot de passe oublié ?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="#8854D0" type="submit" onPressIn={() => navigation.navigate('Map')} onPress={handleLogin}>
              Se connecter
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  };

export default LoginScreen;
