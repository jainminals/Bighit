import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import PhoneInput from "react-native-phone-number-input";

function HomeScreen() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const data = [
    {
      id: '1',
      title: 'Trending Players',
      poster: require('./assets/image3.png'),
    },
    {
      id: '2',
      title: 'Trending Sports',
      poster: require('./assets/image4.png'),
    },

    {
      id: '3',
      title: 'Top Coaches',
      poster: require('./assets/image5.png'),
    },
    {
      id: '4',
      title: 'Top Coaches',
      poster: require('./assets/image3.png'),
    },
  ];
  const dataplayer = [
    {
      id: '1',
      title: 'Abhishek',
      game: 'Cricket',
      poster: require('./assets/image6.png'),
    },
    {
      id: '2',
      title: 'Kanishk',
      game: 'Cricket',
      poster: require('./assets/image7.png'),
    },

    {
      id: '3',
      title: 'Aparajita',
      game: 'Basketball',
      poster: require('./assets/image8.png'),
    },
    {
      id: '4',
      title: ' Mrityunjay',
      game: 'Basketball',
      poster: require('./assets/image9.png'),
    },
    {
      id: '5',
      title: 'Akash',
      game: 'Basketball',
      poster: require('./assets/image10.png'),
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4738FF',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor="#4738FF" />
      <View style={{flex: 1, backgroundColor: '#FFf', width: '100%'}}>
        <ScrollView>
          <View style={{backgroundColor: '#fff', height: 280}}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 0, y: 1}}
              colors={['#009CEF', '#4738FF']}
              style={{
                height: 230,
                borderBottomLeftRadius: 200,
                borderBottomRightRadius: 200,
                marginHorizontal: -70,
              }}>
              <View
                style={{
                  marginHorizontal: 90,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#fff',
                      lineHeight: 22,
                    }}>
                    Welcome To BigHit
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 12,
                      color: '#fff',
                      lineHeight: 19,
                    }}>
                    India’s biggest sports platform
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      borderColor: '#fff',
                      borderWidth: 1,
                      padding: 10,
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: '#fff',
                        lineHeight: 19,
                      }}>
                      Create Profile
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                width: '100%',
                top: 80,
                zIndex: 1,
              }}>
              <Image
                source={require('./assets/image11.png')}
                style={{height: 200, width: '95%', borderRadius: 20, zIndex: 1}}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 25,
              marginTop: 9,
            }}>
            <Text
              style={{
                lineHeight: 20,
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 5,
                color: '#000',
              }}>
              Vote & support players to help them get on the top
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginTop: 10,
            }}>
            <View
              style={{
                backgroundColor: '#0075FF',
                padding: 10,
                borderRadius: 20,
                alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: '#fff',
                  lineHeight: 19,
                }}>
                Explore & Vote
              </Text>
            </View>
          </View>
          <View style={{height: 50, width: '100%'}}>
            <ExpandingDot
              data={data}
              expandingDotWidth={40}
              scrollX={scrollX}
              activeDotColor="black"
              inActiveDotColor="white"
              dotStyle={{
                width: 10,
                height: 10,
                backgroundColor: '#fff',
                borderRadius: 5,
                marginHorizontal: 5,
                borderColor: '#000',
                borderWidth: 1,
              }}
            />
          </View>
          <FlatList
            data={data}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            pagingEnabled
            horizontal
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View
                key={item.id}
                style={{
                  marginVertical: 10,
                  height: 200,
                  backgroundColor: '#fff',
                  marginLeft: 20,
                  width: 200,
                  borderRadius: 20,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 2,
                }}>
                <Image
                  source={item.poster}
                  style={{
                    height: 150,
                    width: '100%',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}
                />
                <View
                  style={{
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      lineHeight: 20,
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginTop: 5,
                      color: '#000',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </View>
            )}
          />

          <View style={{marginLeft: 10, marginVertical: 10}}>
            <View>
              <Text style={{lineHeight: 20, fontWeight: 'bold', fontSize: 17}}>
                <AntDesign name={'star'} size={20} color={'#FFA700'} />
                {'  '}Top Players on BigHit Leaderboard
              </Text>
            </View>
            <FlatList
              data={dataplayer}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View
                  key={item.id}
                  style={{
                    marginVertical: 10,
                    height: 160,
                    backgroundColor: '#fff',
                    marginLeft: 10,
                    width: 100,
                    borderRadius: 20,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.poster}
                    style={{height: 100, width: '100%', borderRadius: 30}}
                  />
                  <Text
                    style={{
                      lineHeight: 15,
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#000',
                      marginTop: 5,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      lineHeight: 15,
                      fontSize: 14,
                      fontWeight: '500',
                      color: '#000',
                    }}>
                    {item.game}
                  </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
function PlayScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Play!</Text>
    </View>
  );
}
function TrophyScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TrophyScreen!</Text>
    </View>
  );
}
function UserScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View  style={{  height: '60%',  width: '100%', }}>
        <Image
          resizeMode="stretch"
          source={require('./assets/image12.jpeg')}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
        <View style={{alignSelf:"center",marginTop:-40}}><Text style={{color:"#181818",fontSize:20}}>Welcome to <Text style={{color:"#000",fontWeight:"bold"}}>Big Hit</Text></Text></View>
      </View>
       <View style={{alignItems:"center",justifyContent:"space-between",flex:1}}>
      <PhoneInput
            placeholder='Enter Mobile number'
            defaultCode="IN"
            layout="first"
            // onChangeText={(text) => {
            //   setValue(text);
            // }}
            // onChangeFormattedText={(text) => {
            //   setFormattedValue(text);
            // }}
            autoFocus
            countryPickerButtonStyle={{borderBottomColor:"gray",borderBottomWidth:1}}
            textInputStyle={{padding:0 ,color:"#000"}}
          containerStyle={{width:"90%"}}
          textContainerStyle={{padding:1,borderBottomColor:"gray",borderBottomWidth:1,marginLeft:10,backgroundColor:"#fff"}}
          />
      <TouchableOpacity onPress={()=>alert("OTP send.")}><Text style={{marginTop:10,color:"#0062FF"}}>We will send you 6 digit OTP</Text></TouchableOpacity>
      <TouchableOpacity  onPress={()=> navigation.navigate("Home")} style={{backgroundColor:"#000",paddingHorizontal:120,paddingVertical:10,borderRadius:30,marginTop:10}}><Text style={{color:"#fff"}}>Let's Go</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")}><Text style={{marginTop:10,color:"#0062FF"}}>SKIP TO EXPLORE</Text></TouchableOpacity>
      <View style={{marginVertical:20,paddingHorizontal:5}}><Text style={{color:"gray",fontSize:13}}>I agree to the <Text onPress={() => alert("User agreement") } style={{color:"#0062FF"}}>User agreement</Text>{" "}and{" "}<Text  onPress={() => alert("Privacy policy") } style={{color:"#0062FF"}}>Privacy policy{" "}</Text>of BigHit</Text></View>
    </View>
    </View>
  );
}
function NotificationScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>NotificationScreen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Play') {
              iconName = focused ? 'logo-youtube' : 'logo-youtube';
            } else if (route.name === 'Trophy') {
              iconName = focused ? 'trophy' : 'trophy-outline';
            } else if (route.name === 'User') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0062FF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Play" component={PlayScreen} />
        <Tab.Screen name="Trophy" component={TrophyScreen} />
        <Tab.Screen name="User" component={UserScreen} />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{tabBarBadge: 0}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
