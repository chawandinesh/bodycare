import {Assets} from '@react-navigation/stack';
import React from 'react';
import {CheckBox} from 'react-native';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <ImageBackground
      source={require('../assets/bdbk.jpg')}
      style={{height, width, flex: 1}}>
      <View
        style={{
          //  backgroundColor: 'red',
          width: width,
          height: height * 0.35,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderWidth: 5,
            // borderColor: 'black',
            height: height * 0.13,
            width: width * 0.85,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: height * 0.04,
            shadowColor: '#ac4b63',
            shadowOffset: {width: 7, height: 10},
            shadowOpacity: 5,
          }}>
          <Text
            style={{
              fontSize: height * 0.05,
              padding: 5,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Body Care
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width,
          height: height * 0.7,
          // backgroundColor: 'pink',
          paddingTop: height * 0.01,
          marginTop: -70,
          // flexDirection: 'row'
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View
          style={{
            width,
            height: height * 0.14,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.09,
              justifyContent: 'center',
              // backgroundColor: 'red',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/bcicn.png')}
              style={{
                width: width * 0.2,
                height: height * 0.09,
                justifyContent: 'center',
              }}></Image>
          </View>

          <View
            style={{
              height: height * 0.15,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CategoriesScreen')}
              activeOpacity={0.7}
              style={{
                width: width * 0.67,
                height: height * 0.1,
                backgroundColor: 'white',
                marginTop: 1,
                marginRight: -10,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 30,
              borderBottomEndRadius: 30,
              borderTopColor: 'black',
              borderBottomColor: 'black',
              borderTopWidth: 5,
              borderBottomWidth: 5,
              shadowColor: 'black',
              shadowOpacity: 12,
              shadowOffset: {width: 3, height: 3},
              }}>
              <Text style={{fontSize: height * 0.05, fontWeight: 'bold'}}>
                Add Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width,
            height: height * 0.14,
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.09,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 25,
            }}>
            <Image
              source={require('../assets/bcicn.png')}
              style={{
                width: width * 0.2,
                height: height * 0.09,
                justifyContent: 'center',
              }}></Image>
          </View>

          <View
            style={{
              height: height * 0.15,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewDetails')}
              activeOpacity={0.7}
              style={{
                width: width * 0.67,
                height: height * 0.1,
                backgroundColor: 'white',
                marginTop: 1,
                // marginRight: -10,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 30,
              borderBottomEndRadius: 30,
              borderTopColor: 'black',
              borderBottomColor: 'black',
              borderTopWidth: 5,
              borderBottomWidth: 5,
              shadowColor: 'black',
              shadowOpacity: 12,
              shadowOffset: {width: 3, height: 3},
              }}>
              <Text style={{fontSize: height * 0.05, fontWeight: 'bold'}}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width,
            height: height * 0.14,
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.2,
              height: height * 0.09,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 25,
            }}>
            <Image
              source={require('../assets/bcicn.png')}
              style={{
                width: width * 0.2,
                height: height * 0.09,
                justifyContent: 'center',
              }}></Image>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{
              width: width * 0.67,
              height: height * 0.1,
              backgroundColor: 'white',
              marginLeft: 7,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 30,
              borderBottomEndRadius: 30,
              borderTopColor: 'black',
              borderBottomColor: 'black',
              borderTopWidth: 5,
              borderBottomWidth: 5,
              shadowColor: 'black',
              shadowOpacity: 12,
              shadowOffset: {width: 3, height: 3},
            }}>
            <Text
              style={{
                fontSize: height * 0.05,
                fontWeight: 'bold',
                color: 'black',
              }}>
              About Us
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: width * 0.65,
            height: height * 0.25,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 5,
          }}>
          <Image
            source={require('../assets/bcimc.png')}
            style={{
              width: width * 0.4,
              height: height * 0.27,
              justifyContent: 'center',
            }}></Image>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
