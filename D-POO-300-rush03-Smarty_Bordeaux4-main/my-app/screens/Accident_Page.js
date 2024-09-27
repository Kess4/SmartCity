import * as React from "react";
import {Box, AspectRatio, Image, Stack, HStack, Center, Heading, Text, NativeBaseProvider,ScrollView} from 'native-base'
import axios from 'axios';
import { useEffect, useState} from 'react';

function Accident() {
	const [info, setInfo] = React.useState([
  ]);
  async function getInfo() {
    try {
      const response = await axios.get('http://172.20.10.2:3000/gps')
      setInfo(response.data.data);

    }
    catch (error){
      console.error(error);
    }
  }
    useEffect(() => {
      getInfo();
    }, [info]);

	return ( 
	<NativeBaseProvider>
    <ScrollView>
      <Heading size="md" marginLeft={'auto'} marginRight={'auto'} marginTop={5}>
        Revues des différents accidents 
      </Heading>
      {info.map((coor, index) => (
        <Box alignItems="center" paddingTop={7} >
          <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{borderColor: "coolGray.600",backgroundColor: "gray.700"}} _web={{shadow: 2,borderWidth: 0}} _light={{backgroundColor: "gray.50"}} >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={{
                uri: "https://img.lamontagne.fr/rZkGPt2-Nz6Egk1eEcTc3OTvVPdD-N9OtvCpQnDwpwo/fit/657/438/sm/0/bG9jYWw6Ly8vMDAvMDAvMDYvMDIvNjEvMjAwMDAwNjAyNjE2Mw.jpg"
              }} alt="image"  />
              </AspectRatio>
              <Center bg="#FA8231" _dark={{bg: "violet.400" }} _text={{color: "warmGray.50",fontWeight: "700",fontSize: "xs"}} position="absolute" bottom="0" px="3" py="1.5">
                {coor['Heure/minute']}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Accident survenu le : {coor.Date}
                </Heading>
                <Text fontSize="xs" _light={{color: "#8854D0"}} fontWeight="500" ml="-0.5" mt="-1">
                  {coor.Adresse} {coor['Code Postal']}
                </Text>
              </Stack>
              <Text fontWeight="400">
                Conditions : {coor['Conditions atmospheriques']}, {coor.Localisation} , {coor.Lumiere} , Surface {coor.Surface} {"\n"}{"\n"}
                Etat des personnes impliquées : {coor.Gravite}
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text color="rgba(75, 101, 132, 1)" fontWeight="400">
                  {coor.Commune} : {coor.Departement}, {coor.Region}
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>
      ))}
    </ScrollView>
	</NativeBaseProvider>
  );
};



export default Accident;
