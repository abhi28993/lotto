import React from 'react';
import {TouchableOpacity} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {GlobalStyles} from  '../Assets/Colors/Color';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  Pressable,
  Button,
} from 'react-native';
const {width} = Dimensions.get('window');
const height = width * 0.4;
const Home = () => {
  const Images = [
    'https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2021/03/04131433/MVU-BFADM-2020-Q4-Skyscraper-Future-of-Video-Games-Trends-Technology-Types-header-v2.jpg',
    'https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=1200&quality=85&auto=format&fit=max&s=5c5b07b8cc96af633881fb903fb14a83',
    'https://cdn.vox-cdn.com/thumbor/qXIegymAZU6HdA4XjeTOY5YEFXU=/139x136:2861x1565/fit-in/2722x1429/cdn.vox-cdn.com/uploads/chorus_asset/file/23067480/jbareham_211201_ecl1139_goty_2021_top50_16x9_no_bug.jpg',
  ];
  return (
    <>
      <View style={{width, height}}>
        <ScrollView
          pagingEnabled
          horizontal
          style={{width, height}}
          showsHorizontalScrollIndicator={false}>
          {Images.map((image, index) => (
            <Image
              key={index}
              source={{
                uri: image,
              }}
              style={{width, height, resizeMode: 'cover'}}
            />
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
          }}>
          {Images.map((i, k) => (
            <Text key={k} style={{color: 'yellow'}}>
              ●
            </Text>
          ))}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.screen}>
          <View style={styles.formContainer}>
            <Text style={styles.formtext}>Play Straight from M-Pesa!</Text>
            <View style={styles.formTextOuter}>
              <TextInput
                style={styles.formInput}
                placeholder="Mobile Phone Number"
                keyboardType="numeric"
              />
              <Text style={styles.randomText}>
                Enter 6 numbers from 0 to 39. Or select Random Picks
              </Text>
              <View style={styles.inputArea}>
                <View style={styles.randomFormButton}>
                     {/* <TextInput
                    style={styles.numberInput}
                    // ref={pin1Ref}
                    maxLength={1}
                    keyboardType="numeric"
                    // onChangeText={e => {
                    //   setPin1(e);
                    //   if (e) {
                    //     pin2Ref.current.focus();
                    //   }
                    // }}
                    // value={pin1}
                  /> */}
                    <Text style={styles.randomTextButton}>Random Picks</Text>
                  
                </View>
                <View style={styles.inputAreas}>
                  <TextInput
                    style={styles.numberInput}
                    // ref={pin1Ref}
                    maxLength={1}
                    keyboardType="numeric"
                    // onChangeText={e => {
                    //   setPin1(e);
                    //   if (e) {
                    //     pin2Ref.current.focus();
                    //   }
                    // }}
                    // value={pin1}
                  />
                  <TextInput
                    style={styles.numberInput}
                    maxLength={1}
                    // ref={pin2Ref}
                    keyboardType="numeric"
                    // onChangeText={e => {
                    //   console.log(e);
                    //   setPin2(e);
                    //   e ? pin3Ref.current.focus() : pin1Ref.current.focus();
                    // }}
                  />
                  <TextInput
                    style={styles.numberInput}
                    maxLength={1}
                    // ref={pin3Ref}
                    keyboardType="numeric"
                    // onChangeText={e => {
                    //   setPin3(e);
                    //   e ? pin4Ref.current.focus() : pin2Ref.current.focus();
                    // }}
                  />
                  <TextInput
                    style={styles.numberInput}
                    maxLength={1}
                    // ref={pin4Ref}
                    keyboardType="numeric"
                    // onChangeText={e => {
                    //   setPin4(e);
                    //   e ? pin5Ref.current.focus() : pin3Ref.current.focus();
                    // }}
                  />
                  <TextInput
                    style={styles.numberInput}
                    maxLength={1}
                    // ref={pin5Ref}
                    keyboardType="numeric"
                    // onChangeText={e => {
                    //   setPin5(e);
                    //   e ? pin6Ref.current.focus() : pin4Ref.current.focus();
                    // }}
                  />
                  <TextInput
                    style={styles.numberInput}
                    // ref={pin6Ref}
                    maxLength={1}
                    keyboardType="numeric"
                    // onChangeText={e => {
                    //   setPin6(e);
                    //   if (!e) pin5Ref.current.focus();
                    // }}
                  />
                </View>
              </View>
              <TextInput
                style={styles.formInputs}
                placeholder="Mobile Phone Number"
                keyboardType="numeric"
              />
              <View style={styles.insideButtonForm}>
                <Button title="Play Now" color="#841584">
                  PlayNow
                </Button>
              </View>
            </View>
          </View>
          <View style={styles.productCategories}>
            <View style={styles.productCategoriesContainer}>
              <View style={styles.innerTextContainer}>
                <Text style={styles.textColor}> KSH 40M</Text>
                <Text style={styles.textColor}>DAILY DRAW</Text>
                <View style={styles.insideButton}>
                  <Button title="Play Now" color="#841584">
                    PlayNow
                  </Button>
                </View>
              </View>
              <View style={styles.innerTextContainer}>
                <Text style={styles.textColor}>KSH 100M</Text>
                <Text style={styles.textColor}>MEGA DRAW</Text>
                <View style={styles.insideButton}>
                  <Button title="Play Now" color="#841584">
                    PlayNow
                  </Button>
                </View>
              </View>
            </View>
            <View style={styles.productCategoriesContainer}>
              <View style={styles.innerTextContainer}>
                <Text style={styles.textColor}>KSH 200M</Text>
                <Text style={styles.textColor}>EXTRA</Text>
                <View style={styles.insideButton}>
                  <Button title="Play Now" color="#841584">
                    PlayNow
                  </Button>
                </View>
              </View>
              <View style={styles.innerTextContainer}>
                <Text style={styles.textColor}>Raffle</Text>
                <Text style={styles.textColor}>Packed Orders</Text>
                <View style={styles.insideButton}>
                  <Button title="Play Now" color="#841584">
                    PlayNow
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: GlobalStyles.colors.primary700,
  },
  formTextOuter: {
    width: '90%',
  },
  formContainer: {
    width: '100%',
    height: '56%',
    elevation: 15,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
  },
  randomText: {
    color: '#f5dd07',
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  randomTextButton: {
    backgroundColor: 'white',
    color:'white'
  },
  randomFormButton:{
    backgroundColor:'white',
    width:'30%'
  },

  inputArea: {
    width:"100%",
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 4,
  },
  inputAreas: {
    width:"70%",
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding:3,
  },

  numberInput: {
    marginLeft: '6%',
    width: '10%',
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
  },
  formtext: {
    textAlign: 'center',
    color: '#f5dd07',
    fontSize: 16,
    marginTop: '7%',
    fontWeight: 'bold',
  },
  formInput: {
    marginTop: '4%',
    height: 40,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  formInputs: {
    marginTop: '10%',
    height: 40,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  productCategoriesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    justifyContent: 'space-evenly',
    marginTop: '2%',
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
  },
  insideButtonForm: {marginTop: '3%'},
  insideButton: {marginTop: '7%'},
  innerTextContainer: {
    width: '45%',
    backgroundColor: '#252ABE',
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 15,
  },
  popularProducts: {
    width: '90%',
    height: '15%',
    marginLeft: '5%',
    marginTop: '10%',
  },
  popularProductsText: {
    fontWeight: 'bold',
  },
  popularImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainerPopular: {
    height: '90%',
    width: '40%',
    backgroundColor: 'white',
  },
  productCategorystyle: {
    marginTop: '5%',
  },
  // productCategoriesSVG: {
  //   marginTop: '5%',
  // },
});
